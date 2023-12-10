import { user, userMember, team, privateProject, publicProject, organization, task } from './models'

export const createUser = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('VERCEL_URL')}/api/sign-up`,
    headers: { 'Content-Type': 'application/json' },
    body: user
  })
  cy.request({
    method: 'POST',
    url: `${Cypress.env('VERCEL_URL')}/api/sign-up`,
    headers: { 'Content-Type': 'application/json' },
    body: userMember
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

export const createOrg = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/organization`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json'
    },
    body: organization
  })
}

export const createTeam = () => {
  const { dbname, description } = team
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/teams`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json'
    },
    body: { name: dbname, description, organization: organization.name }
  })
}

export const deleteOrg = () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/organization?name=eq.${organization.name}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}

export const createProjects = () => {
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

export const deleteProjects = (name) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?name=eq.${name ?? privateProject.dbname}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?name=eq.${publicProject.dbname}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}

export const deleteTeam = (name) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/teams?name=eq.${name ?? team.dbname}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}
