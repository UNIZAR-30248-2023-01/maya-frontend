'use client'

import { Number, ComboboxEnum, ComboboxArray, DatePicker, TextArea } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { Label } from '@/components/ui/label'
import { cn, normalize } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TeamMember } from '@/components/team-member'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function TaskPage ({ params }) {
  const { dictionary } = useLang()
  const [edit, setEdit] = useState(false)
  const assignees = [
    { email: 'ja1me@maya.com', src: '/assets/avatars/memojis/1.webp', name: 'Jaime', lastname: 'Martín' },
    { email: 'marinika@maya.com', src: '/assets/avatars/memojis/4.webp', name: 'Marina', lastname: 'Lamiel' }]

  const status = tasksStatuses[0]
  const label = tasksLabels[0]
  return (

    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-4 items-center'>
            <Label className='text-4xl font-semibold text-foreground'>Titulo</Label>
            {edit &&
              <Badge variant="outline" className='max-w-fit h-fit max-h-fit py-1 leading-none border-black'>
                <Label className='text-xs font-semibold'>{params.projectName}</Label>
              </Badge>}
          </div>

          <div className='flex gap-4'>
            <Button variant='outline' onClick={() => setEdit(!edit)}>Editar</Button>
            <Button>Borrar</Button>
          </div>
        </div>

        {!edit && <div className='flex flex-row gap-2 items-center'>
          <Badge variant="outline" className='max-w-fit h-fit max-h-fit py-1 leading-none border-black'>
            <Label className='text-xs font-semibold'>{params.projectName}</Label>
          </Badge>
          <Badge variant="outline" className={cn('max-w-fit h-fit max-h-fit py-1 leading-none', label.style)} >{<Label className='text-xs font-semibold capitalize'>{dictionary.labels[label.value]}</Label>}</Badge>
          <Badge variant="outline" className={cn('max-w-fit h-fit max-h-fit py-1 leading-none', 'flex items-center gap-x-1', status.style)} >
            {status.icon && <span>{status.icon}</span>}
            <Label className='capitalize text-xs font-semibold'>{dictionary.status[status.value]}</Label>
          </Badge>
        </div>}
      </div>

      <div className="flex flex-col w-full gap-1.5">
        {edit
          ? (
            <TextArea
              id={dictionary.tasks['description-column']}
              label={dictionary.tasks['description-column']}
              placeholder={dictionary.tasks['new-task-description-placeholder']}
              onChange={''}
            />
            )
          : (
            <>
              <Label htmlFor={params.taskId + '-description'} className="capitalize">{normalize(dictionary.tasks['description-column'])}</Label>
              <Card className='min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                <CardContent className='p-0'>
                  Descripcion
                </CardContent>
              </Card>
            </>

            )}
      </div>

      <div className='flex flex-col gap-1.5'>
        {edit
          ? (
            <ComboboxArray
                id='assignees'
                label={dictionary.tasks['assignees-column']}
                placeholder={dictionary.tasks['assignees-column']}
                list={assignees.map((assignee) => ({ value: assignee.name + ' ' + assignee.lastname, label: assignee.name + ' ' + assignee.lastname }))}
                values={[]}
                onChange={(e) => {
                  /* const assigness = form.assignees || []
                  const isSelected = assigness ? assigness.includes(e) : false
                  if (isSelected) {
                    return setter({ key: 'assignees', value: assigness?.filter((assignee) => assignee !== e) })
                  }
                  setter({ key: 'assignees', value: [...assigness, e] }) */
                }}
              />
            )
          : (
            <>
              <Label htmlFor={params.taskId + '-description'} className="capitalize">{normalize(dictionary.tasks['assignees-column'])}</Label>
              <div className='flex flex-row gap-6 px-3 py-2'>
                {assignees.map((user) => (
                  <TeamMember key={user.username} user={user}/>
                ))}
              </div>
            </>

            )}
      </div>

      <div className='flex justify-between gap-6 pt-4'>
        <div className='flex flex-col gap-1.5 w-full'>
          <DatePicker
            id="end-date"
            label={dictionary.tasks['end-date-column']}
            placeholder={dictionary.tasks['new-end-date-placeholder']}
            value={''}
            onChange={() => { }/* (e) => setter({ key: 'end_date', value: e || null }) */}
          />
        </div>

        <div className="flex flex-col w-full gap-1.5">
          {edit
            ? (
              <Number
                min={0}
                id={dictionary.tasks['estimated-column']}
                label={dictionary.tasks['estimated-column']}
                placeholder={dictionary.tasks['new-task-estimated-placeholder']}
                onChange={() => { }/* (e) => setter({ key: 'estimated', value: Number(e.target.value) }) */}
              />
              )
            : (
              <>
                <Label htmlFor={params.taskId + '-estimated'} className="capitalize">{normalize(dictionary.tasks['estimated-column'])}</Label>
                <Card className='max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                  <CardContent className='p-0'>
                    Estimacion
                  </CardContent>
                </Card>
              </>

              )}
        </div>
      </div>

      {edit &&
        <div className='flex flex-row justify-between gap-6'>
          <ComboboxEnum
            id='status'
                  label={dictionary.tasks['status-column']}
                  list={tasksStatuses}
                  value={dictionary.status.new}
                  dictionary={dictionary.status}
                  searchDictionary={dictionary.search}
                  onChange={(e) => {
                    // const original = Object.keys(dictionary.status).find(key => dictionary.status[key] === e)
                    // setter({ key: 'status', value: original === form.status ? null : original })
                  }}
          />

          <ComboboxEnum
            id='label'
                  label={dictionary.tasks['label-column']}
                  list={tasksLabels}
                  value={dictionary.labels.ui}
                  dictionary={dictionary.labels}
                  searchDictionary={dictionary.search}
                  onChange={(e) => {
                    // const original = Object.keys(dictionary.labels).find(key => dictionary.labels[key] === e)
                    // setter({ key: 'label', value: original === form.label ? null : original })
                  }}
          />
        </div>
      }
    </div>
  )
}
