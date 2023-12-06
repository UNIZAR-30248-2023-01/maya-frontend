/// <reference types="cypress" />

import { defaultUser, deleteUser } from '../setUp/setUp'

describe('Sign up tests', () => {
  after(() => deleteUser())

  it('Sign up', () => {
    cy.visit('/en/sign-up')

    cy.wait(3000)
    cy.get('input#firstname').type(defaultUser.firstname)
    cy.get('input#lastname').type(defaultUser.lastname)
    cy.get('input#username').type(defaultUser.username)
    cy.get('input#email').type(defaultUser.email)
    cy.get('input#password').type(defaultUser.password)

    cy.get('form').submit()

    cy.wait(3000)

    cy.get('input#username').type(defaultUser.username)
    cy.get('input#password').type(defaultUser.password)

    cy.get('form').submit()

    cy.wait(3000)

    cy.get('a#home-button')
  })
})
