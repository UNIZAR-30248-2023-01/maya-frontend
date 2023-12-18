/// <reference types="cypress" />
import { user, organization } from '../config/models'
import { createUser, deleteUser, createOrg, deleteOrg } from '../config/setUp'

const exampleUserEdit = {
  firstname: ' firstname change',
  lastname: 'Test lastname change'
}

describe('Setting account tests', () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteOrg()
  })

  it('Editing name, surname, pasword and profile pic', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/settings`)
    cy.wait(1000)

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

    cy.wait(2000)

    cy.get('#popupProfile').click()

    cy.get('img[src="/assets/avatars/memojis/1.webp"]').click()
    cy.get('button#updateProfilePhoto').click()

    // comprobar que se ha cambiado la foto de perfil
    cy.get('#popupProfile').find('img[src="/assets/avatars/memojis/1.webp"]').should('exist')
  })
})
