'use client'

import { Legal } from '@/components/legal'
import { useLang } from '@/context/language-context'

export default function PrivacyPage () {
  const { dictionary } = useLang()

  return (
    <div className='max-w-xl mx-auto flex flex-col gap-y-4 py-12 antialiased px-4 sm:px-0'>
      <h1 className='text-2xl font-bold text-center py-4'>{dictionary.privacy.title}</h1>
      <p className='text-sm tracking-wide'>
        {dictionary.privacy.introduction}
      </p>
      <div className=''>
        {dictionary.privacy.subsections.map((subsection, index) => (
          <Legal
            key={index}
            title={subsection.title}
            desciption={subsection.description}
            list={subsection.list}
          />
        ))}
      </div>
    </div>
  )
}
