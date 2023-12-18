/// <reference types="cypress" />

import { user, privateProject, organization } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

describe('View project', async () => {
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

  it('View project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/projects`)

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()
    cy.get('tbody#tasks-table').should('exist')
  })
})
