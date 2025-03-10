import { z } from 'zod';

export const Schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number' })
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number must be at most 15 digits' }),
});

export type FormFields = z.infer<typeof Schema>;
