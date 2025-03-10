import { z } from 'zod';

export const Schema = z.object({
  firstName: z.string().min(2, 'First Name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last Name must be at least 1 characters'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  title: z.string().min(2, 'Title must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
});

export type FormFields = z.infer<typeof Schema>;
