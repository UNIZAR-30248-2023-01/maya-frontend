// import { Sonner } from '@/components/Sonner'
// import { getDictionary } from '@/lib/dictionaries'
// import { getServerProjects } from '@/services/projects'
// import { cookies } from 'next/headers'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function Page ({ params: { lang, projectId } }) {
  // const dict = await getDictionary(lang)
  // const projects = await getServerProjects(cookies)

  return (
    <>
      {/* Titulo de la pagina */}

      <Tabs defaultValue="info">
        <div className="flex justify-between align-center">
          <TabsList>
            <TabsTrigger className="text-xl" value="info">
              INFO
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="task">
              TASK
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="team">
              TEAM
            </TabsTrigger>
            <TabsTrigger className="text-xl" value="plan">
              PLAN
            </TabsTrigger>
          </TabsList>
          <Button className="text-xl h-auto px-8">ARCHIVAR</Button>
        </div>

        <TabsContent value="info">INFO</TabsContent>
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
