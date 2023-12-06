/// <reference types="cypress" />

import { defaultUser, createUser, deleteUser } from './setUp/setUp'

const team = {
  name: 'New Team',
  description: 'Description of the new team',
  members: [
    defaultUser.username
  ]
}

describe('Teams Resource', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Creating a New Team', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit('/en/teams')
    cy.wait(3000)

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
})
