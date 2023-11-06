'use client'

import useSWR, { mutate } from 'swr'
// import { TabsContent } from '@/components/ui/tabs'

import { ConfirmationVisibilityButton } from '@/components/projects/settings/confirmationVisibilityButton'
import { ConfirmationDeleteButton } from '@/components/projects/settings/confirmationDeleteButton'
import { ConfirmationCloseButton } from '@/components/projects/settings/confirmationCloseButton'
import { toast } from 'sonner'
import { useLang } from '@/context/language-context'
import { getForm, supabase } from '@/lib/utils'
import { useState } from 'react'
import { projectSettingsSchema } from '@/lib/schemas'
import { Text, TextArea } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useRouter, usePathname } from 'next/navigation'

export function ProjectSettings ({ projectName }) {
  const { data: project, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?name=eq.${projectName}&select=*`)
  const { dictionary } = useLang()
  const path = usePathname()
  const router = useRouter()
  console.log(path.split('/').slice(0, 3).join('/'))
  const [form, setForm] = useState(getForm(projectSettingsSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  if (!isLoading) {
    const close = project[0]?.satus === 'closed'
    const publicBool = project[0]?.visibility === 'public'
    const defaultName = project[0]?.name
    const defaultDescription = project[0]?.description

    const handleSubmit = async (e) => {
      e.preventDefault()

      const { name, description } = form

      try {
        if (!name && description !== defaultDescription) {
          const changeProjectSettings = () => {
            return new Promise((resolve, reject) => {
              (async () => {
                await supabase.from('projects').update({ description })
                  .eq('name', projectName)
                  .select()
                  .then(() => {
                    // Actualización de los datos en la interfaz
                    // mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${projectName}&select=*,people(*)`)
                    resolve()
                  }).catch((error) => {
                    console.error(error)
                    reject(error)
                  })
              })()
            })
          }

          toast.promise(changeProjectSettings, {
            loading: dictionary.projectSettings['toast-role-loading'],
            success: () => dictionary.projectSettings['toast-role-success'],
            error: () => dictionary.projectSettings['toast-error']
          })
        }

        if (!description && name !== defaultName) {
          const changeProjectSettings = () => {
            return new Promise((resolve, reject) => {
              (async () => {
                await supabase.from('projects').update({ name })
                  .eq('name', projectName)
                  .select()
                  .then(() => {
                    // Actualización de los datos en la interfaz
                    // mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${projectName}&select=*,people(*)`)
                    resolve()
                  }).catch((error) => {
                    console.error(error)
                    reject(error)
                  })
              })()
            })
          }

          toast.promise(changeProjectSettings, {
            loading: dictionary.projectSettings['toast-role-loading'],
            success: () => dictionary.projectSettings['toast-role-success'],
            error: () => dictionary.projectSettings['toast-error']
          })
        }

        if (name && description && (defaultName !== 'name' || defaultDescription !== 'description')) {
          const changeProjectSettings = () => {
            return new Promise((resolve, reject) => {
              (async () => {
                await supabase.from('projects').update({ name, description })
                  .eq('name', projectName)
                  .select()
                  .then(() => {
                    // Actualización de los datos en la interfaz
                    // mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${projectName}&select=*,people(*)`)
                    resolve()
                  }).catch((error) => {
                    console.error(error)
                    reject(error)
                  })
              })()
            })
          }

          toast.promise(changeProjectSettings, {
            loading: dictionary.projectSettings['toast-role-loading'],
            success: () => dictionary.projectSettings['toast-role-success'],
            error: () => dictionary.projectSettings['toast-error']
          })
        }
      } catch (error) {
        const { path, message } = JSON.parse(error.message)[0]
        toast.error(path[0] + ': ' + message)
      }

      if (form && form.name !== defaultName) {
        router.replace(`${path.split('/').slice(0, 3).join('/')}/${form.name}`)
      }
    }

    return (
      <div className="flex flex-col gap-4 max-w-[800px]">
        {/* <TabsContent value={value} className='space-y-6'> */}

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
          <Text
            id="name"
            label={dictionary.projectSettings.name}
            placeholder={defaultName}
            onChange={(e) => setter({ key: 'name', value: e.target.value })}
          />
          <TextArea
            id="description"
            label={dictionary.projectSettings.description}
            placeholder={
              dictionary.projectSettings['explain-description']
            }
            onChange={(e) => setter({ key: 'description', value: e.target.value })}
          />
          <div className='flex justify-end'>
            <Button type="submit" disabled={!form.name && !form.description}>{dictionary.common.save}</Button>
          </div>
        </form>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">
            {dictionary.projectSettings['danger-zone']}
          </h4>

          <div className="rounded-lg border border-red-600 divide-y divide-red-600">
            <div className="w-full flex flex-row items-center justify-between gap-8 p-4">
              <div className="flex flex-col">
                <Label className="text-base">
                  {dictionary.projectSettings.visibility}
                </Label>
                <Label className="text-muted-foreground text-sm">
                  {dictionary.projectSettings['private-visibility']}
                </Label>
              </div>
              <ConfirmationVisibilityButton
                isPublic={publicBool}
              ></ConfirmationVisibilityButton>
            </div>

            <div className="w-full flex flex-row items-center justify-between gap-8 p-4">
              <div className="flex flex-col">
                <Label className="text-base">{dictionary.projectSettings['close-project']}</Label>
                <Label className="text-muted-foreground text-sm">
                  {dictionary.projectSettings['explain-close-project']}
                </Label>
              </div>
              <ConfirmationCloseButton isClose={close}></ConfirmationCloseButton>
            </div>

            <div className="w-full flex flex-row items-center justify-between gap-8 p-4">
              <div className="flex flex-col">
                <Label className="text-base">{dictionary.projectSettings['delete-project']}</Label>
                <Label className="text-muted-foreground text-sm">
                  {dictionary.projectSettings['explain-delete-project']}
                </Label>
              </div>
              <ConfirmationDeleteButton></ConfirmationDeleteButton>
            </div>
          </div>
        </div>
        {/* </TabsContent> */}
      </div>
    )
  }
}
