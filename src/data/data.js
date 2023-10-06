import { LuArrowUp, LuArrowDown, LuArrowRight, LuCircleDashed, LuCircleSlash, LuCheckCircle2, LuTimer } from 'react-icons/lu'

export const statuses = [
  {
    value: 'Not started',
    label: 'Not started',
    icon: LuCircleDashed
  },
  {
    value: 'In progress',
    label: 'In Progress',
    icon: LuTimer
  },
  {
    value: 'Finished',
    label: 'Finished',
    icon: LuCheckCircle2
  },
  {
    value: 'Bloqued',
    label: 'Bloqued',
    icon: LuCircleSlash
  }
]

export const priorities = [
  {
    label: 'Low',
    value: 'Low',
    icon: LuArrowDown
  },
  {
    label: 'Medium',
    value: 'Medium',
    icon: LuArrowRight
  },
  {
    label: 'High',
    value: 'High',
    icon: LuArrowUp
  }
]
