import crypto from 'crypto'

export const user =
  {
    username: Cypress.env('TEST_USERNAME'),
    firstname: Cypress.env('TEST_FIRSTNAME'),
    lastname: Cypress.env('TEST_LASTNAME'),
    email: Cypress.env('TEST_EMAIL'),
    password: Cypress.env('TEST_PASSWORD')
  }

const salt = crypto.randomBytes(16).toString('hex')
const hashedPassword = crypto
  .pbkdf2Sync(user.password, salt, 10000, 64, 'sha512')
  .toString('hex')

export const createUser = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: {
      email: user.email,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      passwd_hash: hashedPassword,
      salt
    }
  })
}

export const deleteUser = () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people?username=eq.${user.username}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}