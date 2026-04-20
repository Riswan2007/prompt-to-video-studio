import { PageShell } from "@/components/video/PageShell";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal, Play, Clock, Film } from "lucide-react";

const PROJECTS = [
  { id: "p1", title: "Tokyo Skyline Reel", duration: "1:24", status: "Published", updated: "2h ago", hue: 280, scenes: 6 },
  { id: "p2", title: "Running Shoe Launch", duration: "0:45", status: "Draft", updated: "Yesterday", hue: 30, scenes: 4 },
  { id: "p3", title: "Deep-Sea Documentary", duration: "3:12", status: "Rendering", updated: "3d ago", hue: 200, scenes: 12 },
  { id: "p4", title: "Black Hole Explainer", duration: "2:08", status: "Published", updated: "1w ago", hue: 250, scenes: 9 },
  { id: "p5", title: "Coffee Shop Brand Spot", duration: "0:30", status: "Draft", updated: "2w ago", hue: 25, scenes: 3 },
  { id: "p6", title: "Nordic Travel Vlog", duration: "1:55", status: "Published", updated: "3w ago", hue: 170, scenes: 8 },
  { id: "p7", title: "Fitness App Promo", duration: "0:20", status: "Draft", updated: "1mo ago", hue: 340, scenes: 2 },
  { id: "p8", title: "Wedding Highlights", duration: "4:30", status: "Published", updated: "2mo ago", hue: 320, scenes: 15 },
];

const statusStyle: Record<string, string> = {
  Published: "bg-primary/20 text-primary-glow border-primary/30",
  Draft: "bg-secondary text-muted-foreground border-border",
  Rendering: "bg-accent/20 text-accent-foreground border-accent/40",
};

const Projects = () => {
  return (
    <PageShell title="Projects" subtitle="Browse, search and manage every video you've created.">
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-9 bg-secondary/40 border-border/60" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:opacity-90 transition">
          <Plus className="h-4 w-4" /> New Project
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PROJECTS.map((p) => (
          <div key={p.id} className="group rounded-2xl glass overflow-hidden shadow-elegant hover:shadow-glow transition-all animate-fade-in">
            <div
              className="aspect-video relative grid place-items-center"
              style={{ background: `linear-gradient(135deg, hsl(${p.hue} 80% 45%), hsl(${(p.hue + 60) % 360} 80% 30%))` }}
            >
              <button className="h-12 w-12 rounded-full bg-black/40 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <Play className="h-5 w-5 text-white" />
              </button>
              <span className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white flex items-center gap-1">
                <Clock className="h-3 w-3" /> {p.duration}
              </span>
              <span className={`absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full border ${statusStyle[p.status]}`}>
                {p.status}
              </span>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium truncate">{p.title}</p>
                <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-4 w-4" /></button>
              </div>
              <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Film className="h-3 w-3" />{p.scenes} scenes</span>
                <span>{p.updated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
};

export default Projects;