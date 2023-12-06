/// <reference types="cypress" />

import { defaultUser, createUser, deleteUser } from '../setUp/setUp'

describe('Login tests', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Sign in', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password }).then(() => {
      cy.get('a#home-button')
    })
  })
})
