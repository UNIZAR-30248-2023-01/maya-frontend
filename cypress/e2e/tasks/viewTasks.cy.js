/// <reference types="cypress" />

import { user, privateProject, task, createUser, deleteUser, createPrivateProject, deletePrivateProject, addTasks } from '../setUp/setUp'

describe('View project', async () => {
  before(() => {
    createUser()
    createPrivateProject()
    addTasks()
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

    cy.wait(1000)
    cy.get('input#filter-tasks').type(task.name, { force: true })

    cy.wait(1000)
    cy.get('table tbody tr').should('have.length', 1).click()

    cy.wait(1000)
    cy.get('label#task-name').should('contain.text', task.name)
  })
})
