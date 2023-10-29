import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const projectSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().max(150).nullable(),
  status: z.enum(['open', 'closed']).default('open'),
  visibility: z.enum(['public', 'private']).default('private'),
  organization: z.string()
})

export const tasksSchema = z.object({
  name: z.string().min(1).max(30),
  assignees: z.array(z.string()).optional(),
  label: z.enum(['dependencies', 'bug', 'documentation', 'duplicate', 'enhancement', 'good first issue', 'help wanted', 'invalid', 'question', 'wontfix']).optional(),
  status: z.enum(['new', 'block', 'in progress', 'done']).optional(),
  estimated: z.number().min(0).optional(),
  end_date: z.string().datetime().optional()
})

export const peopleSchema = z.object({
  id: z.string(),
  avatar: z.enum([]),
  firstname: z.string().min(1).max(30),
  lastname: z.string().min(1).max(30),
  username: z.string().min(1).max(30),
  email: z.string().email()
})

export const teamSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(30),
  description: z.string().max(150),
  visibility: z.enum(['public', 'private']).default('private')
})
