/// <reference types="cypress" />

import { user, privateProject, publicProject, createUser, deleteUser, deletePublicProject, deletePrivateProject, createPrivateProject, createPublicProject } from '../setUp/setUp'

const newProject = {
  name: 'new-name-project',
  description: 'New description'
}

describe('Edit project', async () => {
  let editedName = false

  beforeEach(() => {
    createUser()
    createPrivateProject()
    createPublicProject()
  })

  afterEach(() => {
    deleteUser()
    if (editedName) {
      deletePrivateProject(newProject.name)
      editedName = false
    } else {
      deletePrivateProject()
    }
    deletePublicProject()
  })

  it('Change project`s title', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.name}`).click()

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
    cy.get(`tr#${newProject.name} > :nth-child(1)`)
      .should('contain.text', newProject.name)

    editedName = true
  })

  it('Change project`s description', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.name}`).click()

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
    cy.get(`tr#${privateProject.name} > :nth-child(2)`)
      .should('contain.text', newProject.description)
  })

  it('Change project`s description and name', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.name}`).click()

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
    cy.get(`tr#${newProject.name} > :nth-child(1)`)
      .should('contain.text', newProject.name)
    cy.get(`tr#${newProject.name} > :nth-child(2)`)
      .should('contain.text', newProject.description)

    editedName = true
  })

  it('Change project`s visibility to public', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${privateProject.name}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#visibility-project').click()

    cy.wait(1000)
    cy.get('button#accept-visibility-project').click()

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#visibility-filter').click()
    cy.get('div#public').click()

    cy.get('input#filter-project').type(privateProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${privateProject.name} > :nth-child(1)`)
      .should('contain.text', privateProject.name)
  })

  it('Change project`s visibility to private', () => {
    cy.login(user)

    cy.wait(1000)

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get(`tr#${publicProject.name}`).click()

    cy.wait(1000)
    cy.get('button#project-settings').click()

    cy.wait(1000)
    cy.get('button#visibility-project').click()

    cy.wait(1000)
    cy.get('button#accept-visibility-project').click()

    cy.visit('/en/projects')

    cy.wait(1000)
    cy.get('button#visibility-filter').click()
    cy.get('div#private').click()

    cy.get('input#filter-project').type(publicProject.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get(`tr#${publicProject.name} > :nth-child(1)`)
      .should('contain.text', publicProject.name)
  })
})
