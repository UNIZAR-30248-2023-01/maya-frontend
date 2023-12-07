/// <reference types="cypress" />

import { defaultUser } from '../config/models'
import { deleteUser } from '../config/setUp'

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

    cy.login({ username: defaultUser.username, passwd: defaultUser.password }).then(() => {
      cy.get('a#home-button')
    })
  })
})
