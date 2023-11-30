/// <reference types="cypress" />

import { user, createUser, deleteUser, privateProject, createPrivateProject, deletePrivateProject } from '../setUp/setUp'

describe('Store project', async () => {
  before(() => {
    createUser()
    createPrivateProject()
  })

  after(() => {
    deleteUser()
    deletePrivateProject()
  })

  it('Archive project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#close-project').click()

    cy.wait(1000)
    cy.get('button#accept-close-project').click()

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#close-filter').click()
    cy.get('div#closed').click()

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', privateProject.name)
  })

  it('Unarchive project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#close-project').click()

    cy.wait(1000)
    cy.get('button#accept-close-project').click()

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#close-filter').click()
    cy.get('div#open').click()

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', privateProject.name)
  })
})
