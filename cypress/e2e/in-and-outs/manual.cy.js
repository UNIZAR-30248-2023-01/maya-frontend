/// <reference types="cypress" />

import { user, createUser, deleteUser } from '../setUp/setUp'

const exampleClockin = {
  in_hour: '11:11',
  out_hour: '12:12'
}

describe('In and outs', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Creating, Editing and Deleting a Manual Checkin', () => {
    cy.login(user)

    cy.wait(3000)

    cy.visit('/es/in-and-outs')
    cy.wait(5000)

    cy.get('button#new-manual-date').should('be.visible').click()

    cy.wait(1000)
    // Datepicker
    cy.get('button#in_date').click()
    // Buscar el botón con el atributo name=day y hacer clic en él
    cy.get('button[name=day]').contains('12').click()
    cy.get('h2#necesitoelid').click()
    cy.get('input#in_hour').type(exampleClockin.in_hour)
    cy.get('button#out_date').click()
    cy.get('button[name=day]').contains('12').click()
    cy.get('h2#necesitoelid').click()
    cy.get('input#out_hour').type(exampleClockin.out_hour)

    cy.get('button#fichar').click()

    // Check if the new checkin is in the list
    cy.get('tbody').contains('12:12')
    cy.get('tbody').contains(exampleClockin.in_hour)
    cy.get('tbody').contains(exampleClockin.out_hour)

    // Edit the checkin
    cy.wait(2000)
    cy.get('#icon').click()
    // eliminar texto
    cy.get('input#in_hour').clear()
    cy.get('input#in_hour').type('11:13')
    cy.get('button#fichar').click()
    cy.get('tbody').contains('11:13')

    cy.wait(2000)
    cy.get('#icon').click()
    cy.wait(1000)
    cy.get('button#eliminar').click()

    // Comprobar que el checkin ha sido eliminado
    cy.get('tbody').contains('12:12').should('not.exist')
  })
})
