'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFields, Schema } from '@/lib/validation/contactSchema';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(Schema),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push('/templates');
  };

  return (
    <form
      className="cardtree flex flex-col gap-4 md:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between">
        <label htmlFor="email">Email ID</label>
        <input
          {...register('email')}
          type="text"
          id="email"
          placeholder="name@domain.com"
          className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="phone">Phone number</label>
        <input
          {...register('phone')}
          type="text"
          id="phone"
          placeholder="(+XX)99999999"
          className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
        />
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className={clsx(
          'cursor-pointer rounded-3xl px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 transition-colors duration-200 text-accent',
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#2C7BDE] hover:bg-[#2568b0]'
        )}
      >
        Continue
      </button>
    </form>
  );
}
