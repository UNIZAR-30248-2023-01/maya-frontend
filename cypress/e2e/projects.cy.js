/// <reference types="cypress" />

const project = {
  name: 'New Project',
  description: 'Description of the new project'
}

describe('Project Resource', () => {
  it('Creating a New Project', () => {
    cy.visit('/en/projects')

    cy.wait(3000)
    cy.get('button#new-project').click()

    cy.get('input#name').type(project.name)
    cy.get('textarea#description').type(project.description)
    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-project').type(project.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', project.name)
  })

  after(() => {
    cy.log(`NEXT_PUBLIC_SUPABASE_URL: ${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}`)
    cy.log(`NEXT_PUBLIC_SUPABASE_KEY: ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`)

    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/projects?name=eq.${project.name}`,
      headers: {
        apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
        Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
      }
    })
  })
})
