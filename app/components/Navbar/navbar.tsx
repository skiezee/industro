import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">
      <input
        type="text"
        placeholder="Search for anything..."
        className="p-2 border rounded-xl outline-none w-1/2"
      />
      <div className="flex items-center">
        <Image
          src="/user-avatar.svg" 
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2 font-semibold">Musyafa Fadila</span>
      </div>
    </div>
  );
};

export default Navbar;
