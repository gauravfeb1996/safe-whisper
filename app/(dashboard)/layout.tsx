import { AppSidebar } from "@/components/side-bar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </SidebarProvider>
  );
}
