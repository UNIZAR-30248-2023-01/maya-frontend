export const defaultUser = {
  username: 'johndoe',
  firstname: 'john',
  lastname: 'doe',
  email: 'johndoe@example.com',
  password: '12345678'
}

export const createUser = () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('VERCEL_URL')}/api/sign-up`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(defaultUser)
  })
}

export const deleteUser = () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('NEXT_PUBLIC_SUPABASE_URL')}/rest/v1/people?username=eq.${defaultUser.username}`,
    headers: {
      apikey: Cypress.env('NEXT_PUBLIC_SUPABASE_KEY'),
      Authorization: `Bearer ${Cypress.env('NEXT_PUBLIC_SUPABASE_KEY')}`
    }
  })
}
