import {
  HomeIcon,
  BoltIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
  CheckBadgeIcon,
  RectangleStackIcon
} from '@heroicons/react/24/outline';

import Image from "next/image";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTED" Icon={RectangleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassCircleIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        // src="https://links.papareact.com/ua6"
        // src="/next.svg"
        src="/hulu-white.png"
        alt="Hulu Logo"
        width={200}
        height={100}
      />
    </header>
  );
}
