/// <reference types="cypress" />

import { user, organization, userMember } from '../config/models'
import { createUser, deleteUser, deleteProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Remove people from an organization', async () => {
  before(() => {
    createUser()
    createOrg()
  })

  after(() => {
    deleteUser()
    deleteProjects()
    deleteOrg()
  })

  it('Remove people from an organization', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/staff`)

    cy.wait(1000)
    cy.get(`button#${userMember.username}-edit`).click()
    cy.wait(1000)

    cy.get('button#delete-member').click()

    cy.wait(1000)
    cy.get('button#confirmation-delete').click()

    cy.get('input#filter-people').type(userMember.username, { force: true })
    cy.get('tr#not-found').should('exist')
  })
})
