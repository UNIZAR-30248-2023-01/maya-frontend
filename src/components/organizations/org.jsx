'use client'

import { Card, CardContent } from '../ui/card'
import { LuBuilding2, LuLandmark, LuStore, LuUser } from 'react-icons/lu'
import { normalize } from '@/lib/utils'
import { useLang } from '@/context/language-context'
import Link from 'next/link'

export function Org ({ name, plan }) {
  const { lang } = useLang()

  const Icon = () => {
    switch (plan) {
      case 'personal':
        return <LuUser className='h-12 w-auto' />
      case 'team':
        return <LuStore className='h-12 w-auto' />
      case 'educational':
        return <LuLandmark className='h-12 w-auto' />
      default:
        return <LuBuilding2 className='h-12 w-auto' />
    }
  }
  return (
    <Link id={name} href={'/' + lang + '/' + name + '/home'}>
      <Card>
        <CardContent className='p-2 flex flex-col justify-center gap-4 items-center w-36 h-36'>
          <Icon />
          <p className='first-letter:uppercase font-semibold text-md text-center'>{normalize(name)}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
