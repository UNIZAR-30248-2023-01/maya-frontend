/// <reference types="cypress" />

import { defaultUser } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

describe('Login tests', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Sign in', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password }).then(() => {
      cy.get('a#home-button')
    })
  })
})
