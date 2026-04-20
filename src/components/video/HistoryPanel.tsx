import { Clock, ArrowUpRight } from "lucide-react";

export interface HistoryItem {
  id: string;
  prompt: string;
  timestamp: string;
  thumbHue: number;
}

interface Props {
  items: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export function HistoryPanel({ items, onSelect }: Props) {
  return (
    <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Projects
        </h3>
        <Clock className="h-4 w-4 text-muted-foreground" />
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <button
              onClick={() => onSelect(it)}
              className="w-full group flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/60 transition-colors text-left"
            >
              <div
                className="h-10 w-14 shrink-0 rounded-md"
                style={{
                  background: `linear-gradient(135deg, hsl(${it.thumbHue} 75% 45%), hsl(${(it.thumbHue + 60) % 360} 75% 35%))`,
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{it.prompt}</p>
                <p className="text-[11px] text-muted-foreground">{it.timestamp}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}