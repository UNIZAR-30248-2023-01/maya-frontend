/// <reference types="cypress" />

import { defaultUser, defaultProject, defaultTask } from './config/models'
import { createUser, deleteUser, createProject, createOrg, addPeople2Project, deleteProject, deleteOrg } from './config/setUp'

describe('Tasks Resource', () => {
  before(() => {
    createUser()
    createOrg()
    createProject()
    addPeople2Project()
  })

  after(() => {
    // deleteTask()
    deleteProject()
    deleteUser()
    deleteOrg()
  })

  it('Creating a New Tasks', () => {
    cy.login({ username: defaultUser.username, passwd: defaultUser.password })
    cy.wait(3000)

    cy.visit(`/en/projects/${defaultProject.name}`)
    cy.wait(3000)

    cy.get('button#new-task').click()

    cy.get('input#name').type(defaultTask.name)
    cy.get('textarea#description').type(defaultTask.description)

    cy.get('button#assignees').click()
    cy.get('div#assignees-menu')
      .contains(defaultTask.assignees[0])
      .click()
    cy.get('button#assignees').click()

    cy.get('input#estimated-time').type(defaultTask.estimated)
    // cy.get('div#label-menu')
    //   .contains(defaultTask.label)
    //   .click()

    cy.get('button#status').click()
    cy.get('div#status-menu')
      .contains(defaultTask.status)
      .click()
    cy.get('button#status').click()

    cy.get('button#end-date').click()
    cy.get('.rdp-button[name="day"]')
      .contains(new RegExp('^' + defaultTask.end_date.getDate().toString() + '$', 'g'))
      .click()

    cy.get('form').submit()
    cy.get('input#filter-tasks').type(defaultTask.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', defaultTask.name)
  })
})
