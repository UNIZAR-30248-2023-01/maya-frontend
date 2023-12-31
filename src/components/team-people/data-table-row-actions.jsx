'use client'

import { RoleChange } from './role-change'
import { useLang } from '@/context/language-context'

export function DataTableRowActions ({ row }) {
  const { dictionary } = useLang()

  console.log(row.original)

  return (
    <RoleChange
      title={row.original?.people?.firstname + ' ' + row.original?.people?.lastname}
      description={dictionary.people['manage-member-description-team']}
      actionBtn={dictionary.people['manage-member-submit']}
      deleteTitle={dictionary.people['manage-member-delete-title-team']}
      deleteDescription={dictionary.people['manage-member-delete-description-team']}
      teamName={row.original.team}
      username={row.original.username}
      defaultRole={row.original.role}
    />
  )
}
