import { Sonner } from '@/components/sonner'
import { getDictionary } from '@/lib/dictionaries'

export const metadata = {
  title: 'Next PWA',
  description: 'Next PWA example using next-pwa and app directory'
}

export default async function Page ({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <div className='border-2 border-dashed min-h-full flex flex-col items-start justify-start gap-8 h-fit w-full p-4'>
      <Sonner title={dict.sonner.title} description={dict.sonner.description} action={dict.sonner.action} />
    </div>
  )
}
