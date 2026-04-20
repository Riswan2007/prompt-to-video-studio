import { useState } from "react";
import { Pencil, Check, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface Scene {
  id: string;
  name: string;
  description: string;
  duration: string;
  hue: number;
}

interface Props {
  scenes: Scene[];
  onRename: (id: string, name: string) => void;
}

export function SceneBreakdown({ scenes, onRename }: Props) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  return (
    <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Scene Breakdown
        </h3>
        <span className="text-xs text-muted-foreground">{scenes.length} scenes</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {scenes.map((s, i) => (
          <div
            key={s.id}
            className="group relative rounded-xl border border-border/60 bg-secondary/30 p-3 hover:border-primary/40 transition-all hover:shadow-glow"
          >
            <div
              className="aspect-video rounded-lg mb-3 grid place-items-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, hsl(${s.hue} 80% 45%), hsl(${(s.hue + 60) % 360} 80% 35%))`,
              }}
            >
              <ImageIcon className="h-6 w-6 text-white/40" />
              <span className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white">
                Scene {i + 1}
              </span>
              <span className="absolute top-2 right-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white">
                {s.duration}
              </span>
            </div>
            {editing === s.id ? (
              <div className="flex items-center gap-1.5">
                <Input
                  autoFocus
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="h-8 text-sm bg-background border-border"
                />
                <button
                  onClick={() => {
                    onRename(s.id, draft || s.name);
                    setEditing(null);
                  }}
                  className="h-8 w-8 grid place-items-center rounded-md bg-primary text-primary-foreground"
                >
                  <Check className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium truncate">{s.name}</p>
                <button
                  onClick={() => {
                    setEditing(s.id);
                    setDraft(s.name);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition h-7 w-7 rounded-md grid place-items-center hover:bg-secondary text-muted-foreground"
                  aria-label="Edit scene name"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}