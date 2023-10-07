import { LuArrowUp, LuArrowDown, LuArrowRight, LuCircleDashed, LuCircleSlash, LuCheckCircle2, LuTimer } from 'react-icons/lu'

export const spanishStatuses = [
  {
    value: 'Not started',
    label: 'Sin comenzar',
    icon: LuCircleDashed
  },
  {
    value: 'In progress',
    label: 'En proceso',
    icon: LuTimer
  },
  {
    value: 'Finished',
    label: 'Terminado',
    icon: LuCheckCircle2
  },
  {
    value: 'Bloqued',
    label: 'Bloqueado',
    icon: LuCircleSlash
  }
]

export const englishStatuses = [
  {
    value: 'Not started',
    label: 'Not started',
    icon: LuCircleDashed
  },
  {
    value: 'In progress',
    label: 'In progress',
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

export const spanishPriorities = [
  {
    label: 'Baja',
    value: 'Low',
    icon: LuArrowDown
  },
  {
    label: 'Media',
    value: 'Medium',
    icon: LuArrowRight
  },
  {
    label: 'Alta',
    value: 'High',
    icon: LuArrowUp
  }
]

export const englishPriorities = [
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
