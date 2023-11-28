const exampleUser = {
  name: 'jaimee.mt',
  password: '1234567890'
}

describe('WorkSpaces', () => {
  it('Selecting a Workspace', () => {
    cy.visit('/es/sign-in')

    cy.wait(3000)
    cy.get('input#username').type(exampleUser.name)
    cy.get('input#password').type(exampleUser.password)

    cy.get('form').submit()
    cy.wait(5000)

    cy.visit('/es/workspaces')
    cy.wait(3000)

    // Haz clic en el segundo elemento /es/workspaces
    cy.get('#row-1').click()
    cy.wait(3000)

    // Haz clic en el segundo elemento /es/workspaces/$primerElemento
    cy.get('#row-1').click()
    cy.wait(3000)
  })
})
