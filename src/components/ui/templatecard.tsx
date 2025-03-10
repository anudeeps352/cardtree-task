'use client';
import Image, { StaticImageData } from 'next/image';
import { AiFillEye } from 'react-icons/ai';
import { FaUser, FaBuilding } from 'react-icons/fa';
import { HiAnnotation } from 'react-icons/hi';
import { AiOutlineLink } from 'react-icons/ai';
import { RiGalleryLine } from 'react-icons/ri';

type TemplateCardProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] gap-6">
      <h1 className="text-xl">{title}</h1>
      <h3 className="text-gray-600">{subtitle}</h3>

      <Image
        src={image}
        width={0}
        height={0}
        alt={title}
        className="h-auto object-contain  "
      />

      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-6">
        <button
          type="submit"
          onClick={() => {
            console.log({
              message: 'Selected Template',
              title,
              subtitle,
            });
          }}
          className="bg-black text-background rounded-3xl px-2 py-2 md:px-4 md:py-3 hover:bg-gray-800 text-[10px] md:text-sm font-medium whitespace-nowrap "
        >
          Use Template
        </button>

        <button
          type="button"
          className="border-1 border-black rounded-3xl px-2 py-2 md:px-4 md:py-3 hover:bg-gray-100 text-[10px] md:text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            Preview
            <AiFillEye className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </button>
      </div>

      <div className="w-full flex justify-center items-center ">
        <ul className="flex flex-col items-start gap-2 text-xs sm:text-base ">
          <li className="flex items-center gap-2 text-blue-500">
            <FaUser />
            About you
          </li>
          <li className="flex items-center gap-2 text-blue-500">
            <HiAnnotation />
            Contact section
          </li>
          <li className="flex items-center gap-2 text-blue-500">
            <FaBuilding />
            About current company
          </li>
          <li className="flex items-center gap-2 text-blue-500">
            <AiOutlineLink />
            Content-Links & files
          </li>
          <li className="flex items-center gap-2 text-blue-500">
            <RiGalleryLine />
            Gallery
          </li>
        </ul>
      </div>
    </div>
  );
};
