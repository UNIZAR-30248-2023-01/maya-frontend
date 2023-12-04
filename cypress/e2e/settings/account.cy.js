/// <reference types="cypress" />

import { user, createUser, deleteUser } from '../setUp/setUp'

const exampleUserEdit = {
  firstname: ' firstname change',
  lastname: 'Test lastname change'
}

describe('Setting account tests', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })

  it('Editing name, surname, pasword and profile pic', () => {
    cy.login(user)

    cy.wait(3000)

    cy.visit('/es/settings')
    cy.wait(3000)

    /* cy.get('input#firstname').type(exampleUserEdit.firstname)
    cy.get('input#lastname').clear()
    cy.get('input#lastname').type(exampleUserEdit.lastname) */

    cy.get('input#firstname').clear().type(exampleUserEdit.firstname).then(($input) => {
      const firstNameValue = $input.val()
      cy.log('First Name Value:', firstNameValue)
    })

    cy.get('input#lastname').clear().type(exampleUserEdit.lastname).then(($input) => {
      const lastNameValue = $input.val()
      cy.log('Last Name Value:', lastNameValue)
    })

    cy.wait(1000)

    cy.get('button#buttonUpdate').click()

    cy.wait(1000)

    // Check if the update was successful
    cy.get('input#firstname').invoke('val').then((firstNameValue) => {
      expect(firstNameValue.trim()).to.equal('Test firstname change')
    })
    cy.get('input#lastname').invoke('val').then((firstNameValue) => {
      expect(firstNameValue.trim()).to.equal('Test lastname change')
    })

    cy.get('#popupProfile').click()

    cy.get('img[src="/assets/avatars/memojis/1.webp"]').click()
    cy.get('button#updateProfilePhoto').click()

    /*
    cy.wait(2000)
    cy.get('#icon').click()
    cy.wait(1000)
    cy.get('button#eliminar').click()

    // Comprobar que el checkin ha sido eliminado
    cy.get('tbody').contains('12:12').should('not.exist') */
  })
})
