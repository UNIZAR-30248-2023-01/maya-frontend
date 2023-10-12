/// <reference types="cypress" />
// import { supabase } from '../../src/lib/utils'

const project = {
  title: 'New Project',
  description: 'Description of the new project'
}

describe('Project Resource', () => {
  it('Creating a New Project', () => {
    cy.visit('/en/projects')

    cy.wait(3000)
    cy.get('button#new-project').click()

    cy.get('input#name').type(project.title)
    cy.get('textarea#description').type(project.description)

    cy.get('form').submit()
    cy.wait(3000)

    cy.get('input#filter-project').type('New Project')
    cy.get('table tbody tr').should('have.length', 1)
  })

  after(() => {
    fetch(`${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?title=eq.${project.title}`, {
      method: 'DELETE',
      headers: {
        apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
        Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
      }
    })
  })
})
