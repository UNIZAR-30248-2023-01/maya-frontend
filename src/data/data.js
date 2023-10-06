import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CircleBackslashIcon,
  StopwatchIcon
} from '@radix-ui/react-icons'

export const statuses = [
  {
    value: 'Not started',
    label: 'Not started',
    icon: CircleIcon
  },
  {
    value: 'In progress',
    label: 'In Progress',
    icon: StopwatchIcon
  },
  {
    value: 'Finished',
    label: 'Finished',
    icon: CheckCircledIcon
  },
  {
    value: 'Bloqued',
    label: 'Bloqued',
    icon: CircleBackslashIcon
  }
]

export const priorities = [
  {
    label: 'Low',
    value: 'Low',
    icon: ArrowDownIcon
  },
  {
    label: 'Medium',
    value: 'Medium',
    icon: ArrowRightIcon
  },
  {
    label: 'High',
    value: 'High',
    icon: ArrowUpIcon
  }
]
