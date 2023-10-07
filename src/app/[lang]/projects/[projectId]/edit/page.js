import { cookies } from 'next/headers'
import { getServerProjectById } from '@/services/projects'
import { redirect } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { getServerUserById } from '@/services/users'
import { EditProject } from '@/components/project/EditProject'

export default async function Page ({ params: { lang, projectId } }) {
  const project = await getServerProjectById({ cookies, id: projectId })
  const user = await getServerUserById({ cookies, id: project.owner })
  const dict = await getDictionary(lang)

  if (project === null) {
    redirect('/' + lang)
  }

  return (
    <EditProject project={project} dict={dict} user={user} />
  )
}
