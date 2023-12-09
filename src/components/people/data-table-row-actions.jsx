'use client'

import { RoleChange } from './role-change'
import { useLang } from '@/context/language-context'

export function DataTableRowActions ({ row }) {
  const { dictionary } = useLang()
  console.log(dictionary.staff)

  return (
    <RoleChange
      title={row.original?.firstname + ' ' + row.original?.lastname}
      description={dictionary.staff['manage-member-description']}
      actionBtn={dictionary.staff['manage-member-submit']}
      deleteTitle={dictionary.staff['manage-member-delete-title']}
      deleteDescription={dictionary.staff['manage-member-delete-description']}
      username={row.original.username}
      defaultRole={row.original.role}
      id={row.original.username + '-edit'}
    />
  )
}
