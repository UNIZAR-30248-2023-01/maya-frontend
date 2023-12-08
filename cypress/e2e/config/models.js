import crypto from 'crypto'

const salt = crypto.randomBytes(16).toString('hex')
const hashedPassword = crypto
  .pbkdf2Sync(Cypress.env('TEST_PASSWORD'), salt, 10000, 64, 'sha512')
  .toString('hex')

export const users = [
  {
    username: Cypress.env('TEST_USERNAME'),
    firstname: Cypress.env('TEST_FIRSTNAME'),
    lastname: Cypress.env('TEST_LASTNAME'),
    email: Cypress.env('TEST_EMAIL'),
    password: Cypress.env('TEST_PASSWORD'),
    passwd_hash: hashedPassword,
    salt
  },
  {
    username: Cypress.env('TEST_USERNAME') + '-member',
    firstname: Cypress.env('TEST_FIRSTNAME'),
    lastname: Cypress.env('TEST_LASTNAME'),
    email: 'member-' + Cypress.env('TEST_EMAIL'),
    passwd_hash: hashedPassword,
    salt
  }
]

export const organizations = [
  {
    name: 'test-organization',
    description: 'This is my first organization'
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
