'use client'

import { useLang } from '@/context/language-context'

export function Stats () {
  const { dictionary } = useLang()
  const stats = [
    { id: 1, name: dictionary.landing['feat-1'], value: '700+' },
    { id: 2, name: dictionary.landing['feat-2'], value: '+24k' },
    { id: 3, name: dictionary.landing['feat-3'], value: '99.9%' },
    { id: 4, name: dictionary.landing['feat-4'], value: '12k' }
  ]

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 className="text-base font-semibold leading-8 text-indigo-500">{dictionary.landing['stats-pre']}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {dictionary.landing['stats-title']}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-700">
        {dictionary.landing['stats-description']}
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt className="text-sm leading-6">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
        </div>
        ))}
      </dl>
    </div>
  )
}
