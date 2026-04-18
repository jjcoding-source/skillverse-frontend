
import { WorkerSidebar } from '@/components/layout/WorkerSidebar';
import { ReactNode } from 'react';

export default function WorkerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <WorkerSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}