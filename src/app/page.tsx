'use client';

import { AboutComponent } from '@/components/aboutComponent';
import { ContactComponent } from '@/components/contactComponent';
import { TemplateComponent } from '@/components/templateComponent';
import { useState } from 'react';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      {currentStep === 0 && <AboutComponent onNext={() => setCurrentStep(1)} />}
      {currentStep === 1 && (
        <ContactComponent onNext={() => setCurrentStep(2)} />
      )}
      {currentStep === 2 && <TemplateComponent />}
    </>
  );
}
