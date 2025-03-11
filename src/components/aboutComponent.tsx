'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Progress from '@/components/ui/progress';
import Frame from '../../public/Frame 1.png';
import HomeForm from './homeForm';
import Logo from '../../public/Cardtree.png';

type AboutComponentProps = {
  onNext: () => void;
};

export function AboutComponent({ onNext }: AboutComponentProps) {
  return (
    <div className="min-h-dvh grid grid-cols-1 md:grid-cols-2 gap-4">
      <main className="flex flex-col bg-white rounded-tr-4xl rounded-br-4xl shadow-xl items-center gap-8 md:12 w-full pt-4 pb-8">
        <div className="flex self-start px-4 md:px-8 relative">
          <Image
            src={Logo}
            width={0}
            height={0}
            alt="logo"
            className="w-24 h-auto md:w-36 lg:w-40 object-contain"
            priority
          />
        </div>
        <Progress currentStep={0} />
        <Card className="border-none shadow-none max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-[clamp(1.5rem,2.5vw,2rem)]">
              Bio hero details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HomeForm onNext={onNext} />
          </CardContent>
        </Card>
      </main>
      <div className="h-full flex justify-center items-center">
        <div className="">
          <Image
            src={Frame}
            width={0}
            height={0}
            alt="Frame"
            className="w-[80%] h-auto object-contain mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
