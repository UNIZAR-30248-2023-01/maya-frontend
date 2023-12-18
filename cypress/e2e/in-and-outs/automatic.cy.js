/// <reference types="cypress" />

import { user, organization } from '../config/models'
import { createOrg, createUser, deleteOrg, deleteUser } from '../config/setUp'

describe('In and outs', () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteOrg()
  })

  it('Creating Automatic Checkin', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit(`/es/${organization.name}/in-and-outs`)
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
