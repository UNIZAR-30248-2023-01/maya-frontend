// import { Sonner } from '@/components/Sonner'
// import { getDictionary } from '@/lib/dictionaries'
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
import { getServerProjectById } from '@/services/projects'
import { ProjectInfo } from '@/components/project/ProjectInfo'

// to test http://localhost:3000/es/projects/c47af38c-819e-4d66-aa8e-93919a2077fd

export default async function Page ({ params: { lang, projectId } }) {
  // const dict = await getDictionary(lang)
  // const projects = await getServerProjects(cookies)
  const project = await getServerProjectById({ cookies, id: projectId })
  console.log(project)

  return (
    <>
      {/* Titulo de la pagina */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold leading-none pb-2">
          {project.name}
        </h1>
        <p className="text-sm text-muted-foreground">
          All your info in one place.
        </p>
      </div>
      <Separator className="my-4" />

      <Tabs defaultValue="info">
        <div className="flex justify-between align-center">
          <TabsList>
            <TabsTrigger className="text-xl" value="info">
              Info
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="task">
              Task
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="team">
              Team
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="plan">
              Plan
            </TabsTrigger>
          </TabsList>
          <Button className="text-xl h-auto px-8">Archive</Button>
        </div>

        <TabsContent value="info">
          <ProjectInfo project={project} />
        </TabsContent>
        <TabsContent value="task">
          <Card>
            <CardHeader>
              <p>SEARCH</p>
            </CardHeader>
            <CardContent>
              <p>TABLE</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <p>SEARCH</p>
            </CardHeader>
            <CardContent>
              <p>TABLE</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="plan">
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
