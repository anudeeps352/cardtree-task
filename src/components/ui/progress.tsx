'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg';

const steps = [
  { id: 0, text: 'About' },
  { id: 1, text: 'Contact Info' },
  { id: 2, text: 'Template + AI' },
];

type ProgressProps = {
  currentStep: number;
};

export default function Progress({ currentStep }: ProgressProps) {
  return (
    <div className="flex items-center gap-4 w-full max-w-md justify-center py-4">
      {steps.map((step, index) => {
        const isCompleted = step.id <= currentStep;
        return (
          <div key={step.id} className="flex gap-4 items-center">
            <div className="flex flex-col items-center">
              <div
                className={clsx(
                  'w-7 h-7 flex items-center justify-center rounded-full border-2 text-gray-500 font-bold transition-all',
                  isCompleted
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'bg-gray-300 border-gray-300'
                )}
              >
                {step.id + 1}
              </div>
              <span className="mt-2 text-sm font-medium transition-all text-gray-500">
                {step.text.includes('AI') ? (
                  <>
                    {step.text.replace('AI', '')}
                    <span className="bg-gradient-to-b from-blue-500 to-red-500 bg-clip-text text-transparent">
                      AI
                    </span>
                  </>
                ) : (
                  step.text
                )}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center">
                <Image
                  src={Arrow}
                  alt="Progress Arrow"
                  width={0}
                  height={0}
                  className="mx-auto w-10 h-auto object-contain"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
