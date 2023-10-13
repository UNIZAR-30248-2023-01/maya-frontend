import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  label: z.string()
})

export const peopleSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  email: z.string()
})
