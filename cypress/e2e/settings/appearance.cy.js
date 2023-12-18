/// <reference types="cypress" />

import { user, organization } from '../config/models'
import { createUser, deleteUser, createOrg, deleteOrg } from '../config/setUp'

describe('Setting appearance tests', () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteOrg()
  })

  it('Change theme', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/settings/appearance`)
    cy.wait(1000)

    cy.get('#darkTheme').click()
    cy.get('body').should('have.css', 'background-color').and('not.equal', 'rgb(255, 255, 255)')

    cy.wait(2000)

    cy.get('#lightTheme').click()
    cy.get('body').should('have.css', 'background-color').and('equal', 'rgb(255, 255, 255)')
  })
})
