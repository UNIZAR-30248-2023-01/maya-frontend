/// <reference types="cypress" />

import { user, project, createUser, deleteUser, deleteProject, createProject } from '../setUp/setUp'

describe('View project', async () => {
  before(() => {
    createUser()
    createProject()
  })

  after(() => {
    deleteUser()
    deleteProject()
  })

  it('View project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${project.name}`).click()
    cy.get('tr#no-results').should('exist')
  })
})
