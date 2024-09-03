"use client"
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/navbar';
import { LayoutProps } from '@/.next/types/app/layout';

const DashboardLayout = ({ children , ...props }: LayoutProps) => {
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
