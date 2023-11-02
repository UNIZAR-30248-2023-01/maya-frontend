'use client'

import {
  LuBoxes,
  LuUsers,
  LuUser,
  LuCalendar,
  LuSettings2
} from 'react-icons/lu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TasksPage from './project-tasks'
import PeoplePage from './project-people'
import TeamPage from './project-team'
import MilestonesPage from './project-milestones'
import SettingsPage from './project-settings'

export const metadata = {
  title: 'Project',
  description: 'Here you can manage your project.'
}

export default function ProjectPage () {
  return (
    <>
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks" className="flex items-center gap-x-1.5 capitalize">
            <LuBoxes className="w-3.5 h-3.5"/>
            tasks
          </TabsTrigger>
          <TabsTrigger value="people" className="flex items-center gap-x-1.5 capitalize">
            <LuUser className="w-3.5 h-3.5"/>
            people
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-x-1.5 capitalize">
            <LuUsers className="w-3.5 h-3.5"/>
            teams
          </TabsTrigger>
          <TabsTrigger value="milestones" className="flex items-center gap-x-1.5 capitalize">
            <LuCalendar className="w-3.5 h-3.5"/>
            milestones
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-x-1.5 capitalize">
            <LuSettings2 className="w-3.5 h-3.5"/>
            settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tasks">
          <TasksPage/>
        </TabsContent>
        <TabsContent value="people">
          <PeoplePage/>
        </TabsContent>
        <TabsContent value="teams">
          <TeamPage/>
        </TabsContent>
        <TabsContent value="milestones">
          <MilestonesPage/>
        </TabsContent>
        <TabsContent value="settings">
          <SettingsPage/>
        </TabsContent>
      </Tabs>
    </>
  )
}
