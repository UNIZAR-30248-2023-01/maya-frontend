import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  visibility: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime()
})

export const peopleSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  email: z.string()
})
