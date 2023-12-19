/// <reference types="cypress" />

import { organization, user, userMember } from '../config/models'
import { createOrg, createUser, deleteOrg, deleteUser } from '../config/setUp'

describe('Edit org people', async () => {
  beforeEach(() => {
    createUser()
    createOrg()
  })

  afterEach(() => {
    deleteUser()
    deleteOrg()
  })

  it('Edit member role', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit(`/en/${organization.name}/staff`)

    cy.wait(1000)
    cy.get(`button#${userMember.username}-edit`).click()

    cy.wait(1000)
    cy.get('button#role-edit').click()

    cy.wait(1000)
    cy.get('div#scrum-master').click()

    cy.wait(1000)
    cy.get('button#confirm-edit').click()

    cy.wait(1000)

    cy.get('input#filter-people').type(userMember.username, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${userMember.username} > :nth-child(2) > div#scrum`)
      .should('exist')
  })
})
