/// <reference types="cypress" />

import { user } from '../config/models'
import { deleteUser } from '../config/setUp'

describe('Sign up tests', () => {
  after(() => deleteUser())

  it('Sign up', () => {
    cy.visit('/en/sign-up')

    cy.wait(1000)
    cy.get('input#firstname').type(user.firstname)
    cy.get('input#lastname').type(user.lastname)
    cy.get('input#username').type(user.username)
    cy.get('input#email').type(user.email)
    cy.get('input#password').type(user.password)

    cy.get('form').submit()

    cy.wait(1000)

    cy.login(user)

    cy.wait(1000)

    cy.get('a#home-button').should('exist')
  })
})
