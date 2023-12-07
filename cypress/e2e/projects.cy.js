/// <reference types="cypress" />

import { defaultUser, defaultProject } from './config/models'
import { createUser, deleteUser, deleteProject } from './config/setUp'

describe('Project Resource', async () => {
  before(() => createUser())

  after(() => {
    deleteProject()
    deleteUser()
  })

  it('Creating a New Project', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit('/en/projects')
    cy.wait(3000)

    cy.get('button#new-project').click()

    cy.get('input#name').type(defaultProject.name)
    cy.get('textarea#description').type(defaultProject.description)
    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-project').type(defaultProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', defaultProject.name)
  })
})
