import { Sonner } from '@/components/Sonner'
import { getDictionary } from '@/lib/dictionaries'

export const metadata = {
  title: 'Next PWA',
  description: 'Next PWA example using next-pwa and app directory'
}

export default async function Page ({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'>
        <Sonner title={dict.sonner.title} description={dict.sonner.description} action={dict.sonner.action} />
      </div>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}
