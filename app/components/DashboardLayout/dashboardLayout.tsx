"use client"
import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';

// Dynamically import Sidebar and Navbar with no SSR
const Sidebar = dynamic(() => import('../Sidebar/sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../Navbar/navbar'), { ssr: false });

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ensure no mismatches by preventing rendering on the server
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
