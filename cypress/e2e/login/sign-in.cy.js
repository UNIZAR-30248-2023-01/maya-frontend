/// <reference types="cypress" />

import { user } from '../config/models'
import { createOrg, createUser, deleteOrg, deleteUser } from '../config/setUp'

describe('Login tests', () => {
  before(() => {
    createUser()
    createOrg()
  })
  after(() => {
    deleteUser()
    deleteOrg()
  })

  it('Sign in', () => {
    cy.login(user)
    cy.wait(1000)

    cy.get('a#home-button').should('exist')
  })
})
