'use client'

import { Separator } from '@/components/ui/separator'
import { AccountForm } from '@/components/settings/account-form'
import { useLang } from '@/context/language-context'
import { useUser } from '@/context/user-context'

export default function SettingsAccountPage () {
  const { dictionary } = useLang()
  const { user } = useUser()

  console.log(user)
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{dictionary.settingsAccount['account-headline']}</h3>
        <p className="text-sm text-muted-foreground">
          {dictionary.settingsAccount['account-under-headline']}
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
