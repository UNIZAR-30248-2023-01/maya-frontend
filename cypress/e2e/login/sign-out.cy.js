/// <reference types="cypress" />

import { defaultUser } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

describe('Sign out tests', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Sign out', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password }).then(() => {
      cy.get('a#home-button')
    })

    cy.wait(3000)

    cy.get('button#sidebar-button').click()

    cy.get('div#team-member').click()
    cy.get('button#sign-out-button').click()

    cy.get('a#start-button-site')
  })
})
