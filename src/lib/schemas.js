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
  description: z.string().optional().nullable(),
  assignees: z.array(z.string()).optional(),
  label: z.enum(['ui', 'data model', 'documentation', 'enhancement', 'testing', 'bug']),
  status: z.enum(['new', 'block', 'in progress', 'done']),
  estimated: z.number().min(0),
  end_date: z.date().optional().nullable()
})

export const peopleSchema = z.object({
  members: z.array(z.string().min(1).max(30))
})

export const roleSchema = z.object({
  role: z.enum(['owner', 'developer', 'scrum master', 'tester', 'designer', 'member']).default('member')
})

export const teamSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().max(150).nullable(),
  members: z.array(z.string()).optional(),
  visibility: z.enum(['public', 'private']).default('private'),
  organization: z.string()
})
