import { PageShell } from "@/components/video/PageShell";
import { Sparkles, TrendingUp, GraduationCap, ShoppingBag, Camera, Music, Briefcase, Heart } from "lucide-react";

const CATEGORIES = ["All", "Cinematic", "Social", "Education", "Product", "Music", "Corporate"];

const TEMPLATES = [
  { id: "t1", name: "Cinematic Trailer", desc: "Epic 30s trailer with score and title cards.", icon: Camera, hue: 270, uses: "12.4k", tag: "Cinematic" },
  { id: "t2", name: "TikTok Hook", desc: "9:16 vertical with bold captions and quick cuts.", icon: TrendingUp, hue: 340, uses: "48.2k", tag: "Social" },
  { id: "t3", name: "Explainer Video", desc: "Animated 60s explainer with voiceover.", icon: GraduationCap, hue: 200, uses: "9.1k", tag: "Education" },
  { id: "t4", name: "Product Showcase", desc: "Studio-style product reveal with specs.", icon: ShoppingBag, hue: 30, uses: "21.7k", tag: "Product" },
  { id: "t5", name: "Music Lyric Video", desc: "Beat-synced lyrics with reactive visuals.", icon: Music, hue: 290, uses: "6.3k", tag: "Music" },
  { id: "t6", name: "Corporate Intro", desc: "Clean brand intro with logo reveal.", icon: Briefcase, hue: 220, uses: "14.0k", tag: "Corporate" },
  { id: "t7", name: "Wedding Highlight", desc: "Romantic montage with soft transitions.", icon: Heart, hue: 320, uses: "3.8k", tag: "Cinematic" },
  { id: "t8", name: "Instagram Reel", desc: "15s vertical loop optimized for retention.", icon: Sparkles, hue: 160, uses: "33.5k", tag: "Social" },
];

const Templates = () => {
  return (
    <PageShell title="Templates" subtitle="Start from a proven format. Tweak the prompt, render in seconds.">
      <div className="flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((c, i) => (
          <button
            key={c}
            className={`px-3 py-1.5 rounded-full text-xs border transition ${
              i === 0
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                : "bg-secondary/40 text-muted-foreground border-border/60 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {TEMPLATES.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.id} className="rounded-2xl glass p-4 shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all animate-fade-in">
              <div
                className="aspect-video rounded-xl mb-3 grid place-items-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, hsl(${t.hue} 80% 45%), hsl(${(t.hue + 60) % 360} 80% 30%))` }}
              >
                <Icon className="h-8 w-8 text-white/80" />
                <span className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-white">{t.tag}</span>
              </div>
              <h3 className="font-display text-sm font-semibold">{t.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">{t.uses} uses</span>
                <button className="text-xs px-3 py-1 rounded-md bg-primary/20 text-primary-glow border border-primary/30 hover:bg-primary/30 transition">
                  Use
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
};

export default Templates;