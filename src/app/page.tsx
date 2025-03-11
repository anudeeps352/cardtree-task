'use client';

import { useState } from 'react';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import TemplatePage from './templates/page';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <AboutPage key="home" onNext={() => setCurrentStep(1)} />,
    <ContactPage key="contact" onNext={() => setCurrentStep(2)} />,
    <TemplatePage key="template" />,
  ];

  return <div className="min-h-screen">{steps[currentStep]}</div>;
}
