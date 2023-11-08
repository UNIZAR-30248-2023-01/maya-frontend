'use client'

import { Number, ComboboxEnum, ComboboxArray, DatePicker, TextArea } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { Label } from '@/components/ui/label'
import { cn, normalize, getForm, supabase } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TeamMember } from '@/components/team-member'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ConfirmationTaskButton } from '@/components/tasks/confirmationButton'
import useSWR from 'swr'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format, parseISO } from 'date-fns'
import { tasksSchema } from '@/lib/schemas'
import { Comment } from '@/components/tasks/comments'

export default async function TaskPage({ params }) {
  const { dictionary } = useLang()
  const [edit, setEdit] = useState(false)

  const [form, setForm] = useState(getForm(tasksSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  // const { projectName, taskId } = params

  const handleCancel = () => {
    setEdit(false)
    // borrar datos de editar???
  }

  // Conexiones con el backend
  const { data: tasks, isLoading: taskLoadig } = useSWR(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?id=eq.${params.taskId}&select=*`
  )
  const { data: people, isLoading: peopleLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-tasks?tasks=eq.${params.taskId}&select=*,people(*)`
  )

  const { data: projectPeople, isLoading: projecteopleLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${params.projectName}&select=*`
  )

  const { data: comments, isLoading: commentsLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/task-comments?task=eq.${params.taskId}&select=*`
  )




  if (!taskLoadig && !peopleLoading && !projecteopleLoading && !commentsLoading) {
    const task = tasks[0]
    const status = tasksStatuses.find(status => status.value === task.status)
    const label = tasksLabels.find(label => label.value === task.label)

    const parsedDate = task.end_date ? parseISO(task.end_date) : ''
    const formattedDate = parsedDate !== '' ? format(parsedDate, 'PPP') : dictionary.tasks['new-task-label-placeholder']

    console.log(comments)

    return (
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <Label className='text-4xl font-semibold text-foreground capitalize'>
                {task.name}
              </Label>
              {edit && (
                <Badge
                  variant='outline'
                  className='max-w-fit h-fit max-h-fit py-1 leading-none border-black'
                >
                  <Label className='text-xs font-semibold'>
                    {task.project}
                  </Label>
                </Badge>
              )}
            </div>

            <div className='flex gap-4'>
              <Button
                variant='outline'
                onClick={() => (edit ? handleCancel() : setEdit(true))}
              >
                {edit ? dictionary.common.cancel : dictionary.common.edit}
              </Button>
              <ConfirmationTaskButton
                className='bg-red-500 hover:bg-red-700'
                isEdit={edit}
                taskId={params.taskId}
                projectName={params.projectName}
                form={form}
                taskPeople={people}
                setEdit={setEdit}
              />
            </div>
          </div>

          {!edit && (
            <div className='flex flex-row gap-2 items-center'>
              <Badge
                variant='outline'
                className='max-w-fit h-fit max-h-fit py-1 leading-none border-black'
              >
                <Label className='text-xs font-semibold'>{task.project}</Label>
              </Badge>
              <Badge
                variant='outline'
                className={cn(
                  'max-w-fit h-fit max-h-fit py-1 leading-none',
                  label.style
                )}
              >
                {
                  <Label className='text-xs font-semibold capitalize'>
                    {dictionary.labels[label.value]}
                  </Label>
                }
              </Badge>
              <Badge
                variant='outline'
                className={cn(
                  'max-w-fit h-fit max-h-fit py-1 leading-none',
                  'flex items-center gap-x-1',
                  status.style
                )}
              >
                {status.icon && <span>{status.icon}</span>}
                <Label className='capitalize text-xs font-semibold'>
                  {dictionary.status[status.value]}
                </Label>
              </Badge>
            </div>
          )}
        </div>

        <div className='flex flex-col w-full gap-1.5'>
          {edit
            ? (
              <TextArea
                id={dictionary.tasks['description-column']}
                label={dictionary.tasks['description-column']}
                placeholder={task.description}
                onChange={(e) => setter({ key: 'description', value: e.target.value })}
              />
            )
            : (
              <>
                <Label
                  htmlFor={params.taskId + '-description'}
                  className='capitalize'
                >
                  {normalize(dictionary.tasks['description-column'])}
                </Label>
                <Card className='min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                  <CardContent className='p-0 first-letter:uppercase'>
                    {task.description}
                  </CardContent>
                </Card>
              </>
            )}
        </div>

        <div className='flex flex-col gap-1.5'>
          {edit
            ? (
              <ComboboxArray
                id='assignees'
                label={dictionary.people['member-column']}
                placeholder={dictionary.people.search}
                list={projectPeople?.map((member) => ({
                  value: member.username,
                  label: member.username
                }))}
                values={
                  form.assignees ||
                  people?.map((member) => (
                    member.username))
                }
                onChange={(e) => {
                  const assignees = form.assignees || people?.map((member) => (
                    member.username))
                  const isSelected = assignees ? assignees.includes(e) : false
                  if (isSelected) {
                    return setter({
                      key: 'assignees',
                      value: assignees?.filter((member) => member !== e)
                    })
                  }
                  setter({ key: 'assignees', value: [...assignees, e] })
                }}
                dictionary={dictionary}
              />
            )
            : (
              <>
                <Label
                  htmlFor={params.taskId + '-description'}
                  className='capitalize'
                >
                  {normalize(dictionary.tasks['assignees-column'])}
                </Label>
                <div className='flex flex-row gap-6 px-3 py-2'>
                  {people.map((user) => (
                    <TeamMember
                      key={user.username}
                      user={{
                        name: user.people.firstname,
                        lastname: user.people.lastname,
                        src: user.people.avatar,
                        username: user.people.username
                      }}
                    />
                  ))}
                </div>
              </>
            )}
        </div>

        <div className='flex justify-between gap-6 pt-4'>
          <div className='flex flex-col gap-1.5 w-full'>
            {edit
              ? (
                <DatePicker
                  id='end-date'
                  label={dictionary.tasks['end-date-column']}
                  placeholder={formattedDate}
                  value={form.end_date}
                  onChange={(e) => setter({ key: 'end_date', value: e || null })}
                />
              )
              : (
                <>
                  <Label
                    htmlFor={params.taskId + '-estimated'}
                    className='capitalize'
                  >
                    {normalize(dictionary.tasks['end-date-column'])}
                  </Label>
                  <Card className='max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                    <CardContent className='p-0 flex flex-row items-center gap-4'>
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {formattedDate}
                    </CardContent>
                  </Card>
                </>
              )}
          </div>

          <div className='flex flex-col w-full gap-1.5'>
            {edit
              ? (
                <Number
                  min={0}
                  id={dictionary.tasks['estimated-column']}
                  label={dictionary.tasks['estimated-column']}
                  placeholder={task.estimated}
                  onChange={(e) => setter({ key: 'estimated', value: e.target.valueAsNumber })}
                />
              )
              : (
                <>
                  <Label
                    htmlFor={params.taskId + '-estimated'}
                    className='capitalize'
                  >
                    {normalize(dictionary.tasks['estimated-column'])}
                  </Label>
                  <Card className='max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                    <CardContent className='p-0'>{task.estimated}</CardContent>
                  </Card>
                </>
              )}
          </div>
        </div>

        {edit && (
          <div className='flex flex-row justify-between gap-6'>
            <ComboboxEnum
              id='status'
              label={dictionary.tasks['status-column']}
              list={tasksStatuses}
              value={form.status || task.status}
              dictionary={dictionary.status}
              searchDictionary={dictionary.search}
              onChange={(e) => {
                const original = Object.keys(dictionary.status).find(
                  (key) => key === e
                )
                setter({
                  key: 'status',
                  value: original === form.status ? null : original
                })
              }}
            />

            <ComboboxEnum
              id='label'
              label={dictionary.tasks['label-column']}
              list={tasksLabels}
              value={form.label || task.label}
              dictionary={dictionary.labels}
              searchDictionary={dictionary.search}
              onChange={(e) => {
                const original = Object.keys(dictionary.labels).find(
                  (key) => key === e
                )
                setter({
                  key: 'label',
                  value: original === form.label ? null : original
                })
              }}
            />
          </div>
        )}

        <div className='flex flex-col gap-1.5'>
          <Label className='capitalize'>
            {dictionary.comments['titulo']}
          </Label>
          <Card>
            <CardContent className='p-8 flex flex-col gap-8'>
              <Comment date={'44'} username={'hec7orci7o'} comment={'hola que hase'}></Comment>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}
