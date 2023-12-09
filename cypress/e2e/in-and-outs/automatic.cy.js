/// <reference types="cypress" />

import { user } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

describe('In and outs', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Creating Automatic Checkin', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/es/in-and-outs')
    cy.wait(1000)

    cy.get('button#new-automatic-in-date').should('be.visible').click()
    cy.wait(1000)
    // Datepicker
    cy.get('button#new-automatic-out-date').should('be.visible').click()

    cy.wait(1000)

    cy.get('table tbody tr:first-child > :nth-child(1)').should('contain.text', new Date().getDate())
    cy.get('table tbody tr:first-child > :nth-child(1)').should('contain.text', new Date().getFullYear())

    cy.get('table tbody tr:first-child > :nth-child(2)').should('contain.text', new Date().getDate())
    cy.get('table tbody tr:first-child > :nth-child(2)').should('contain.text', new Date().getFullYear())
  })
})
