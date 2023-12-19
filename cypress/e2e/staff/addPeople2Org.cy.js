/// <reference types="cypress" />

import { user, organization, userMember } from '../config/models'
import { createUser, deleteUser, deleteProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Add people to an organization', async () => {
  before(() => {
    createUser()
    createOrg(true)
  })

  after(() => {
    deleteUser()
    deleteProjects()
    deleteOrg()
  })

  it('Add people to an organization', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/staff`)

    cy.wait(1000)
    cy.get('button#invite-member-to-org').click()
    cy.wait(1000)

    cy.loginWithNoOrg(userMember)
    cy.wait(1000)

    cy.visit(`/en/organizations/join/${organization.uuid}`)
    cy.wait(3000)

    cy.get('button#join-org').click().should('exist')

    cy.wait(1000)
    cy.get(`a#${organization.name}`).should('exist')
  })
})
