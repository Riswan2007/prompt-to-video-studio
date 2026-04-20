import { GripVertical } from "lucide-react";

export interface Clip {
  id: string;
  name: string;
  duration: number;
  hue: number;
}

interface Props {
  clips: Clip[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export function Timeline({ clips, selected, onSelect }: Props) {
  const total = clips.reduce((s, c) => s + c.duration, 0);
  return (
    <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Media Timeline
        </h3>
        <span className="text-xs text-muted-foreground font-mono">{total}s total</span>
      </div>
      <div className="relative">
        <div className="flex justify-between text-[10px] text-muted-foreground font-mono mb-2 px-1">
          {[0, 15, 30, 45, 60].map((t) => (
            <span key={t}>{t}s</span>
          ))}
        </div>
        <div className="overflow-x-auto scrollbar-thin pb-2">
          <div className="flex gap-2 min-w-max">
            {clips.map((c) => {
              const active = selected === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelect(c.id)}
                  style={{
                    width: `${Math.max(c.duration * 8, 90)}px`,
                    background: active
                      ? `linear-gradient(135deg, hsl(${c.hue} 85% 55%), hsl(${(c.hue + 50) % 360} 85% 45%))`
                      : `linear-gradient(135deg, hsl(${c.hue} 40% 25%), hsl(${(c.hue + 50) % 360} 40% 20%))`,
                  }}
                  className={`relative h-20 rounded-lg p-2 text-left text-xs flex flex-col justify-between shrink-0 transition-all border ${
                    active
                      ? "border-primary-glow shadow-glow scale-[1.02]"
                      : "border-border/60 hover:border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <GripVertical className="h-3 w-3 text-white/60" />
                    <span className="text-[10px] font-mono text-white/80">{c.duration}s</span>
                  </div>
                  <span className="text-white text-xs font-medium truncate">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}