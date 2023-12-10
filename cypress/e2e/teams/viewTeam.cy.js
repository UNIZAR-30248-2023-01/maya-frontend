/// <reference types="cypress" />

import { user, team } from '../config/models'
import { createUser, deleteUser, createOrg, createTeam, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createTeam()
  })

  after(() => {
    deleteUser()
    deleteTeam()
    deleteOrg()
  })

  it('View Team', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/en/teams')
    cy.wait(1000)

    cy.get('input#filter-teams').type(team.name)
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('button')
      .click()

    cy.get('a#view-team').click()
    cy.wait(1000)

    cy.get('input#filter-people').type(user.username)
    cy.get('table tbody tr').should('have.length', 1)
  })
})
