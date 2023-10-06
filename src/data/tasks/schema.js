import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  time: z.number(),
  status: z.string(),
  deadline: z.string(),
  priority: z.string(),
  created_at: z.string(),
  task_user: z.object({
    user_id: z.string()
  }).array()
})
