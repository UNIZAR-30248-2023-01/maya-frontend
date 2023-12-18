/// <reference types="cypress" />

import { user, team, organization } from '../config/models'
import { createUser, deleteUser, createOrg, createTeam, deleteOrg } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createTeam()
  })

  after(() => {
    deleteUser()
    deleteOrg()
  })

  it('Delete Team', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit(`/en/${organization.name}/teams`)
    cy.wait(1000)

    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)

    cy.get('table tbody tr:first-child')
      .find('button')
      .click()
    cy.get('div#delete-team').click()

    cy.get('table tbody tr:first-child')
      .contains('results')
  })
})
