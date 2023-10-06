// import { Sonner } from '@/components/Sonner'
import { getDictionary } from '@/lib/dictionaries'
// import { getServerProjects } from '@/services/projects'
import { cookies } from 'next/headers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getServerProjectById, getServerProjectMembersById } from '@/services/projects'
import { ProjectInfo } from '@/components/project/ProjectInfo'
import { ProjectTasks } from '@/components/project/ProjectTasks'
import { redirect } from 'next/navigation'

// to test http://localhost:3000/es/projects/c47af38c-819e-4d66-aa8e-93919a2077fd

export default async function Page ({ params: { lang, projectId } }) {
  const dict = await getDictionary(lang)
  const project = await getServerProjectById({ cookies, id: projectId })
  const members = await getServerProjectMembersById({ cookies, id: projectId })

  if (project === null) {
    redirect('/' + lang)
  }

  return (
    <>
      {/* Titulo de la pagina */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold leading-none pb-2">
          {project.name}
        </h1>
        <p className="text-sm text-muted-foreground">
          {dict.project.slogan}
        </p>
      </div>
      <Separator className="my-4" />

      <Tabs defaultValue="info">
        <div className="flex justify-between align-center">
          <TabsList>
            <TabsTrigger className="text-xl" value="info">
              {dict.project.info}
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="tasks">
              {dict.project.tasks}
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="members">
              {dict.project.members}
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="calendar">
              {dict.project.calendar}
            </TabsTrigger>
          </TabsList>
          <Button className="text-xl h-auto px-8">{project.archived ? dict.project.unarchive : dict.project.archive}</Button>
        </div>

        <TabsContent value="info">
          <ProjectInfo project={project} dict={dict} />
        </TabsContent>
        <TabsContent value="tasks">
          <ProjectTasks projectId={projectId} dict={dict} />
        </TabsContent>
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <pre>{JSON.stringify(members, null, 2)}</pre>
            </CardHeader>
            <CardContent>
              <p>TABLE</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <Card>
            <CardContent>
              <p>CALENDAR</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
