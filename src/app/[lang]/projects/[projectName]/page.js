'use client'

import {
  LuBoxes,
  LuUsers,
  LuUser,
  LuSettings2
} from 'react-icons/lu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TasksPage from './project-tasks'
import PeoplePage from './project-people'
import { useLang } from '@/context/language-context'
import TeamPage from './project-team'
import { ProjectSettings } from '@/components/projects/settings/project-settings'
import { useUser } from '@/context/user-context'
import useSWR from 'swr'

export default function ProjectPage ({ params }) {
  const { projectName } = params
  const { dictionary } = useLang()
  const { user } = useUser()
  const { data: project, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?name=eq.${projectName}&select=*,people:people-project(*)`)

  if (!isLoading) {
    return (
    <>
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks" className="flex items-center gap-x-1.5 capitalize">
            <LuBoxes className="w-3.5 h-3.5" />
            {dictionary.tasks['tasks-tab']}
          </TabsTrigger>
          <TabsTrigger value="people" className="flex items-center gap-x-1.5 capitalize">
            <LuUser className="w-3.5 h-3.5" />
            {dictionary.people['members-tab']}
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-x-1.5 capitalize">
            <LuUsers className="w-3.5 h-3.5"/>
            {dictionary.tasks['teams-tab']}
          </TabsTrigger>
          {project[0]?.people.find(e => e.username === user.username && e.role === 'owner') &&
            <TabsTrigger id="project-settings" value="settings" className="flex items-center gap-x-1.5 capitalize">
              <LuSettings2 className="w-3.5 h-3.5" />
              {dictionary.tasks['settings-tab']}
            </TabsTrigger>
          }
        </TabsList>
        <TabsContent value="tasks">
          <TasksPage projectName={projectName} />
        </TabsContent>
        <TabsContent value="people">
          <PeoplePage projectName={projectName} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamPage/>
        </TabsContent>
        <TabsContent value="settings" className='flex justify-around'>
          <ProjectSettings project={project[0]} />
        </TabsContent>
      </Tabs>
    </>
    )
  }
}
