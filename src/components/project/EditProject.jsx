'use client'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { TeamMember } from '@/components/TeamMember'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { updateClientProject } from '@/services/projects'

export function EditProject ({ user, project, dict }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedParticipants, setSelectedParticipants] = useState([
    // Inicializa aquí el array de participantes seleccionados
    { id: 1, name: 'Participant 1' },
    { id: 3, name: 'Participant 3' }
    // ... otros participantes seleccionados
  ])
  // Array de participantes (objetos de usuario)
  const participantes = [
    { id: 1, name: 'Participant 1' },
    { id: 2, name: 'Participant 2' },
    { id: 3, name: 'Participant 3' },
    { id: 4, name: 'Participant 4' },
    { id: 5, name: 'Participant 5' },
    { id: 6, name: 'Participant 6' },
    { id: 7, name: 'Participant 7' },
    { id: 8, name: 'Participant 8' },
    { id: 9, name: 'Participant 9' }
    // ... otros objetos de usuario
  ]

  const [formData, setFormData] = useState({
    name: project.name,
    participants: selectedParticipants,
    status: project.status,
    description: project.description
  })

  useEffect(() => {
    // Cada vez que selectedParticipants cambia, actualiza formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      participants: JSON.stringify(selectedParticipants)
    }))
  }, [selectedParticipants])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes enviar formData a tu servidor o realizar cualquier otra acción necesaria
    console.log('Form data:', formData)
    // Llamar a la función de actualización del proyecto aquí
    const { name, description, status } = formData
    // const participants = selectedParticipants.map(participant => participant.id)
    const result = await updateClientProject(project.id, name, description, status, project.archived, project.owner, project.deadline)

    if (result === 'success') {
      // La actualización fue exitosa, puedes hacer lo que necesites aquí, por ejemplo, redirigir al usuario a otra página
      console.log('Proyecto actualizado correctamente.')
      window.history.back()
    } else {
      // Ocurrió un error durante la actualización, puedes manejar el error aquí
      console.error('Error al actualizar el proyecto:', result)
    }
  }

  return (
    <form className="space-y-1" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold leading-none pb-3">
      {dict.edit.title}
      </h1>
      <p className="text-sm text-muted-foreground">
        {dict.edit.slogan}
      </p>
      <Separator className="my-4" />
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-3">
          {dict.edit.name}
        </p>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={project.name}
        />
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-3">
        {dict.edit.owner}
        </p>
        <div className="w-fit bg-[#F9F5EF] rounded-lg p-4">
            <TeamMember user={user} />
        </div>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-3">
          {dict.edit.participant}
        </p>
        <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={(event) => event.stopPropagation()}>
          <Button className="w-[223px]" variant="outline">{dict.edit.select}</Button>
        </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {/* Input para buscar participantes */}
            <Input
              type="text"
              placeholder={dict.edit.search}
              className="w-full p-2 border-b mb-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DropdownMenuSeparator />
            {/* Renderizar los items dinámicamente desde el array */}
            {participantes
              .filter(participant => participant.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((participant) => (
                <DropdownMenuCheckboxItem
                  key={participant.id}
                  checked={selectedParticipants.some(p => p.id === participant.id)}
                  onCheckedChange={(isChecked, event) => {
                    if (event) {
                      event.stopPropagation()
                    }
                    setSelectedParticipants((prevSelectedParticipants) => {
                      if (isChecked) {
                        return [...prevSelectedParticipants, participant]
                      } else {
                        return prevSelectedParticipants.filter((p) => p.id !== participant.id)
                      }
                    })
                  }}
                >
                  {participant.name}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
        <div className="flex flex-wrap">
          {selectedParticipants.map((participant) => (
            <div key={participant.id} className="w-fit bg-[#F9F5EF] rounded-lg p-4 mt-4 mr-4 mb-4">
              <TeamMember user={participant} />
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-3">
          {dict.edit.status}
        </p>
        <Select name="status" onValueChange={(value) => handleInputChange({ target: { name: 'status', value } })} defaultValue={formData.status}>
          <SelectTrigger className={`w-[223px] ${formData.status === 'Finished' ? 'bg-[#B9EFCA] text-[#00513A]' : formData.status === 'In Progress' ? 'bg-[#EFDCB9] text-[#512700]' : 'bg-[#B9C5EF] text-[#000D51]'}`}>
            <SelectValue>
              {formData.status}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Finished" className="text-[#00513A] bg-[#B9EFCA] hover:bg-[#B9EFCA] focus:bg-[#B9EFCA]">Finished</SelectItem>
            <SelectItem value="In Progress" className="text-[#512700] bg-[#EFDCB9] hover:bg-[#EFDCB9] focus:bg-[#EFDCB9]">In Progress</SelectItem>
            <SelectItem value="Not Started" className="text-[#000D51] bg-[#B9C5EF] hover:bg-[#B9C5EF] focus:bg-[#B9C5EF]">Not Started</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-3">
          {dict.edit.description}
        </p>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder={project.description}
          className="resize-none h-[150px]"
        />
      </div>
      {/* Campo oculto para almacenar los participantes seleccionados como una cadena JSON */}
      <input type="hidden" name="participants" value={formData.participants} />
      <div className="flex justify-between items-center mb-4 pt-5">
        <AlertDialog>
            <AlertDialogTrigger type="button" className="bg-red-500 text-white px-4 py-2 rounded">{dict.edit.delete}</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{dict.edit.aresure}</AlertDialogTitle>
                <AlertDialogDescription>
                {dict.edit.deletetext}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{dict.edit.cancel}</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 text-white">{dict.edit.yesdelete}</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        <div className="flex space-x-2">
          <button type="button" className="bg-white text-black px-4 py-2 rounded border border-gray-300">{dict.edit.cancel}</button>
          <AlertDialog>
            <AlertDialogTrigger className="bg-[#47433E] text-white px-4 py-2 rounded">{dict.edit.confirm}</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{dict.edit.aresure}</AlertDialogTitle>
                <AlertDialogDescription>
                {dict.edit.confirmtext}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{dict.edit.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit} className="bg-[#16860D] text-white">{dict.edit.yesmodify}</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </form>
  )
}
