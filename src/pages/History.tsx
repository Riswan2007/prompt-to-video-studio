import { PageShell } from "@/components/video/PageShell";
import { Play, Download, RotateCcw, Trash2, Clock } from "lucide-react";

const HISTORY = [
  { id: "h1", prompt: "Cinematic drone shot over Tokyo at sunset with neon reflections", time: "Today, 2:14 PM", duration: "1:24", status: "Completed", hue: 280 },
  { id: "h2", prompt: "Product reel for a new pair of running shoes, studio lighting", time: "Today, 11:02 AM", duration: "0:45", status: "Completed", hue: 30 },
  { id: "h3", prompt: "Documentary about deep-sea creatures with David-Attenborough VO", time: "Yesterday, 6:30 PM", duration: "3:12", status: "Completed", hue: 200 },
  { id: "h4", prompt: "Educational explainer about black holes with animated diagrams", time: "Apr 17, 9:14 AM", duration: "2:08", status: "Completed", hue: 250 },
  { id: "h5", prompt: "Coffee shop brand spot, warm tones, slow motion pour", time: "Apr 15, 4:48 PM", duration: "0:30", status: "Failed", hue: 25 },
  { id: "h6", prompt: "Nordic travel vlog: fjords, aurora, cozy cabins", time: "Apr 12, 10:00 AM", duration: "1:55", status: "Completed", hue: 170 },
  { id: "h7", prompt: "Fitness app promo, 9:16, energetic, with on-screen UI", time: "Apr 8, 7:21 PM", duration: "0:20", status: "Completed", hue: 340 },
];

const statusStyle: Record<string, string> = {
  Completed: "bg-primary/20 text-primary-glow border-primary/30",
  Failed: "bg-destructive/20 text-destructive border-destructive/40",
};

const History = () => {
  return (
    <PageShell title="History" subtitle="Every prompt and render, in chronological order.">
      <div className="rounded-2xl glass shadow-elegant overflow-hidden">
        <ul className="divide-y divide-border/60">
          {HISTORY.map((h) => (
            <li key={h.id} className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition group animate-fade-in">
              <div
                className="h-14 w-24 shrink-0 rounded-lg grid place-items-center"
                style={{ background: `linear-gradient(135deg, hsl(${h.hue} 80% 45%), hsl(${(h.hue + 60) % 360} 80% 30%))` }}
              >
                <Play className="h-4 w-4 text-white/80" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{h.prompt}</p>
                <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{h.time}</span>
                  <span className="font-mono">{h.duration}</span>
                  <span className={`px-2 py-0.5 rounded-full border ${statusStyle[h.status]}`}>{h.status}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground" title="Re-run">
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground" title="Download">
                  <Download className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-secondary text-muted-foreground hover:text-destructive" title="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
};

export default History;