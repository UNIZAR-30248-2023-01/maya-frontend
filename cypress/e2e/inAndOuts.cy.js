const exampleClockin = {
  in_date: '2023-11-09T09:30:00.000Z',
  out_date: '2023-11-09T09:30:00.000Z',
  in_hour: '09:00',
  out_hour: '12:30'
}

describe('In and outs', () => {
  it('Creating a Manual Checkin', () => {
    cy.visit('/en/in-and-outs')

    cy.wait(3000)
    cy.get('button#new-manual-date').click()

    // Datepicker
    cy.get('datepicker#in_date').type(exampleClockin.in_date)
    cy.get('text#in_hour').type(exampleClockin.in_hour)
    cy.get('datepicker#out_date').type(exampleClockin.out_date)
    cy.get('text#on_hour').type(exampleClockin.out_hour)

    cy.get('form').submit()

    // Check if the new checkin is in the list
    cy.get('tbody').contains(exampleClockin.in_date)
    cy.get('tbody').contains(exampleClockin.in_hour)
    cy.get('tbody').contains(exampleClockin.out_date)
    cy.get('tbody').contains(exampleClockin.out_hour)
  })
})
