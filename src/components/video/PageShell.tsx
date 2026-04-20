import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/video/AppSidebar";

interface Props {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function PageShell({ title, subtitle, actions, children }: Props) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background font-sans">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 h-14 flex items-center gap-2 px-3 sm:px-5 border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <span className="font-display font-semibold text-base">{title}</span>
            <div className="ml-auto flex items-center gap-2">{actions}</div>
          </header>
          <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2">
            <h1 className="font-display text-2xl sm:text-3xl font-semibold">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-10 pt-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}