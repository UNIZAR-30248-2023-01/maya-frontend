/// <reference types="cypress" />

import { user, createUser, deleteUser } from '../setUp/setUp'

describe('Setting appearance tests', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Editing name, surname, pasword and profile pic', () => {
    cy.login(user)

    cy.wait(3000)

    cy.visit('/es/settings/appearance')
    cy.wait(1000)

    cy.get('#darkTheme').click()
    cy.get('body').should('have.css', 'background-color').and('not.equal', 'rgb(255, 255, 255)')

    cy.wait(2000)

    cy.get('#lightTheme').click()
    cy.get('body').should('have.css', 'background-color').and('equal', 'rgb(255, 255, 255)')
  })
})
