'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import useSWR from 'swr'
// import { TabsContent } from '@/components/ui/tabs'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ConfirmationVisibilityButton } from '@/components/projects/settings/confirmationVisibilityButton'
import { ConfirmationDeleteButton } from '@/components/projects/settings/confirmationDeleteButton'
import { ConfirmationCloseButton } from '@/components/projects/settings/confirmationCloseButton'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'

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

export function ProjectSettings({ projectName }) {
  const { data: project } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?name=eq.${projectName}&select=*`)
  console.log(project)
  const close = project.satus === 'closed'
  const publicBool = project.visibility === 'public'

  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange'
  })

  function onSubmit(data) {
    toast.message('You submitted the following values:', { description: JSON.stringify(data, null, 2) })
  }

  const { dictionary } = useLang()

  return (
    <div className='flex flex-col gap-4 max-w-[800px]'>
      {/* <TabsContent value={value} className='space-y-6'> */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='project-name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.projectSettings.name}</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='project-description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.projectSettings.description}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      dictionary.projectSettings['example-description']
                    }
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {dictionary.projectSettings['explain-description']}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='space-y-4'>
            <h4 className='text-lg font-medium'>
              {dictionary.projectSettings['danger-zone']}
            </h4>
            <div className='rounded-lg border border-red-600 divide-y divide-red-600'>
              <FormField
                control={form.control}
                name='marketing_emails'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between p-4 gap-8'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base'>
                        {dictionary.projectSettings.visibility}
                      </FormLabel>
                      <FormDescription>
                        {dictionary.projectSettings['private-visibility']}
                      </FormDescription>
                    </div>
                    <FormControl>
                      <ConfirmationVisibilityButton isPublic={publicBool}></ConfirmationVisibilityButton>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='marketing_emails'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between p-4 gap-8'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base'>
                        {/*close
                          ? dictionary.projectSettings['open-project']
                          : */dictionary.projectSettings['close-project']}
                      </FormLabel>
                      <FormDescription>
                        {/*close
                          ? dictionary.projectSettings['explain-open-project']
                          : */dictionary.projectSettings['explain-close-project']}
                      </FormDescription>
                    </div>
                    <FormControl>
                      <ConfirmationCloseButton isClose={close}></ConfirmationCloseButton>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='marketing_emails'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between p-4 gap-8'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base'>
                        {dictionary.projectSettings['delete-project']}
                      </FormLabel>
                      <FormDescription>
                        {dictionary.projectSettings['explain-delete-project']}
                      </FormDescription>
                    </div>
                    <FormControl>
                      <ConfirmationDeleteButton></ConfirmationDeleteButton>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      {/* </TabsContent> */}
    </div>
  )
}
