import {
  LuLayoutGrid,
  LuFileText,
  LuUsers,
  LuUser,
  LuLaptop2,
  LuCalendar,
  LuTicket,
  LuTable2,
  LuArchive,
  LuUnlock,
  LuLock
} from 'react-icons/lu'

export const avatars = [
  ...new Array(50).fill(0).map((_, i) => `/assets/avatars/animals/${i + 1}.webp`),
  ...new Array(24).fill(0).map((_, i) => `/assets/avatars/humans/${i + 1}.webp`),
  ...new Array(28).fill(0).map((_, i) => `/assets/avatars/memojis/${i + 1}.webp`)
]

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
  }
]

export const visibility = [
  {
    value: 'public',
    icon: LuUnlock
  },
  {
    value: 'private',
    icon: LuLock
  }
]

export const projectStatuses = [
  {
    value: 'open',
    icon: LuTable2
  }, {
    value: 'closed',
    icon: LuArchive
  }
]

export const tasksStatuses = [
  {
    value: 'new',
    style: 'border-blue-500 text-blue-500 bg-blue-50',
    icon: <>🆕</>
  }, {
    value: 'block',
    style: 'border-red-500 text-red-500 bg-red-50',
    icon: <>⛔️</>
  }, {
    value: 'in progress',
    style: 'border-yellow-500 text-yellow-500 bg-yellow-50',
    icon: <>🏗</>
  }, {
    value: 'done',
    style: 'border-green-500 text-green-500 bg-green-50',
    icon: <>✅</>
  }
]

export const tasksLabels = [
  {
    value: 'enhancement',
    style: 'dark:border-[#C1B8FF] dark:text-[#C1B8FF] dark:bg-[#7057FF2E] border-[#7057FF] text-[#7057FF]'
  },
  {
    value: 'data model',
    style: 'dark:border-[#E79913] dark:text-[#E79913] dark:bg-[#E99D122E] border-[#E99D12] text-[#E99D12]'
  },
  {
    value: 'documentation',
    style: 'dark:border-[#35ABFF] dark:text-[#35ABFF] dark:bg-[#0075CA2E] border-[#0075CA] text-[#0075CA]'
  },
  {
    value: 'bug',
    style: 'dark:border-[#EB9CA6] dark:text-[#EB9CA6] dark:bg-[#D73A4A2E] border-[#D73A4A] text-[#D73A4A]'
  },
  {
    value: 'testing',
    style: 'dark:border-[#00E6C4] dark:text-[#00E6C4] dark:bg-[#0086722E] border-[#008672] text-[#008672]'
  },
  {
    value: 'ui',
    style: 'dark:border-[#D97EE5] dark:text-[#D97EE5] dark:bg-[#D876E32E] border-[#D876E3] text-[#D876E3]'
  }
]

export const loadingProjects = [
  {
    id: null,
    name: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  },
  {
    id: null,
    name: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  },
  {
    id: null,
    name: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }, {
    id: null,
    name: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }, {
    id: null,
    name: null,
    description: null,
    status: null,
    label: null,
    createdAt: null,
    updatedAt: null
  }
]

export const loadingInAndOuts = [
  {
    id: null,
    username: null,
    in_date: null,
    out_date: null
  },
  {
    id: null,
    username: null,
    in_date: null,
    out_date: null
  },
  {
    id: null,
    username: null,
    in_date: null,
    out_date: null
  }

]

export const loadingPeople = [
  {
    id: null,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  },
  {
    id: null,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  },
  {
    id: null,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }, {
    id: null,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }, {
    id: null,
    avatar: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role: null
  }
]

export const loadingTeam = [
  {
    id: null,
    name: null,
    people: [
      null,
      null,
      null,
      null
    ]
  },
  {
    id: null,
    name: null,
    people: [
      null,
      null
    ]
  },
  {
    id: null,
    name: null,
    people: [
      null,
      null,
      null
    ]
  }, {
    id: null,
    name: null,
    people: [
      null
    ]
  }, {
    id: null,
    name: null,
    people: [
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  }
]

export const loadingTasks = [
  {
    id: null,
    title: null,
    people: [
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }
    ],
    label: null,
    status: null,
    estimated: null,
    end_date: null
  },
  {
    id: null,
    title: null,
    people: [
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      },
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      },
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }
    ],
    label: null,
    status: null,
    estimated: null,
    end_date: null
  },
  {
    id: null,
    title: null,
    people: [
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }, {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }
    ],
    label: null,
    status: null,
    estimated: null,
    end_date: null
  },
  {
    id: null,
    title: null,
    people: [
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }, {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }, {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }
    ],
    label: null,
    status: null,
    estimated: null,
    end_date: null
  },
  {
    id: null,
    title: null,
    people: [
      {
        avatar: null,
        username: null,
        firstname: null,
        lastname: null
      }
    ],
    label: null,
    status: null,
    estimated: null,
    end_date: null
  }
]

export const roles = [
  {
    id: 1,
    value: 'owner'
  }, {
    id: 2,
    value: 'developer'
  }, {
    id: 3,
    value: 'scrum master'
  }, {
    id: 4,
    value: 'tester'
  }, {
    id: 5,
    value: 'designer'
  }, {
    id: 6,
    value: 'member'
  }
]
