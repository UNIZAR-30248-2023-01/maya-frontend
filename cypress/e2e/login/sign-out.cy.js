/// <reference types="cypress" />

import { user } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

describe('Sign out tests', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Sign out', () => {
    cy.login(user)
    cy.wait(1000)

    cy.get('a#home-button').should('exist')
    cy.wait(1000)

    cy.get('button#sidebar-button').click()

    cy.get('div#team-member').click()
    cy.get('button#sign-out-button').click()
    cy.wait(1000)

    cy.get('a#start-button-site').should('exist')
  })
})
