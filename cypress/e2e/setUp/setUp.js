import crypto from 'crypto'

export const user =
  {
    username: Cypress.env('TEST_USERNAME'),
    firstname: Cypress.env('TEST_FIRSTNAME'),
    lastname: Cypress.env('TEST_LASTNAME'),
    email: Cypress.env('TEST_EMAIL'),
    password: Cypress.env('TEST_PASSWORD')
  }

export const userMember =
  {
    username: Cypress.env('TEST_USERNAME') + '-member',
    firstname: Cypress.env('TEST_FIRSTNAME'),
    lastname: Cypress.env('TEST_LASTNAME'),
    email: 'member-' + Cypress.env('TEST_EMAIL'),
    password: Cypress.env('TEST_PASSWORD')
  }

const salt = crypto.randomBytes(16).toString('hex')
const hashedPassword = crypto
  .pbkdf2Sync(user.password, salt, 10000, 64, 'sha512')
  .toString('hex')

export const publicProject = {
  name: 'new public project',
  dbname: 'new-public-project',
  description: 'Description of the new project',
  organization: 'reign'
}

export const privateProject = {
  name: 'new private project',
  dbname: 'new-private-project',
  description: 'Description of the new project',
  organization: 'reign'
}

export const task = {
  name: 'Test Task',
  label: 'ui',
  status: 'new',
  estimated: 3,
  project: privateProject.dbname
}

export const createUser = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      email: user.email,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      passwd_hash: hashedPassword,
      salt
    }
  })
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      email: userMember.email,
      username: userMember.username,
      firstname: userMember.firstname,
      lastname: userMember.lastname,
      passwd_hash: hashedPassword,
      salt
    }
  })
}

export const deleteUser = () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people?username=eq.${user.username}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people?username=eq.${userMember.username}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}

export const createPrivateProject = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      name: privateProject.dbname,
      description: privateProject.description,
      organization: privateProject.organization
    }
  })

  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people-project`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      username: user.username,
      project: privateProject.dbname,
      role: 'owner'
    }
  })
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people-project`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      username: userMember.username,
      project: privateProject.dbname,
      role: 'member'
    }
  })
}

export const createPublicProject = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      name: publicProject.dbname,
      description: publicProject.description,
      organization: publicProject.organization,
      visibility: 'public'
    }
  })

  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people-project`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      username: user.username,
      project: publicProject.dbname,
      role: 'owner'
    }
  })
}

export const deletePrivateProject = (name) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?name=eq.${name ?? privateProject.dbname}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}

export const deletePublicProject = (name) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?name=eq.${name ?? publicProject.dbname}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}

export const addTasks = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/tasks`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json'
    },
    body: {
      name: task.name,
      estimated: task.estimated,
      project: task.project,
      label: task.label,
      status: task.status
    }
  })
}
