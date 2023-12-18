/// <reference types="cypress" />

import { user, team, organization } from '../config/models'
import { createUser, deleteUser, createOrg, createTeam, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createTeam()
  })

  after(() => {
    deleteUser()
    deleteTeam(team.dbname + '-edited')
    deleteOrg()
  })

  it('Edit Team', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit(`/en/${organization.name}/teams`)
    cy.wait(1000)

    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('button')
      .click()
    cy.get('button#edit-team').click()

    cy.get('input#name').type(team.name + ' edited')
    cy.get('textarea#description').type(team.description)

    cy.get('button#visibility').click()
    cy.get('form').submit()

    cy.get('input#filter-teams').type(' edited', { force: true })
  })
})
