'use client'

import { Separator } from '@/components/ui/separator'
import { PasswordForm } from '@/components/settings/password-form'
import { useLang } from '@/context/language-context'

export default function SettingsPaswordPage () {
  const { dictionary } = useLang()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{dictionary.settingsAccount['password-tab']}</h3>
        <p className="text-sm text-muted-foreground">
          {dictionary.settingsAccount['password-headline']}
        </p>
      </div>
      <Separator />
      <PasswordForm />
    </div>
  )
}
