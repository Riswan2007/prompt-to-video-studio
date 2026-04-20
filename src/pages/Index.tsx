import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/video/AppSidebar";
import { PromptPanel } from "@/components/video/PromptPanel";
import { SettingsPanel, type VideoSettings } from "@/components/video/SettingsPanel";
import { PreviewPanel } from "@/components/video/PreviewPanel";
import { SceneBreakdown, type Scene } from "@/components/video/SceneBreakdown";
import { Timeline, type Clip } from "@/components/video/Timeline";
import { ExportPanel } from "@/components/video/ExportPanel";
import { HistoryPanel, type HistoryItem } from "@/components/video/HistoryPanel";
import { Bell, Sparkles } from "lucide-react";
import { toast } from "sonner";

const MOCK_SCENES: Scene[] = [
  { id: "s1", name: "Opening skyline", description: "Aerial shot of the city at golden hour with neon awakening.", duration: "0:08", hue: 265 },
  { id: "s2", name: "Street level", description: "Rain-slick streets, reflections of signage, slow dolly forward.", duration: "0:12", hue: 200 },
  { id: "s3", name: "Character intro", description: "Hero turns to camera under a flickering neon sign.", duration: "0:10", hue: 320 },
  { id: "s4", name: "Action beat", description: "Quick cuts of motion, sparks and lights, rhythmic music.", duration: "0:14", hue: 40 },
  { id: "s5", name: "Quiet moment", description: "Wide static shot, soft ambient pad, contemplative mood.", duration: "0:09", hue: 150 },
  { id: "s6", name: "Closing logo", description: "Brand mark fades in over a star-field with subtle bloom.", duration: "0:07", hue: 280 },
];

const MOCK_CLIPS: Clip[] = [
  { id: "c1", name: "Skyline", duration: 8, hue: 265 },
  { id: "c2", name: "Streets", duration: 12, hue: 200 },
  { id: "c3", name: "Hero shot", duration: 10, hue: 320 },
  { id: "c4", name: "Action", duration: 14, hue: 40 },
  { id: "c5", name: "Wide", duration: 9, hue: 150 },
  { id: "c6", name: "Logo", duration: 7, hue: 280 },
];

const MOCK_HISTORY: HistoryItem[] = [
  { id: "h1", prompt: "Cinematic drone shot over Tokyo at sunset", timestamp: "2 hours ago", thumbHue: 280 },
  { id: "h2", prompt: "Product reel for a new pair of running shoes", timestamp: "Yesterday", thumbHue: 30 },
  { id: "h3", prompt: "Documentary about deep-sea creatures", timestamp: "3 days ago", thumbHue: 200 },
  { id: "h4", prompt: "Educational explainer about black holes", timestamp: "Last week", thumbHue: 250 },
];

const Index = () => {
  const [settings, setSettings] = useState<VideoSettings>({
    style: "Cinematic",
    duration: "60s",
    aspect: "16:9",
    subtitles: true,
    voiceover: true,
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [scenes, setScenes] = useState<Scene[]>(MOCK_SCENES);
  const [selectedClip, setSelectedClip] = useState<string | null>("c2");
  const [currentPrompt, setCurrentPrompt] = useState<string | undefined>();

  const handleGenerate = (prompt: string) => {
    setCurrentPrompt(prompt);
    setLoading(true);
    setGenerated(false);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      toast.success("Video generated! Review the scenes below.");
    }, 2400);
  };

  const handleRename = (id: string, name: string) =>
    setScenes((prev) => prev.map((s) => (s.id === id ? { ...s, name } : s)));

  const handleHistory = (it: HistoryItem) => {
    setCurrentPrompt(it.prompt);
    setGenerated(true);
    toast(`Loaded project: "${it.prompt.slice(0, 40)}…"`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background font-sans">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Top navbar */}
          <header className="sticky top-0 z-30 h-14 flex items-center gap-2 px-3 sm:px-5 border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <div className="h-5 w-px bg-border/60 mx-1 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-base">AI Video Agent</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-gradient-primary/20 text-primary-glow border border-primary/30">
                <Sparkles className="h-3 w-3" /> beta
              </span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                aria-label="Notifications"
                className="h-9 w-9 rounded-lg grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <Bell className="h-4 w-4" />
              </button>
              <div className="h-9 w-9 rounded-full bg-gradient-primary grid place-items-center text-xs font-semibold text-primary-foreground">
                AV
              </div>
            </div>
          </header>

          {/* Hero header */}
          <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2">
            <h1 className="font-display text-2xl sm:text-3xl font-semibold">
              Turn ideas into <span className="gradient-text">cinematic video</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Describe your concept. We'll generate scenes, clips, voiceover and a polished cut.
            </p>
          </div>

          {/* Main grid */}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-10 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 space-y-5 min-w-0">
                <PromptPanel onGenerate={handleGenerate} loading={loading} />
                <PreviewPanel
                  loading={loading}
                  generated={generated}
                  aspect={settings.aspect}
                  prompt={currentPrompt}
                />
                {(generated || loading) && (
                  <Timeline clips={MOCK_CLIPS} selected={selectedClip} onSelect={setSelectedClip} />
                )}
                {generated && <SceneBreakdown scenes={scenes} onRename={handleRename} />}
              </div>

              <aside className="space-y-5 min-w-0">
                <SettingsPanel value={settings} onChange={setSettings} />
                <ExportPanel ready={generated} />
                <HistoryPanel items={MOCK_HISTORY} onSelect={handleHistory} />
              </aside>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
