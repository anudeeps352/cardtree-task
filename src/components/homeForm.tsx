'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFields, Schema } from '@/lib/validation/aboutSchema';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Glass from '../../public/glass.svg';

type HomeFormProps = {
  onNext: () => void;
};

export default function HomeForm({ onNext }: HomeFormProps) {
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
    onNext();
  };

  return (
    <form
      className="cardtree flex flex-col justify-evenly gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center flex-wrap w-full gap-4">
        <div className="flex flex-col justify-between w-full md:w-[48%] ">
          <label htmlFor="firstName">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register('firstName')}
            id="firstName"
            type="text"
            placeholder="First Name"
            className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
          />
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName.message}</div>
          )}
        </div>

        <div className="flex flex-col justify-between w-full md:w-[48%] ">
          <label htmlFor="lastName">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register('lastName')}
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName.message}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="location">Location</label>
        <input
          {...register('location')}
          type="text"
          id="location"
          placeholder="Location"
          className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
        />
        {errors.location && (
          <div className="text-red-500">{errors.location.message}</div>
        )}
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="title">Title</label>
        <input
          {...register('title')}
          type="text"
          id="title"
          placeholder="Marketing Lead"
          className="border-2 rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
        />
        {errors.title && (
          <div className="text-red-500">{errors.title.message}</div>
        )}
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="company">Company</label>
        <div className="relative">
          <input
            {...register('company')}
            type="text"
            id="company"
            placeholder="Acme"
            className="border-2 w-full rounded-md px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 bg-background"
          />
          <Image
            src={Glass}
            alt="search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6"
          />
        </div>
        {errors.company && (
          <div className="text-red-500">{errors.company.message}</div>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className={clsx(
          'rounded-3xl px-1.5 py-0.5 md:px-3 md:py-1 2xl:py-2 2xl:px-6 text-accent cursor-pointer',
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
