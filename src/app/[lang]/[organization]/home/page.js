'use client'

import {
  Card,
  Grid,
  Text,
  Title,
  Flex,
  ProgressBar,
  AreaChart,
  BarList,
  Bold,
  DonutChart,
  Metric
} from '@tremor/react'
import { useLang } from '@/context/language-context'
import { useUser } from '@/context/user-context'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/utils'

const valueFormatter = function (number) {
  return new Intl.NumberFormat('us').format(number).toString()
}

export default function Home () {
  const { lang, dictionary } = useLang()
  const { user } = useUser()

  const horasSemanales = 40

  /*
   * Obtener salario del usuario
   */
  const { data: salary } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?username=eq.${user?.username}&select=salary`)
  const salario = salary?.[0]?.salary

  const cotizacionSeguridadSocial = 0.0638 // 6.38%
  const impuestosRenta = 0.0923 // 9,23%

  // Función para calcular salario neto y bruto
  function calcularSalarioNetoYBruto (salario) {
    const cotizacionSS = salario * cotizacionSeguridadSocial
    const impuestoRenta = salario * impuestosRenta
    const salarioNeto = salario - cotizacionSS - impuestoRenta

    // Redondear a dos decimales
    const salarioNetoRedondeado = parseFloat(salarioNeto.toFixed(2))
    const porcentaje = ((salarioNetoRedondeado / salario) * 100).toFixed(2)

    return {
      salarioNeto: salarioNetoRedondeado,
      porcentaje
    }
  }

  const { salarioNeto, porcentaje } = calcularSalarioNetoYBruto(salario)

  /*
   * Obtener tiempo de trabajo semanal
   */
  useEffect(() => {
    if (user?.username) {
      // Calcula la fecha actual y retrocede para encontrar el inicio de la semana (lunes)
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0)
      const currentDay = currentDate.getDay()
      const startDate = new Date(currentDate)
      // startDate.setDate(startDate.getDate() - currentDay + 1) // Retrocede al lunes
      startDate.setDate(startDate.getDate() - (currentDay + 6) % 7)

      console.log('startDate ', startDate)

      // Obtén la fecha de finalización de la semana (domingo)
      const endDate = new Date(currentDate)
      endDate.setDate(endDate.getDate() + 6) // Avanza al domingo

      console.log('endDate ', endDate)

      const fetchData = async () => {
        const { data: timeData } = await supabase
          .from('in-and-outs')
          .select('total')
          .gte('in_date', startDate.toDateString())
          .lte('out_date', endDate.toDateString())
          .eq('username', user?.username)

        console.log('timeData ', timeData)

        // Suma las horas del listado
        const totalHours = (timeData.reduce((total, entry) => total + entry.total, 0) / 60)
        console.log('totalHours ', totalHours)

        // Actualiza el estado de time
        setTime([
          {
            name: dictionary.home['time-to-spend'],
            hours: horasSemanales - totalHours >= 0 ? horasSemanales - totalHours : 0
          },
          {
            name: dictionary.home['time-spent'],
            hours: totalHours
          }
        ])

        console.log('Total de horas:', totalHours)
      }

      fetchData()
    }
  }, [user?.username])

  const [time, setTime] = useState([
    {
      name: dictionary.home['time-spent'],
      hours: 0
    },
    {
      name: dictionary.home['time-to-spend'],
      hours: 0
    }
  ])

  const valueFormatterTime = function (number) {
    return new Intl.NumberFormat('us').format(number).toString() + ' h'
  }

  /**
   * Obtener tareas Nuevas, Bloqueadas, Completada y En progreso
   */
  const { data: tasks } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-tasks?username=eq.${user?.username}&select=tasks`)
  const [tks, setTasks] = useState([
    {
      name: dictionary.home['task-done'],
      value: 0
    },
    {
      name: dictionary.home['task-in-progress'],
      value: 0
    },
    {
      name: dictionary.home['task-new'],
      value: 0
    },
    {
      name: dictionary.home['task-blocked'],
      value: 0
    }
  ])

  async function obtenerTareas (tasks) {
    let nuevas = 0
    let bloqueadas = 0
    let completadas = 0
    let enProgreso = 0
    for (let i = 0; i < tasks.length; i++) {
      const id = tasks[i].tasks
      console.log('id ', id)
      const { data: estado, error } = await supabase
        .from('tasks')
        .select('status')
        .eq('id', id)
      console.log('error ', error)
      console.log('estado ', estado)
      if (estado[0].status === 'new') {
        nuevas++
      } else if (estado[0].status === 'block') {
        bloqueadas++
      } else if (estado[0].status === 'done') {
        completadas++
      } else if (estado[0].status === 'in progress') {
        enProgreso++
      }
    }
    return { nuevas, bloqueadas, completadas, enProgreso }
  }
  useEffect(() => {
    const obtenerDatosAsync = async () => {
      try {
        if (tasks) {
          const { nuevas, bloqueadas, completadas, enProgreso } = await obtenerTareas(tasks)
          setTasks([
            {
              name: dictionary.home['task-done'],
              value: completadas
            },
            {
              name: dictionary.home['task-in-progress'],
              value: enProgreso
            },
            {
              name: dictionary.home['task-new'],
              value: nuevas
            },
            {
              name: dictionary.home['task-blocked'],
              value: bloqueadas
            }
          ])
        }
      } catch (error) {
        console.error('Error al obtener tareas:', error)
      }
    }
    obtenerDatosAsync()
  }, [tasks])

  /**
   * Obtener proyectos abiertos y cerrados
   */
  const { data: projects } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?&select=status`)
  const [pjts, setProjects] = useState([
    {
      name: dictionary.home['project-open'],
      value: 0
    },
    {
      name: dictionary.home['project-closed'],
      value: 0
    }])

  useEffect(() => {
    let open = 0
    let closed = 0
    if (projects) {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].status === 'open') {
          open++
        } else {
          closed++
        }
      }
    }
    setProjects([
      {
        name: dictionary.home['project-open'],
        value: open
      },
      {
        name: dictionary.home['project-closed'],
        value: closed
      }])
  }, [projects])

  /**
   * Tareas realizadas durante la semana
   */
  const [taskWeek, setTaskWeek] = useState([
    {
      date: 'Jan 22',
      SemiAnalysis: 0
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 0
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 0
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 0
    },
    {
      date: 'May 22',
      SemiAnalysis: 0
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 0
    }])
  useEffect(() => {
    // Calcula la fecha actual y retrocede para encontrar el inicio de la semana (lunes)
    if (tasks) {
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0)
      const currentDay = currentDate.getDay()
      const startDate = new Date(currentDate)
      // startDate.setDate(startDate.getDate() - currentDay + 1) // Retrocede al lunes
      startDate.setDate(startDate.getDate() - (currentDay + 6) % 7)

      // Obtén la fecha de finalización de la semana (domingo)
      const endDate = new Date(currentDate)
      endDate.setDate(startDate.getDate() + 7) // Avanza al domingo

      const martes = new Date(startDate)
      martes.setDate(martes.getDate() + 1)
      const miercoles = new Date(startDate)
      miercoles.setDate(miercoles.getDate() + 2)
      const jueves = new Date(startDate)
      jueves.setDate(jueves.getDate() + 3)
      const viernes = new Date(startDate)
      viernes.setDate(viernes.getDate() + 4)
      const sabado = new Date(startDate)
      sabado.setDate(sabado.getDate() + 5)

      const taskDoneWeek = async () => {
        const { data: tasksDone } = await supabase
          .from('tasks')
          .select('id, updated_at')
          .gte('updated_at', startDate.toDateString())
          .lte('updated_at', endDate.toDateString())
          .eq('status', 'done')
        console.log('tasksDone ', tasksDone)
        console.log('tasks ', tasks)
        const idsDeTasks = tasks.map(task => task.tasks)
        // Filtra tasksDone usando los identificadores de tasks
        const filteredTasksDone = tasksDone.filter(taskDone => idsDeTasks.includes(taskDone.id))
        console.log('filteredTasksDone ', filteredTasksDone)
        // Crear un array para almacenar el resultado final
        const resultArray = []

        // Iterar sobre los días de la semana
        for (let i = 0; i < 7; i++) {
          const day = new Date(startDate)
          day.setDate(day.getDate() + i)

          // Formatear la fecha en 'MMM DD'
          const formattedDate = day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

          // Filtrar las tareas realizadas para el día actual
          const tasksDoneForDay = tasksDone.filter(taskDone =>
            new Date(taskDone.updated_at).toLocaleDateString() === day.toLocaleDateString()
          )

          // Agregar un objeto al array para el día actual
          if (lang === 'es') {
            resultArray.push({
              date: formattedDate,
              'Tareas completadas': tasksDoneForDay.length
            })
          } else {
            resultArray.push({
              date: formattedDate,
              'Tasks done': tasksDoneForDay.length
            })
          }
        }

        console.log('Resultado final en formato de array:', resultArray)
        setTaskWeek(resultArray)
      }
      taskDoneWeek()
    }
  }, [tasks])

  return (
    <>
    <header className="text-center inline-flex items-center">
      <h1 className="text-custom-mustard text-2xl border-r-2 ml-2 pr-3">
        MaYA
      </h1>
      <p className="text-gray-300 text-2xl ml-2 pl-3">
        {dictionary.home.title}
      </p>
    </header>
    <main className="">
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card className='col-span-2'>
          <Title>{dictionary.home.week}</Title>
          <AreaChart
            className="h-72 mt-4"
            data={taskWeek}
            index="date"
            categories={[dictionary.home['task-done']]}
            colors={['yellow']}
            valueFormatter={valueFormatter}
          />
        </Card>
        <div className="flex flex-col gap-6">
        <Card className="flex flex-col h-full max-w-sm justify-center items-center gap-y-4">
          <Bold className="text-custom-mustard text-2xl">{dictionary.home['salary-value']}</Bold>
          <Text className='flex items-center gap-2.5'>
            <Metric className="text-5xl">{salarioNeto} {dictionary.home['symbol-money']}</Metric>
          </Text>
        </Card>
          <Card className="max-w-sm mx-auto space-y-2">
            <Title>{dictionary.home['gross-net']}</Title>
            <Flex>
              <Text>{salarioNeto} {dictionary.home['symbol-money']} &bull; {porcentaje}%</Text>
              <Text>{salario} {dictionary.home['symbol-money']}</Text>
            </Flex>
            <ProgressBar value={porcentaje} color="yellow" className="mt-3"/>
          </Card>
        </div>
      </Grid>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card className="max-w-lg">
          <Title>{dictionary.home['task-title']}</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>{dictionary.home.tasks}</Bold>
            </Text>
            <Text>
              <Bold>{dictionary.home.number}</Bold>
            </Text>
          </Flex>
          <BarList data={tks} className="mt-2" color="yellow" />
        </Card>

        <Card className="max-w-lg">
          <Title>{dictionary.home['project-title']}</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>{dictionary.home.projects}</Bold>
            </Text>
            <Text>
              <Bold>{dictionary.home.number}</Bold>
            </Text>
          </Flex>
          <BarList data={pjts} className="mt-2" color="yellow" />
        </Card>

        <Card className="mx-auto">
          <Title>{dictionary.home['time-spent-vs']}</Title>
          <DonutChart
            className="mt-6"
            data={time}
            category="hours"
            index="name"
            valueFormatter={valueFormatterTime}
            colors={['yellow', 'orange']}
          />
        </Card>
      </Grid>
    </main>
    </>
  )
}
