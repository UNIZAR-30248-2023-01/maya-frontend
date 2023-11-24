/// <reference types="cypress" />

import { user, project, createUser, deleteUser, deleteProject } from '../setUp/setUp'

describe('Add project', async () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
    deleteProject()
  })

  it('Creating a New Project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#new-project').click()

    cy.get('input#name').type(project.name)
    cy.get('textarea#description').type(project.description)
    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-project').type(project.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', project.name)
  })
})
