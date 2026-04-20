import { Home, FolderOpen, Settings, Sparkles, History, Wand2 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Studio", url: "/", icon: Home },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Templates", url: "/templates", icon: Wand2 },
  { title: "History", url: "/history", icon: History },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/60">
      <SidebarHeader className="px-3 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm">AI Video Agent</div>
              <div className="text-[10px] text-muted-foreground">Studio · v1.0</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <NavLink
                        to={item.url}
                        className={`group/nav flex items-center gap-2 rounded-lg transition-all ${
                          active
                            ? "bg-gradient-primary/20 text-foreground"
                            : "hover:bg-sidebar-accent"
                        }`}
                      >
                        <item.icon className={`h-4 w-4 ${active ? "text-primary-glow" : ""}`} />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mx-3 mt-auto mb-4 rounded-xl border border-border/60 bg-gradient-surface p-3">
            <div className="text-xs font-medium">Pro plan</div>
            <div className="text-[11px] text-muted-foreground mt-1">42 / 100 credits used</div>
            <div className="h-1.5 mt-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-[42%] bg-gradient-primary rounded-full" />
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}