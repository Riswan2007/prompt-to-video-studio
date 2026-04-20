import { Film, Play, Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  loading: boolean;
  generated: boolean;
  aspect: string;
  prompt?: string;
}

const aspectClass = (a: string) =>
  a === "9:16" ? "aspect-[9/16] max-w-[280px] mx-auto" : a === "1:1" ? "aspect-square max-w-[420px] mx-auto" : "aspect-video";

export function PreviewPanel({ loading, generated, aspect, prompt }: Props) {
  return (
    <div className="rounded-2xl glass p-4 sm:p-5 shadow-elegant animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Preview
        </h3>
        <span className="text-xs text-muted-foreground">{aspect}</span>
      </div>

      <div className={`relative ${aspectClass(aspect)} rounded-xl overflow-hidden bg-black border border-border/60`}>
        {loading ? (
          <div className="absolute inset-0">
            <Skeleton className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--secondary)),45%,hsl(var(--muted)),55%,hsl(var(--secondary)))] bg-[length:200%_100%] animate-shimmer" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-3 text-center px-4">
                <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center animate-pulse-glow">
                  <Sparkles className="h-5 w-5 text-primary-foreground animate-spin" style={{ animationDuration: "3s" }} />
                </div>
                <p className="text-sm font-medium">Crafting your video…</p>
                <p className="text-xs text-muted-foreground max-w-xs line-clamp-2">{prompt}</p>
              </div>
            </div>
          </div>
        ) : generated ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(265_90%_50%/0.5),transparent_55%),radial-gradient(circle_at_70%_80%,hsl(190_95%_55%/0.5),transparent_55%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <button className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-md grid place-items-center hover:scale-105 transition-transform shadow-glow">
                <Play className="h-6 w-6 ml-1 text-foreground" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-primary rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-white/70 mt-1.5 font-mono">
                <span>00:18</span>
                <span>00:60</span>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center text-center gap-3 px-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-primary/20 border border-primary/30 grid place-items-center animate-float">
                <Film className="h-7 w-7 text-primary-glow" />
              </div>
              <div>
                <p className="font-medium">Your video will appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Describe your idea above and click Generate.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}