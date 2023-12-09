/// <reference types="cypress" />

import { user } from '../config/models'
import { createUser, deleteUser, deleteProjects, createProjects, createOrg, createTeam, deleteOrg, deleteTeam } from '../config/setUp'

describe('Team tests', async () => {
  before(() => {
    createUser()
    createOrg()
    createProjects()
    createTeam()
  })

  after(() => {
    deleteUser()
    deleteTeam()
    deleteProjects()
    deleteOrg()
  })

  it('Add team to project', () => {
    cy.login(user)
    cy.wait(1000)

    cy.visit('/en/projects')
  })
})
