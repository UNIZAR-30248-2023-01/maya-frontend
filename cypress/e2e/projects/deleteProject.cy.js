/// <reference types="cypress" />

import { user, privateProject, createUser, deleteUser, createPrivateProject } from '../setUp/setUp'

describe('Delete project', async () => {
  before(() => {
    createUser()
    createPrivateProject()
  })

  after(() => {
    deleteUser()
  })

  it('Deleting an existing project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#delete-project').click()

    cy.wait(1000)
    cy.get('button#accept-delete-project').click()

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get(`tr#${privateProject.name}`).should('not.exist')
    cy.get('tr#no-results').should('exist')
  })
})
