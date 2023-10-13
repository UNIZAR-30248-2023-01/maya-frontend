import {
  LuLayoutGrid,
  LuFileText,
  LuUsers,
  LuUser,
  LuLaptop2,
  LuCalendar,
  LuTicket,
  LuTable2,
  LuArchive
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

export const profileNavItems = [
  {
    title: 'profile',
    href: '/settings'
  },
  {
    title: 'account',
    href: '/settings/account'
  },
  {
    title: 'appearance',
    href: '/settings/appearance'
  },
  {
    title: 'notifications',
    href: '/settings/notifications'
  },
  {
    title: 'display',
    href: '/settings/display'
  }
]

export const labels = [
  {
    value: 'public',
    label: 'Public'
  },
  {
    value: 'private',
    label: 'Private'
  }
]

export const statuses = [
  {
    value: 'open',
    label: 'Open',
    icon: LuTable2
  }, {
    value: 'closed',
    label: 'Closed',
    icon: LuArchive
  }
]

export const loadingProjects = [
  {
    id: 0,
    title: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  },
  {
    id: 1,
    title: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  },
  {
    id: 2,
    title: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }, {
    id: 3,
    title: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }, {
    id: 4,
    title: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }
]

export const loadingPeople = [
  {
    id: 0,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  },
  {
    id: 1,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  },
  {
    id: 2,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }, {
    id: 3,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }, {
    id: 4,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }
]

export const mockData = [
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
    description: '',
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

export const mockProjectData = [
  {
    id: 'm5gr84i9',
    label: 'public',
    title: 'reign chess',
    description: 'A chess game made with react for the web',
    status: 'open'
  },
  {
    id: '3u1reuv4',
    label: 'public',
    title: 'hot asm',
    description: 'A website to code in assembly',
    status: 'open'
  },
  {
    id: 'derv1ws0',
    label: 'private',
    title: 'vercel v0',
    description: 'Customize your vercel project with this tool',
    status: 'closed'
  },
  {
    id: '5kma53ae',
    label: 'private',
    title: 'react v17',
    description: 'Library to create react apps',
    status: 'closed'
  },
  {
    id: 'bhqecj4p',
    label: 'private',
    title: 'shopify v2',
    description: 'An ecommerce website made with shopify',
    status: 'closed'
  }
]
