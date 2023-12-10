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

export const inAndOutsSchema = z.object({
  in_date: z.date().nullable(),
  out_date: z.date().nullable(),
  total: z.number().nullable()
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
  role: z.enum(['owner', 'developer', 'scrum-master', 'tester', 'designer', 'member']).default('member')
})

export const organizationSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().optional().nullable()
  // plan: z.enum(['personal', 'educational', 'team', 'enterprise']).default('personal')
})

export const teamSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().max(150).nullable(),
  members: z.array(z.string()).optional(),
  visibility: z.enum(['public', 'private']).default('private'),
  organization: z.string()
})

export const projectSettingsSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().max(150).nullable()
})

export const accountFormSchema = z.object({
  username: z.string().min(1).max(30).nullable(),
  email: z.string().email().nullable(),
  avatar: z.string().nullable(),
  firstname: z.string().min(1).max(30).nullable(),
  lastname: z.string().min(1).max(30).nullable(),
  language: z.string().nullable()
})

export const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark']).default('light')
})
