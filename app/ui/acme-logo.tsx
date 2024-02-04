import { MapPinIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <MapPinIcon className="h-12 w-12 rotate-[-35deg] pr-3" />
      <p className="text-[44px]">LifeQuest</p>
    </div>
  );
}
