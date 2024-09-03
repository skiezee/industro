import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen flex flex-col p-4 shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-yellow-600">industro.</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="mb-4 flex items-center">
            <Link href="/" className="flex items-center p-2 rounded bg-[#18BAEB33] text-[#18BAEB] w-full">
              <Image src="/home.svg" alt="Home" width={24} height={24} className="mr-2" />
              Home
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link href="/innovation-hub" className="flex items-center p-2 rounded text-[#1E1E1E90] font-semibold hover:bg-gray-200 w-full">
              <Image src="/inno.svg" alt="Innovation Hub" width={24} height={24} className="mr-2" />
              Innovation Hub
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link href="/" className="flex items-center p-2 rounded text-[#1E1E1E90] font-semibold hover:bg-gray-200 w-full">
              <Image src="/video-tutorial.svg" alt="Video Tutorial" width={24} height={24} className="mr-2" />
              Video Tutorial
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link href="/" className="flex items-center p-2 rounded text-[#1E1E1E90] font-semibold hover:bg-gray-200 w-full">
              <Image src="/job.svg" alt="Job Board" width={24} height={24} className="mr-2" />
              Job Board
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link href="/" className="flex items-center p-2 rounded text-[#1E1E1E90] font-semibold hover:bg-gray-200 w-full">
              <Image src="/settings.svg" alt="Settings" width={24} height={24} className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/logout" className="flex items-center p-2 rounded text-red-600 hover:bg-gray-200">
          <Image src="/images/logout-icon.png" alt="Logout" width={24} height={24} className="mr-2" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
