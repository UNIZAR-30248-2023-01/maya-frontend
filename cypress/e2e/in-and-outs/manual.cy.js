/// <reference types="cypress" />

const exampleClockin = {
  in_hour: '11:11',
  out_hour: '12:12'
}

const exampleUser = {
  name: 'jaimee.mt',
  password: '1234567890'
}

describe('In and outs', () => {
  it('Creating and Deleting a Manual Checkin', () => {
    cy.visit('/es/sign-in')

    cy.wait(3000)
    cy.get('input#username').type(exampleUser.name)
    cy.get('input#password').type(exampleUser.password)

    cy.get('form').submit()
    cy.wait(5000)

    cy.visit('/es/in-and-outs')
    cy.wait(5000)

    cy.get('button#new-manual-date').should('be.visible').click()

    cy.wait(1000)
    // Datepicker
    cy.get('button#in_date').click()
    // Buscar el botón con el atributo name=day y hacer clic en él
    cy.get('button[name=day]').contains('12').click()
    cy.get('h2#necesitoelid').click()
    cy.get('input#in_hour').type(exampleClockin.in_hour)
    cy.get('button#out_date').click()
    cy.get('button[name=day]').contains('12').click()
    cy.get('h2#necesitoelid').click()
    cy.get('input#out_hour').type(exampleClockin.out_hour)

    cy.get('button#fichar').click()

    // Check if the new checkin is in the list
    cy.get('tbody').contains('12:12')
    cy.get('tbody').contains(exampleClockin.in_hour)
    cy.get('tbody').contains(exampleClockin.out_hour)

    cy.wait(2000)
    cy.get(':nth-child(1) > .py-3').click()
    cy.wait(1000)
    cy.get('button#eliminar').click()

    // Comprobar que el checkin ha sido eliminado
    cy.get('tbody').contains('12:12').should('not.exist')
  })
})
