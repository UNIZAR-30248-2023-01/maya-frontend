/// <reference types="cypress" />

const people = [
  {
    name: 'Hector Toral',
    username: 'hec7orci7o',
    email: 'hec7orci7o@example.com'
  }
]

const team = {
  name: 'New Team',
  description: 'Description of the new team',
  members: [
    people[0].username
  ]
}

describe('Teams Resource', () => {
  it('Creating a New Team', () => {
    cy.visit('/en/teams')

    cy.wait(1000)
    cy.get('button#new-team').click()

    cy.get('input#name').type(team.name)
    cy.get('textarea#description').type(team.description)

    cy.get('button#members').click()
    cy.get('div#members-menu')
      .contains(team.members[0])
      .click()

    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', team.name)
  })

  after(() => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/teams?name=eq.${team.name}`,
      headers: {
        apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
        Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
      }
    })
  })
})
