/// <reference types="cypress" />

import { user, createUser, deleteUser } from '../setUp/setUp'

describe('Sign out tests', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Sign out', () => {
    cy.login(user)

    cy.wait(3000)

    cy.get('button#sidebar-button').click()

    cy.get('div#team-member').click()
    cy.get('button#sign-out-button').click()

    cy.get('a#start-button-site')
  })
})
