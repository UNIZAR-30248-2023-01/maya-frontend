'use client'
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

export function ProjectSettings ({ project, organization }) {
  const { dictionary } = useLang()
  const path = usePathname()
  const router = useRouter()
  const [form, setForm] = useState(getForm(projectSettingsSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const isClosed = project?.status === 'closed'
  const isPublic = project?.visibility === 'public'
  const defaultName = project?.name
  const defaultDescription = project?.description

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, description } = form

    try {
      if (!name && description !== defaultDescription) {
        const changeProjectSettings = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('projects').update({ description })
                .eq('name', project.name)
                .select()
                .then(() => {
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(changeProjectSettings, {
          loading: dictionary.projectSettings['toast-data-loading'],
          success: () => dictionary.projectSettings['toast-data-success'],
          error: () => dictionary.projectSettings['toast-error']
        })
      }

      if (!description && name !== defaultName) {
        const changeProjectSettings = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('projects').update({ name: name.split(' ').join('-') })
                .eq('name', project.name)
                .select()
                .then(() => {
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(changeProjectSettings, {
          loading: dictionary.projectSettings['toast-data-loading'],
          success: () => dictionary.projectSettings['toast-data-success'],
          error: () => dictionary.projectSettings['toast-error']
        })
      }

      if (name && description && (defaultName !== 'name' || defaultDescription !== 'description')) {
        const changeProjectSettings = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('projects').update({ name: name.split(' ').join('-'), description })
                .eq('name', project.name)
                .select()
                .then(() => {
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(changeProjectSettings, {
          loading: dictionary.projectSettings['toast-data-loading'],
          success: () => dictionary.projectSettings['toast-data-success'],
          error: () => dictionary.projectSettings['toast-error']
        })
      }
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }

    if (form.name && form.name !== project.name) {
      router.replace(`${path.split('/').slice(0, 4).join('/')}/${form.name.split(' ').join('-')}`)
    } else {
      e.target.reset()
    }
  }

  return (
      <div className="flex flex-col gap-4 max-w-[800px]">
        {/* <TabsContent value={value} className='space-y-6'> */}

        <form id='form-project-settings' onSubmit={(e) => handleSubmit(e)} className="space-y-8 mt-4">
          <Text
            id="name"
            label={dictionary.projectSettings.name}
            placeholder={defaultName}
            className='normal-case first-letter:uppercase'
            onChange={(e) => setter({ key: 'name', value: e.target.value })}
          />
          <TextArea
            id="description"
            label={dictionary.projectSettings.description}
            placeholder={
              dictionary.projectSettings['explain-description']
            }
            className='normal-case first-letter:uppercase'
            onChange={(e) => setter({ key: 'description', value: e.target.value })}
          />
          <div className='flex justify-end'>
            <Button type="submit" className='capitalize h-8 hover:bg-custom-lighterYellow text-black bg-custom-mustard' disabled={!form.name && !form.description}>{dictionary.common.save}</Button>
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
                  {isPublic ? dictionary.projectSettings['public-visibility'] : dictionary.projectSettings['private-visibility']}
                </Label>
              </div>
              <ConfirmationVisibilityButton isPublic={isPublic} projectName={project.name} organization={organization} />
            </div>

            <div className="w-full flex flex-row items-center justify-between gap-8 p-4">
              <div className="flex flex-col">
                <Label className="text-base">{isClosed ? dictionary.projectSettings['open-project'] : dictionary.projectSettings['close-project']}</Label>
                <Label className="text-muted-foreground text-sm">
                  {isClosed ? dictionary.projectSettings['explain-open-project'] : dictionary.projectSettings['explain-close-project']}
                </Label>
              </div>
              <ConfirmationCloseButton isClose={isClosed} projectName={project.name} organization={organization} />
            </div>

            <div className="w-full flex flex-row items-center justify-between gap-8 p-4">
              <div className="flex flex-col">
                <Label className="text-base">{dictionary.projectSettings['delete-project']}</Label>
                <Label className="text-muted-foreground text-sm">
                  {dictionary.projectSettings['explain-delete-project']}
                </Label>
              </div>
              <ConfirmationDeleteButton projectName={project.name} organization={organization} />
            </div>
          </div>
        </div>
        {/* </TabsContent> */}
      </div>
  )
}
