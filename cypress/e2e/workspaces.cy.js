import { user, createUser, deleteUser } from './config/setUp'

describe('WorkSpaces', () => {
  before(() => {
    createUser()
  })

  after(() => {
    deleteUser()
  })
  it('Selecting a Workspace', () => {
    cy.login(user)
    cy.wait(3000)

    cy.visit('/es/workspaces')
    cy.wait(3000)

    cy.get('#filter-workspaces').type('Ebro')

    // Haz clic en el segundo elemento /es/workspaces
    cy.get('#row-1').click()
    cy.wait(3000)

    cy.get('#filter-workspaces').type('Sala')
    // Haz clic en el segundo elemento /es/workspaces/$primerElemento
    cy.get('#row-1').click()
    cy.wait(3000)
  })
})
