/// <reference types="cypress" />

import { user, privateProject, task } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Delete tasks', async () => {
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

  it('Deleting a new task', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()
    cy.wait(1000)

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.get('input#filter-tasks').type(task.name, { force: true })
    cy.get('tr#no-results').should('exist')
  })
})
