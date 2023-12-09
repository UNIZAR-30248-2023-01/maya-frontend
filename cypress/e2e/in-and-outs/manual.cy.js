/// <reference types="cypress" />

import { user } from '../config/models'
import { createUser, deleteUser } from '../config/setUp'

const exampleClockin = {
  in_hour: '11:11',
  out_hour: '12:12'
}

const editedClockin = {
  in_hour: '12:12',
  out_hour: '13:13'
}

describe('In and outs', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Creating Manual Checkin', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/es/in-and-outs')
    cy.wait(1000)

    cy.get('button#new-manual-date').should('be.visible').click()

    cy.wait(1000)
    // Datepicker
    cy.get('button#in_date').click()
    cy.get(':nth-child(1) > :nth-child(1) > .rdp-button_reset').click()
    cy.get('h2#add-checkin-title').click()
    cy.get('input#in_hour').type(exampleClockin.in_hour)
    cy.get('button#out_date').click()
    cy.get(':nth-child(1) > :nth-child(1) > .rdp-button_reset').click()
    cy.get('h2#add-checkin-title').click()
    cy.get('input#out_hour').type(exampleClockin.out_hour)

    cy.get('button#fichar').click()

    cy.wait(1000)
    // Check if the new checkin is in the list
    cy.get('table tbody tr:first-child').contains(exampleClockin.in_hour)
    cy.get('table tbody tr:first-child').contains(exampleClockin.out_hour)
  })

  it('Editing Checkin', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/es/in-and-outs')
    cy.wait(1000)

    // Edit the checkin
    cy.get('button#edit-checkin').click()
    // eliminar texto
    cy.get('input#in_hour').clear()
    cy.get('input#in_hour').type(editedClockin.in_hour)
    cy.get('input#out_hour').clear()
    cy.get('input#out_hour').type(editedClockin.out_hour)
    cy.get('button#fichar').click()

    cy.wait(2000)
    // Check if the new checkin is in the list
    cy.get('table tbody tr:first-child').contains(editedClockin.in_hour)
    cy.get('table tbody tr:first-child').contains(editedClockin.out_hour)
  })

  it('Deleting Checkin', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/es/in-and-outs')
    cy.wait(1000)

    // Edit the checkin
    cy.get('button#edit-checkin').click()
    cy.get('button#eliminar').click()

    cy.wait(1000)
    // Check if checkin is not in the list
    cy.get('table tbody tr:first-child').contains(editedClockin.in_hour).should('not.exist')
  })
})
