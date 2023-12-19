require('crypto')

export const users = [
  {
    username: 'test',
    firstname: 'Test',
    lastname: 'Test',
    email: 'test@maya',
    password: 'password'
  },
  {
    username: 'test-member',
    firstname: 'Test',
    lastname: 'Test',
    email: 'member-test@maya.com',
    password: 'password'
  }
]

const uuid = crypto.randomUUID()

export const organizations = [
  {
    name: 'test-organization',
    description: 'This is my first organization',
    uuid
  }
]

export const projects = [
  {
    name: 'new public project',
    dbname: 'new-public-project',
    description: 'Description of the new project',
    organization: organizations[0].name,
    visibility: 'public'
  },
  {
    name: 'new private project',
    dbname: 'new-private-project',
    description: 'Description of the new project',
    organization: organizations[0].name,
    visibility: 'private'
  }
]

export const tasks = [
  {
    name: 'test task',
    label: 'ui',
    status: 'new',
    estimated: 3,
    project: projects[1].dbname
  }
]

export const teams = [
  {
    name: 'test team',
    dbname: 'test-team',
    description: 'This is my first team',
    members: [
      users[0].username
    ]
  }
]

export const user = users[0]
export const userMember = users[1]

export const publicProject = projects[0]
export const privateProject = projects[1]

export const task = tasks[0]

export const organization = organizations[0]

export const team = teams[0]
