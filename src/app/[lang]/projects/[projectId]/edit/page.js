import { cookies } from 'next/headers'
import { getServerProjectById } from '@/services/projects'
import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { TeamMember } from '@/components/TeamMember'
import { getServerUserById } from '@/services/users'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default async function Page ({ params: { lang, projectId } }) {
  const project = await getServerProjectById({ cookies, id: projectId })
  const user = await getServerUserById({ cookies, id: project.owner })

  if (project === null) {
    redirect('/' + lang)
  }

  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-semibold leading-none pb-2">
        Edit project
      </h1>
      <p className="text-sm text-muted-foreground">
        A project contains all tasks, including the members.
      </p>
      <Separator className="my-4" />
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-2">
          Name
        </p>
        <Input type="name" placeholder={project.name} />
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-2">
          Owner
        </p>
        <div className="w-fit bg-[#F9F5EF] rounded-lg p-4">
            <TeamMember user={user} />
        </div>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-2">
          Participants
        </p>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-2">
          Status
        </p>
        <Select>
          <SelectTrigger className="w-[232px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='pt-5'>
        <p className="text-sm font-semibold leading-none pb-2">
          Description
        </p>
        <Textarea placeholder={project.description}
                  className="resize-none"/>
      </div>
      <div className="flex justify-between items-center mb-4 pt-5">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <div className="flex space-x-2">
          <button className="bg-white text-gray-700 px-4 py-2 rounded">Cancelar</button>
          <button className="bg-[#47433E] text-white px-4 py-2 rounded">Confirmar</button>
        </div>
      </div>
    </div>
  )
}
