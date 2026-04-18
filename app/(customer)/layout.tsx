
import { CustomerSidebar } from '@/components/layout/CustomerSidebar';
import { ReactNode } from 'react';

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <CustomerSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}