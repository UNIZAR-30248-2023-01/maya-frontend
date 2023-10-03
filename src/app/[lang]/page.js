import { Sonner } from '@/components/Sonner'
import { getDictionary } from '@/lib/dictionaries'
import { getServerProjects } from '@/services/projects'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Next PWA',
  description: 'Next PWA example using next-pwa and app directory'
}

export default async function Page ({ params: { lang } }) {
  const dict = await getDictionary(lang)
  const projects = await getServerProjects(cookies)

  return (
    <>
      <div className='border-2 border-dashed min-h-full flex flex-col items-start justify-start gap-8 h-fit w-full p-4'>
        <Sonner title={dict.sonner.title} description={dict.sonner.description} action={dict.sonner.action} />
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </div>
    </>
  )
}
