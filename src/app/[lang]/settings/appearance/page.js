'use client'

import { Separator } from '@/components/ui/separator'
import { AppearanceForm } from '@/components/settings/appearance-form'
import { useLang } from '@/context/language-context'

export default function SettingsAppearancePage () {
  const { dictionary } = useLang()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{dictionary.settingsAccount['apperance-tab']}</h3>
        <p className="text-sm text-muted-foreground">
          {dictionary.settingsAccount['appearace-headline']}
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
