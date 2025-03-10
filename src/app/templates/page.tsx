import Template1 from '../../../public/Templates/Template1.png';
import Template2 from '../../../public/Templates/Template2.png';
import Logo from '../../../public/Cardtree.png';

import Image from 'next/image';
import { TemplateCard } from '@/components/ui/templatecard';

export default function Template() {
  return (
    <main className="min-h-dvh flex flex-col bg-white items-center w-full py-4 gap-10">
      <div className="flex self-start px-4 md:px-8 relative">
        <Image
          src={Logo}
          width={0}
          height={0}
          alt="logo"
          className="w-24 h-auto md:w-36 lg:w-40 object-contain"
        ></Image>
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold">Choose a template</h1>
      <div className="grid grid-cols-2 w-3/4">
        <TemplateCard
          title="Full Story"
          subtitle="Template 1 of 5"
          image={Template1}
        />
        <TemplateCard
          title="Big Picture"
          subtitle="Template 2 of 5"
          image={Template2}
        />
      </div>
    </main>
  );
}
