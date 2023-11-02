'use client'

import { Number, ComboboxEnum, DatePicker, TextArea } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { Label } from '@/components/ui/label'
import { cn, normalize } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TeamMember } from '@/components/team-member'

export default function TaskPage ({ params }) {
  const { dictionary } = useLang()
  const edit = false
  const assignees = [
    { email: 'ja1me@maya.com', src: '/assets/avatars/memojis/1.webp', name: 'Jaime', lastname: 'Martín' },
    { email: 'marinika@maya.com', src: '/assets/avatars/memojis/4.webp', name: 'Marina', lastname: 'Lamiel' }]

  const status = tasksStatuses[0]
  const label = tasksLabels[0]
  return (

    <div className='flex flex-col gap-6'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-2 items-center'>
          <Label className='text-4xl font-semibold text-foreground'>Titulo</Label>
          <Badge variant="outline" className='max-w-fit h-fit max-h-fit py-1 leading-none'>
            <Label className='text-xs font-semibold'>{params.projectName}</Label>
          </Badge>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Badge variant="outline" className={cn('max-w-fit h-fit max-h-fit py-1 leading-none', label.style)} >{<Label className='text-xs font-semibold capitalize'>{dictionary.tasks[label.value]}</Label>}</Badge>
          <Badge variant="outline" className={cn('max-w-fit h-fit max-h-fit py-1 leading-none', 'flex items-center gap-x-1', status.style)} >
            {status.icon && <span>{status.icon}</span>}
            <Label className='capitalize text-xs font-semibold'>{dictionary.tasks[status.value]}</Label>
          </Badge>
        </div>
      </div>

      <div className="flex flex-col w-full gap-1.5">
        <Label htmlFor={params.taskId + '-description'} className="capitalize">{normalize(dictionary.tasks['description-column'])}</Label>
        {edit
          ? (
            <TextArea
              id={dictionary.tasks['description-column']}
              label={dictionary.tasks['description-column']}
              placeholder={dictionary.tasks['new-task-description-placeholder']}
              onChange={''}
            />
            )
          : (
            <Card className='min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
              <CardContent className='p-0'>
                Descripcion
              </CardContent>
            </Card>
            )}
      </div>

      <div className='flex flex-col gap-1.5'>
        <Label htmlFor={params.taskId + '-description'} className="capitalize">{normalize(dictionary.tasks['assignees-column'])}</Label>
        {edit
          ? (
          <p>Hola</p>
            )
          : (
            <div className='flex flex-row gap-6 px-3 py-2'>
              {assignees.map((user) => (
                <TeamMember key={user.username} user={user}/>
              ))}
          </div>

            )}
      </div>

      <div className='flex justify-between gap-4 pt-4'>
        <div className='flex flex-col gap-1.5 w-full'>
              <Label className='capitalize'>{normalize(dictionary.tasks['end-date-column'])}</Label>
              <DatePicker />
        </div>

        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor={params.taskId + '-estimated'} className="capitalize">{normalize(dictionary.tasks['estimated-column'])}</Label>
          {edit
            ? (
              <Number
                id={dictionary.tasks['estimated-column']}
                label={dictionary.tasks['estimated-column']}
                placeholder={dictionary.tasks['new-task-estimated-placeholder']}
                onChange={''}
              />
              )
            : (
              <Card className='max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm'>
                <CardContent className='p-0'>
                  Estimacion
                </CardContent>
              </Card>
              )}
        </div>
      </div>

      {edit &&
        <div className='flex justify-between gap-4'>
          <div className='flex flex-col gap-1.5 w-full'>
            <Label className='capitalize'>{normalize(dictionary.tasks['status-column'])}</Label>

            <ComboboxEnum
              id={dictionary.tasks['status-column']}
              label={dictionary.tasks['new-task-status-placeholder']}
              list={
                tasksStatuses.map((el) => {
                  return {
                    label:
                      (<div className='flex gap-2'>
                        {el.icon && <span>{el.icon}</span>}
                        <span className='capitalize'>{dictionary.tasks[el.value]}</span>
                      </div>),
                    value: el.value
                  }
                })}
            />
          </div>

          <div className='flex flex-col gap-1.5 w-full'>
            <Label className='capitalize'>{normalize(dictionary.tasks['label-column'])}</Label>

            <ComboboxEnum
              id={dictionary.tasks['label-column']}
              label={dictionary.tasks['new-task-label-placeholder']}
              list={
                tasksLabels.map((el) => {
                  return {
                    label: dictionary.tasks[el.value],
                    value: el.value
                  }
                })}
            />
          </div>
        </div>
      }
    </div>
  )
}
