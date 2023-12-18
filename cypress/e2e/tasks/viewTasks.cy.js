/// <reference types="cypress" />

import { user, privateProject, task, organization } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

describe('View tasks', async () => {
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

  it('View tasks', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/projects`)

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(5000)
    cy.get('input#filter-tasks').type(task.name, { force: true })

    cy.wait(1000)
    cy.get('table tbody tr').should('have.length', 1).click()

    cy.wait(1000)
    cy.get('label#task-name').should('contain.text', task.name)
  })
})
