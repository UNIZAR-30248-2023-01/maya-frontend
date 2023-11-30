/// <reference types="cypress" />

import { user, privateProject, createUser, deleteUser, createPrivateProject, deletePrivateProject } from '../setUp/setUp'

describe('View project', async () => {
  before(() => {
    createUser()
    createPrivateProject()
  })

  after(() => {
    deleteUser()
    deletePrivateProject()
  })

  it('View project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()
    cy.get('tr#no-results').should('exist')
  })
})
