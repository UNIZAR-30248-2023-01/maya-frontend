'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
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
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

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

export function ProjectSettings ({ value }) {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange'
  })

  function onSubmit (data) {
    toast.message('You submitted the following values:', { description: JSON.stringify(data, null, 2) })
  }

  return (
    <div className='flex flex-col gap-4 max-w-[800px]'>
    { /* <TabsContent value={value} className="space-y-6"> */ }
      <div>
        <h3 className="text-lg font-medium">
          Project settings
        </h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="project-name"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Project name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project-description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your project."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Explain your user&apos;s what your project is about.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='space-y-4'>
            <h4 className="text-lg font-medium">
              Danger zone
            </h4>
            <div className="rounded-lg border border-red-600 divide-y divide-red-600">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Visibility
                      </FormLabel>
                      <FormDescription>
                        This project is currently private.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Close project
                      </FormLabel>
                      <FormDescription>
                        Closing a project will disable its workflows & remove it from the list of open projects.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Button variant="secondary" className="text-red-600 font-medium w-fit whitespace-nowrap">
                        Close this project
                      </Button>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Delete project
                      </FormLabel>
                      <FormDescription>
                        Once you delete a project, there is no going back. Please be certain.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Button variant="secondary" className="text-red-600 font-medium w-fit whitespace-nowrap">
                        Delete this project
                      </Button>
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
