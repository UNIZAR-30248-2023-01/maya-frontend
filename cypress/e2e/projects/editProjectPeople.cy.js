/// <reference types="cypress" />

import { user, userMember, privateProject, publicProject } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

describe('Edit project people', async () => {
  beforeEach(() => {
    createUser()
    createOrg()
    createProjects()
  })

  afterEach(() => {
    deleteUser()
    deleteProjects()
    deleteOrg()
  })

  it('Add a member', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${publicProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-members').click()

    cy.wait(1000)
    cy.get('button#invite-button').click()

    cy.get('button#members').click()

    cy.get(`div#${userMember.username}`).click()

    cy.get('form').submit()

    cy.wait(1000)

    cy.get('input#filter-people').type(userMember.username, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${userMember.username} > :nth-child(1)`)
      .should('contain.text', userMember.firstname + ' ' + userMember.lastname + userMember.username)
  })

  it('Edit member role', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-members').click()

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
    cy.get(`tr#${userMember.username} > :nth-child(2) > div#scrum-master`)
      .should('exist')
  })

  it('Delete member', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-members').click()

    cy.wait(1000)
    cy.get(`button#${userMember.username}-edit`).click()

    cy.get('button#delete-member').click()

    cy.get('button#confirmation-delete').click()

    cy.get('input#filter-people').type(userMember.username, { force: true })
    cy.get('tr#not-found').should('exist')
  })
})
