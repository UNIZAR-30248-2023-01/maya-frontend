/// <reference types="cypress" />

import { user, publicProject, organization } from '../config/models'
import { createUser, deleteUser, deleteProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Add project', async () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteProjects()
    deleteOrg()
  })

  it('Creating a New Project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/projects`)

    cy.wait(1000)
    cy.get('button#new-project').click()

    cy.get('input#name').type(publicProject.name)
    cy.get('textarea#description').type(publicProject.description)
    cy.get('button#visibility').click()

    cy.get('form').submit()
    cy.wait(1000)

    cy.get('input#filter-project').type(publicProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', publicProject.name)
  })
})
