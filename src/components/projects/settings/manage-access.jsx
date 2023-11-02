'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { TabsContent } from '@/components/ui/tabs'

import {
  LuBuilding2,
  LuLock
} from 'react-icons/lu'

import {
  Form
  // FormControl,
  // FormDescription,
  // FormField,
  // FormItem,
  // FormLabel,
  // FormMessage
} from '@/components/ui/form'

import { toast } from 'sonner'
import { MyCard } from '@/components/projects/settings/card'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.'
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' })
      })
    )
    .optional()
})

// This can come from your database or API.
const defaultValues = {
  bio: 'I own a computer.',
  urls: [
    { value: 'https://shadcn.com' },
    { value: 'http://twitter.com/shadcn' }
  ]
}

export function ManageAccess ({ value }) {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange'
  })

  function onSubmit (data) {
    toast.message('You submitted the following values:', { description: JSON.stringify(data, null, 2) })
  }

  return (
    <TabsContent value={value} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          Who has access
        </h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className='flex items-start gap-x-4'>
            <MyCard
              title='Private project'
              description='Only those with access to this project can view it.'
              icon={<LuLock className='w-4 h-4'/>}
              button
            />
            <MyCard
              title='Base role'
              description='Only those with direct access and ownerscan see this project. Owners are also admins of this project.'
              icon={<LuBuilding2 className='w-4 h-4'/>}
            />
          </div>
        </form>
      </Form>
    </TabsContent>
  )
}
