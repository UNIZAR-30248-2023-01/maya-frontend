import {
  LuLayoutGrid,
  LuFileText,
  LuUsers,
  LuUser,
  LuLaptop2,
  LuCalendar,
  LuTicket
} from 'react-icons/lu'

export const supportedLanguages = [
  'es',
  'en'
]

export const navigation = [
  { name: 'overview', href: '/', icon: LuLayoutGrid, current: true },
  { name: 'projects', href: '/projects', icon: LuFileText, current: false },
  { name: 'teams', href: '/teams', icon: LuUsers, current: false },
  { name: 'staff', href: '/staff', icon: LuUser, current: false },
  { name: 'workSpaces', href: '/workspaces', icon: LuLaptop2, current: false },
  { name: 'in-and-outs', href: '/in-and-outs', icon: LuCalendar, current: false },
  { name: 'tickets', href: '/tickets', icon: LuTicket, current: false }
]

export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]

export const mockProjectData = [
  {
    id: 'm5gr84i9',
    description: 316,
    status: 'success',
    name: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    description: 242,
    status: 'success',
    name: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    description: 837,
    status: 'processing',
    name: 'Monserrat44@gmail.com'
  },
  {
    id: '5kma53ae',
    description: 874,
    status: 'success',
    name: 'Silas22@gmail.com'
  },
  {
    id: 'bhqecj4p',
    description: 721,
    status: 'failed',
    name: 'carmella@hotmail.com'
  }
]
