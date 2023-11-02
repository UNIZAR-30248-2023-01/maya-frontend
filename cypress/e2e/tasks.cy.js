/// <reference types="cypress" />

const project = {
  name: 'New Project',
  description: 'Description of the new project'
}

const people = [
  {
    name: 'Hector Toral',
    username: 'hec7orci7o',
    email: 'hec7orci7o@example.com'
  }
]

const task = {
  name: 'New Task',
  description: 'Description of the new task',
  assignees: [
    people[0].username
  ],
  label: 'enhancement',
  status: 'new',
  estimated: 3,
  end_date: new Date(),
  project: project.name
}

describe('Tasks Resource', () => {
  it('Creating a New Tasks', () => {
    cy.visit(`/en/projects/${project.name}`)

    cy.wait(3000)
    cy.get('button#new-task').click()

    cy.get('input#name').type(task.name)
    cy.get('textarea#description').type(task.description)

    cy.get('button#assignees').click()
    cy.get('div#assignees-menu')
      .contains(task.assignees[0])
      .click()

    cy.get('button#label').click()
    cy.get('div#label-menu')
      .contains(task.label)
      .click()

    cy.get('button#status').click()
    cy.get('div#status-menu')
      .contains(task.status)
      .click()

    cy.get('input#estimated').type(task.estimated)

    cy.get('button#end-date').click()
    cy.get('.rdp-button[name="day"]')
      .contains(new RegExp('^' + task.end_date.getDate().toString() + '$', 'g'))
      .click()

    cy.get('form').submit()
    cy.get('input#filter-tasks').type(task.name, { force: true })
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first-child')
      .find('div')
      .should('contain.text', task.name)
  })

  after(() => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/tasks?name=eq.${task.name}`,
      headers: {
        apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
        Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
      }
    }).catch((error) => {
      console.error(error.message)
    })
  })
})
