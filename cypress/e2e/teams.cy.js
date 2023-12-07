/// <reference types="cypress" />

import { defaultUser, defaultTeam } from './config/models'
import { createUser, deleteUser, deleteTeam } from './config/setUp'

describe('Teams Resource', () => {
  before(() => createUser())
  after(() => {
    deleteUser()
    deleteTeam()
  })

  it('Creating a New Team', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit('/en/teams')
    cy.wait(3000)

    cy.get('button#new-team').click()

    cy.get('input#name').type(defaultTeam.name)
    cy.get('textarea#description').type(defaultTeam.description)

    cy.get('button#members').click()
    cy.get('div#members-menu')
      .contains(defaultTeam.members[0])
      .click()
    cy.get('button#members').click()

    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-teams').type(defaultTeam.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', defaultTeam.name)
  })

  it('Add teams to a project', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit(`/en/projects/${defaultTeam.name.replace(/[-_]/gi, ' ').toLowerCase()}`)
    cy.wait(3000)

    cy.get('button')
      .contains('Teams')
      .click()

    cy.get('button#add-team').click()
  })
})
