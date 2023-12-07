/// <reference types="cypress" />

import { user, createUser, deleteUser, deletePrivateProject, createPrivateProject, addTasks, privateProject } from '../setUp/setUp'

const newTask = {
  description: 'New description',
  estimated: '10',
  date: 'November 26th, 2023'
}

describe('Edit tasks', async () => {
  before(() => {
    createUser()
    createPrivateProject()
    addTasks()
  })

  after(() => {
    deleteUser()
    deletePrivateProject()
  })

  it('Edit task description', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('textarea#description').type(newTask.description)

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get('div#description').should('contain.text', newTask.description)
  })

  it('Edit task asignees', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('button#assignees').click()

    cy.get(`div#${user.username}`).click()

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get(`div#${user.username}`).should('exist')

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('button#assignees').click()

    cy.get(`div#${user.username}`).click()

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get(`div#${user.username}`).should('not.exist')
  })

  it('Edit task end date', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('button#end-date').click()

    cy.get(':nth-child(1) > :nth-child(1) > .rdp-button_reset').click()

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get('div#end-date').should('contain.text', newTask.date)
  })

  it('Edit task estimated', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('input#estimated').type(newTask.estimated)

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get('div#estimated').should('contain.text', newTask.estimated)
  })

  it('Edit task status', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('button#status').click()
    cy.get('div#done').click()

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get('div#task-status label#done').should('exist')
  })

  it('Edit task label', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('table tbody tr:first-child').click()

    cy.wait(1000)
    cy.get('#edit-task').click()

    cy.wait(1000)
    cy.get('button#label').click()
    cy.get('div#testing').click()

    cy.get('button#confirmation-button').click()
    cy.get('button#confirmation').click()

    cy.wait(1000)

    cy.get('div#task-label label#testing').should('exist')
  })
})
