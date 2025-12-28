import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutShellProps {
  children: ReactNode;
}

function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default LayoutShell;
