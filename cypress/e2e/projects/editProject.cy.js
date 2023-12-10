/// <reference types="cypress" />

import { user, privateProject, publicProject } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, deleteOrg } from '../config/setUp'

const newProject = {
  name: 'new name project',
  dbname: 'new-name-project',
  description: 'New description'
}

describe('Edit project', async () => {
  let editedName = false

  beforeEach(() => {
    createUser()
    createOrg()
    createProjects()
  })

  afterEach(() => {
    deleteUser()
    if (editedName) {
      deleteProjects(newProject.dbname)
      editedName = false
    } else {
      deleteProjects()
    }
    deleteOrg()
  })

  it('Change project`s title', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('input#name').type(newProject.name)

    cy.get('form').submit()

    cy.wait(1000)
    cy.visit('/en/projects')

    cy.wait(1000)

    cy.get('input#filter-project').type(newProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${newProject.dbname} > :nth-child(1)`)
      .should('contain.text', newProject.name)

    editedName = true
  })

  it('Change project`s description', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('textarea#description').type(newProject.description)

    cy.get('form').submit()

    cy.wait(1000)
    cy.visit('/en/projects')

    cy.wait(1000)

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${privateProject.dbname} > :nth-child(2)`)
      .should('contain.text', newProject.description)
  })

  it('Change project`s description and name', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('input#name').type(newProject.name)
    cy.get('textarea#description').type(newProject.description)

    cy.get('form').submit()

    cy.wait(1000)
    cy.visit('/en/projects')

    cy.wait(1000)

    cy.get('input#filter-project').type(newProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${newProject.dbname} > :nth-child(1)`)
      .should('contain.text', newProject.name)
    cy.get(`tr#${newProject.dbname} > :nth-child(2)`)
      .should('contain.text', newProject.description)

    editedName = true
  })

  it('Change project`s visibility to public', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#visibility-project').click()

    cy.wait(1000)
    cy.get('button#accept-visibility-project').click()
    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#visibility-filter').click()
    cy.get('div#public').click()
    cy.wait(1000)

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${privateProject.dbname} > :nth-child(1)`)
      .should('contain.text', privateProject.name)
  })

  it('Change project`s visibility to private', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${publicProject.dbname}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#visibility-project').click()

    cy.wait(1000)
    cy.get('button#accept-visibility-project').click()
    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#visibility-filter').click()
    cy.get('div#private').click()

    cy.wait(1000)
    cy.get('input#filter-project').type(publicProject.name, { force: true })
    cy.get('table tbody tr > :nth-child(1)').should('contain.text', publicProject.name)
  })
})
