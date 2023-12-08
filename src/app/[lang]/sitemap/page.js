'use client'

import Link from 'next/link'
import { sites } from '@/lib/constants'

export default function Sitemap () {
  const list = sites.map(site => site.url.split('/')[site.url.split('/').length - 1])
  return (
      <div className='max-w-xl mx-auto flex flex-col gap-y-4 py-12 antialiased px-4 sm:px-0'>
        <h1 className='text-2xl font-bold py-4'>MaYA Sitemap</h1>
        <div className='grid grid-cols-4 gap-y-3 gap-x-4'>
          {list.sort().map((site, index) => (
            <Link
              key={index}
              href={'/' + site}
              className={`flex flex-col gap-y-2 text-left w-full tracking-wide text-blue-600 ${['faq'].includes(site) ? 'uppercase' : 'capitalize'}`}
            >
              {site === '' ? 'Home' : site}
            </Link>
          ))}
        </div>
      </div>
  )
}
