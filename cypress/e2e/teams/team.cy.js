/// <reference types="cypress" />

import { user, userMember, privateProject, team } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createProjects()
  })

  after(() => {
    deleteUser()
    deleteTeam()
    deleteProjects()
    deleteOrg()
  })

  it('Creating a new team', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/teams')

    cy.wait(1000)
    cy.get('button#new-team').click()

    cy.get('input#name').type(team.name)
    cy.get('textarea#description').type(team.description)

    cy.get('button#members').click()

    cy.get('[data-testid=add-team-member]').type(userMember.username)
    cy.get(`div#${userMember.username}`).click()
    cy.get('button#members').click()
    cy.get('button#visibility').click()
    cy.get('form').submit()

    cy.wait(1000)
    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child > :nth-child(1)')
      .should('contain.text', team.name)
  })

  it('Add team to a project', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/en/projects')
    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.get('button#project-teams').click()

    cy.wait(1000)

    cy.get('button#add-team').click()
    cy.get('button#teams').click()
    cy.get('[data-testid=add-team-project-input]').type(team.name)
    cy.get(`div#${team.dbname}`).click()
    cy.get('button#teams').click()
    cy.get('form').submit()

    cy.wait(1000)
    cy.get('input#filter-teams').type(team.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child > :nth-child(1)')
      .should('contain.text', team.name)
  })
})
