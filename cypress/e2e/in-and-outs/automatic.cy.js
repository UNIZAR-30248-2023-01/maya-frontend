/// <reference types="cypress" />

import { defaultUser, createUser, deleteUser } from '../setUp/setUp'

describe('In and outs', () => {
  before(() => createUser())
  after(() => deleteUser())

  it('Creating and Deleting a Automatic Checkin', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit('/es/in-and-outs')
    cy.wait(3000)

    // Guardamos el número de filas de la tabla al inicio
    cy.get('table').find('tbody tr').its('length').as('numeroInicialDeFilas').then(numeroInicial => {
      if (cy.get('table').find('tbody tr').contains('No results.')) {
        numeroInicial = 0
      }

      // Hacemos clic en el botón que agrega una nueva fila
      cy.get('button#new-date').should('be.visible').click()

      // Esperamos antes de obtener el número actualizado de filas
      cy.wait(2000)

      // Obtener el número inicial de filas guardado
      cy.get('table').find('tbody tr').its('length').as('numeroFinal').then(numeroFinal => {
        expect(numeroInicial).to.equal(numeroFinal - 1)
      })

      cy.get('button#new-date-out').should('be.visible').click()
      // Comprobar que no se añade otra fila
      cy.get('table').find('tbody tr').its('length').as('numeroFinal').then(numeroFinal => {
        expect(numeroInicial).to.equal(numeroFinal - 1)
      })

      cy.get(':nth-child(1) > .py-3').click()
      cy.wait(1000)
      cy.get('button#eliminar').click()
      // Compribar que se ha eliminado la fila
      cy.get('table').find('tbody tr').its('length').as('numeroFinal').then(numeroFinal => {
        if (cy.get('table').find('tbody tr').contains('No results.')) {
          numeroFinal = 0
        }
        expect(numeroInicial).to.equal(numeroFinal)
      })
    })
  })
})
