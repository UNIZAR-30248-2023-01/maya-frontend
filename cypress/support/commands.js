// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { organization } from '../e2e/config/models'

Cypress.Commands.add('login', (user) => {
  cy.visit('/en/sign-in')

  cy.wait(1000)
  cy.get('input#username').type(user.username)
  cy.get('input#password').type(user.password)

  cy.get('form').submit()

  cy.get(`a#${organization.name}`).click()
  cy.wait(1000)
})

Cypress.Commands.add('loginWithNoOrg', (user) => {
  cy.visit('/en/sign-in')

  cy.wait(1000)
  cy.get('input#username').type(user.username)
  cy.get('input#password').type(user.password)

  cy.get('form').submit()
})
