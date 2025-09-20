import Sidebar from "./Sidebar";
import NavHeader from "./NavHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-28 p-4">
        <div className="max-w-[1814px] mx-auto space-y-8">
          <NavHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
