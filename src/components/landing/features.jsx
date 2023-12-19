'use client'

import {
  HiOutlineFingerPrint,
  HiOutlineCalendarDays,
  HiOutlineUsers
} from 'react-icons/hi2'
import { useLang } from '@/context/language-context'

export function Feature1 () {
  const { dictionary } = useLang()

  const primaryFeatures = [
    {
      name: dictionary.landing['feat-1-title'],
      description: dictionary.landing['feat-1-description'],
      icon: HiOutlineFingerPrint
    },
    {
      name: dictionary.landing['feat-2-title'],
      description: dictionary.landing['feat-2-description'],
      icon: HiOutlineUsers
    },
    {
      name: dictionary.landing['feat-3-title'],
      description: dictionary.landing['feat-3-description'],
      icon: HiOutlineCalendarDays
    }
  ]

  return (
    <section id="features" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-custom-mustard">{dictionary.landing['features-pre-1']}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {dictionary.landing['features-title-1']}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-700">
        {dictionary.landing['features-description-1']}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {primaryFeatures.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-mustard">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Feature2 () {
  const { dictionary } = useLang()
  return (
    <section id="news" className="mt-32 sm:mt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-custom-mustard">{dictionary.landing['features-pre-2']}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.landing['features-title-2']}</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
          {dictionary.landing['features-description-2']}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/assets/projects.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
