/// <reference types="cypress" />

import { user, privateProject, createUser, deleteUser, deletePrivateProject } from '../setUp/setUp'

describe('Add project', async () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
    deletePrivateProject()
  })

  it('Creating a New Project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#new-project').click()

    cy.get('input#name').type(privateProject.name)
    cy.get('textarea#description').type(privateProject.description)
    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', privateProject.name)
  })
})
