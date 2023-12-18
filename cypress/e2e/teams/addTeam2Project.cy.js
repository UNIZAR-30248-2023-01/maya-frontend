/// <reference types="cypress" />

import { user, publicProject, organization, team } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, createTeam, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createProjects()
    createTeam()
  })

  after(() => {
    deleteUser()
    deleteTeam()
    deleteProjects()
    deleteOrg()
  })

  it('Add team to project', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit(`/en/${organization.name}/projects/${publicProject.dbname}`)
    cy.wait(1000)

    cy.get('button#project-teams').click()
    cy.get('button#add-team').click()
    cy.get('button#teams').click()
    cy.wait(1000)

    cy.get('div > span')
      .contains(team.name)
      .click()
    cy.get('button#add-team-project').click()
    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child > :nth-child(1)')
      .should('contain.text', team.name)
  })
})
