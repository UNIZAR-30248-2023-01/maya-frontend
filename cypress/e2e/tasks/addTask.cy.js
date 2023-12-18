/// <reference types="cypress" />

import { user, publicProject, task, organization } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Add task', async () => {
  before(() => {
    createUser()
    createOrg()
    createProjects()
  })

  after(() => {
    deleteUser()
    deleteProjects()
    deleteOrg()
  })

  it('Creating a new task', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/projects`)

    cy.wait(1000)
    cy.get(`tr#${publicProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#new-task').click()

    cy.get('input#name').type(task.name)
    cy.get('input#estimated').type(task.estimated)
    cy.get('button#status').click()
    cy.get('div#new').click()
    cy.get('button#label').click()
    cy.get('div#ui').click()

    cy.get('form').submit()
    cy.wait(1000)
    cy.get('input#filter-tasks').type(task.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child > :nth-child(1)')
      .should('contain.text', task.name)
  })
})
