/// <reference types="cypress" />

import { organization, user } from '../config/models'
import { createUser, deleteOrg, deleteUser } from '../config/setUp'

describe('Create organization', async () => {
  beforeEach(() => {
    createUser()
  })

  afterEach(() => {
    deleteUser()
    deleteOrg()
  })

  it('Create organization', () => {
    cy.loginWithNoOrg(user)

    cy.wait(1000)

    cy.wait(1000)
    cy.get('button#create-org').click()

    cy.wait(1000)
    cy.get('input#name').type(organization.name)
    cy.get('textarea#description').type(organization.description)

    cy.get('form').submit()

    cy.wait(1000)
    cy.get(`a#${organization.name}`).should('exist')
  })
})
