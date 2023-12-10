'use client'

import { CreateOrg } from '@/components/organizations/create-org'
import { Org } from '@/components/organizations/org'
import { useUser } from '@/context/user-context'
import useSWR from 'swr'

export default function OrganizationsPage () {
  const { user } = useUser()

  const { data: organizations, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?username=eq.${user.username}&select=organization,plan:organization(plan)`)

  if (!isLoading) {
    if (organizations.length === 0) {
      return (
        <div className='flex min-h-screen justify-center items-center'>
          <CreateOrg />
        </div>
      )
    }

    return (
      <div className='flex min-h-screen justify-evenly items-center flex-col p-4'>
        <div className='flex flex-row flex-wrap gap-12 w-[800px] justify-center items-center'>
          {organizations.map(org => (
          <Org key={org.organization} name={org.organization} plan={org.plan.plan} />
          ))}
        </div>

        <CreateOrg separator={true}/>
      </div>
    )
  }
}
