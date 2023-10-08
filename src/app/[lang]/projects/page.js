import { cookies } from 'next/headers'
import { DataTable } from '@/components/ui/table/projects/data-table'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { getDictionary } from '@/lib/dictionaries'

export const metadata = {
  title: 'Projects',
  description: 'Here is a list of your projects'
}

export default async function ProjetsPage ({ params: { lang } }) {
  const supabase = createServerComponentClient({ cookies }, {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY
  })
  const { data: projects } = await supabase.from('projects').select()
  const dict = await getDictionary(lang)

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable data={projects} lang={lang} dict={dict} />
    </div>
  )
}
