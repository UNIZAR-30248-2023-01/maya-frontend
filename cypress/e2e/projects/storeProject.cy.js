/// <reference types="cypress" />

import { user, project, createUser, deleteUser, deleteProject, createProject } from '../setUp/setUp'

describe('Store project', async () => {
  before(() => {
    createUser()
    createProject()
  })

  after(() => {
    deleteUser()
    deleteProject()
  })

  it('Archive project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${project.name}`).click()

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

    cy.get('input#filter-project').type(project.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', project.name)
  })

  it('Unarchive project', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${project.name}`).click()

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

    cy.get('input#filter-project').type(project.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', project.name)
  })
})
