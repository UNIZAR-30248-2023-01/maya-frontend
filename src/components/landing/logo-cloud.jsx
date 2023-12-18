'use client'

import { useLang } from '@/context/language-context'
import { TransistorLogo, ReformLogo, TupleLogo, SavvyCalLogo, StatamicLogo } from '@/components/logos'

export function LogoCloud () {
  const { dictionary } = useLang()
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8">
        {dictionary.landing['logo-cloud-title']}
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <TransistorLogo className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-custom-mustard text-custom-mustard"/>
        <ReformLogo className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-custom-mustard text-custom-mustard"/>
        <TupleLogo className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-custom-mustard text-custom-mustard"/>
        <SavvyCalLogo className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-custom-mustard text-custom-mustard"/>
        <StatamicLogo className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-custom-mustard text-custom-mustard"/>
      </div>
    </div>
  )
}
