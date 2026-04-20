import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/video/AppSidebar";
import { Construction } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

const Placeholder = ({ title, description }: Props) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background font-sans">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 h-14 flex items-center gap-2 px-3 sm:px-5 border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <span className="font-display font-semibold text-base">{title}</span>
          </header>
          <main className="flex-1 grid place-items-center p-8">
            <div className="max-w-md text-center rounded-2xl glass p-8 shadow-elegant animate-fade-in">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-primary/20 border border-primary/30 grid place-items-center mb-4 animate-float">
                <Construction className="h-6 w-6 text-primary-glow" />
              </div>
              <h1 className="font-display text-2xl font-semibold mb-2">{title}</h1>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Placeholder;