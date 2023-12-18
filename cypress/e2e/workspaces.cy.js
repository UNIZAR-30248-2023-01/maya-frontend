/// <reference types="cypress" />

import { createUser, deleteUser, createOrg, deleteOrg } from './config/setUp'
import { user, organization } from './config/models'

describe.skip('WorkSpaces', () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteOrg()
  })
  it('Selecting a Workspace', () => {
    cy.login(user)
    cy.wait(3000)

    cy.visit(`/es/${organization.name}/workspaces`)
    cy.wait(3000)

    cy.get('#filter-workspaces').type('Ebro')

    // Haz clic en el segundo elemento /es/workspaces
    cy.get('#row-1').click()
    cy.wait(3000)

    cy.get('#filter-workspaces').type('Sala')
    // Haz clic en el segundo elemento /es/workspaces/$primerElemento
    cy.get('#row-1').click()
    cy.wait(3000)
  })
})
