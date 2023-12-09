/// <reference types="cypress" />

import { user } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

describe('Login tests', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Sign in', () => {
    cy.login(user)
    cy.wait(1000)

    cy.get('a#home-button').should('exist')
  })
})
