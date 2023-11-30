/// <reference types="cypress" />

import { user, task, privateProject, createUser, deleteUser, deletePrivateProject, createPrivateProject } from '../setUp/setUp'

describe('Add task', async () => {
  before(() => {
    createUser()
    createPrivateProject()
  })

  after(() => {
    deleteUser()
    deletePrivateProject()
  })

  it('Creating a new task', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#new-task').click()

    cy.get('input#name').type(task.name)
    cy.get('input#estimated').type(task.estimated)
    cy.get('button#status').click()
    cy.get('div#new').click()
    cy.get('button#label').click()
    cy.get('div#ui').click()

    cy.get('button#create-task').click()
    cy.get('input#filter-tasks').type(task.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', task.name)
  })
})
