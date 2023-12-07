export const users = [
  {
    username: 'johndoe',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@example.com',
    password: '12345678'
  }
]

export const organizations = [
  {
    name: 'My first organization',
    description: 'This is my first organization'
  }
]

export const projects = [
  {
    name: 'My first project',
    description: 'This is my first project',
    organization: organizations[0].name
  }
]

export const tasks = [
  {
    name: 'My first task',
    description: 'This is my first task',
    assignees: [
      users[0].username
    ],
    label: 'enhancement',
    status: 'new',
    estimated: 3,
    end_date: new Date(),
    project: projects[0].name
  }
]

export const teams = [
  {
    name: 'My first team',
    description: 'This is my first team',
    members: [
      users[0].username
    ]
  }
]

export const defaultUser = users[0]
export const defaultOrganization = organizations[0]
export const defaultProject = projects[0]
export const defaultTask = tasks[0]
export const defaultTeam = teams[0]
