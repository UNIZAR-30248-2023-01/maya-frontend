/// <reference types="cypress" />

import { user, createUser, deleteUser } from '../setUp/setUp'

describe('Login tests', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Sign in', () => {
    cy.login(user)
    cy.wait(3000)

    cy.get('a#home-button')
  })
})
