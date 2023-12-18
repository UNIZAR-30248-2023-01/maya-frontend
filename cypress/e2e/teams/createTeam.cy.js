/// <reference types="cypress" />

import { user, team, organization } from '../config/models'
import { createUser, deleteUser, createOrg, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteTeam()
    deleteOrg()
  })

  it('Creating a new team', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit(`/en/${organization.name}/teams`)
    cy.wait(1000)

    cy.get('button#new-team').click()
    cy.wait(1000)

    cy.get('input#name').type(team.name)
    cy.get('textarea#description').type(team.description)

    cy.get('button#members').click()

    cy.get('[data-testid=add-team-member]').type(user.username)
    cy.get(`div#${user.username}`).click()
    cy.get('button#members').click()
    cy.wait(1000)
    cy.get('button#visibility').click()
    cy.get('button#create-team-button').click()

    cy.wait(1000)

    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child > :nth-child(1)')
      .should('contain.text', team.name)
  })
})
