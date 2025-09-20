import Sidebar from "./Sidebar";
import NavHeader from "./NavHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20 lg:ml-24 xl:ml-28 p-4 lg:p-6 xl:p-8 overflow-x-hidden">
        <div className="w-full max-w-none mx-auto space-y-6 lg:space-y-8">
          <NavHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
