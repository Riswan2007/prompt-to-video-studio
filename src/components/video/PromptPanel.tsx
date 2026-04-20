import { useState } from "react";
import { Mic, Sparkles, Wand2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const SUGGESTIONS = [
  "Cinematic drone shot over Tokyo at sunset, neon reflections",
  "Documentary about deep-sea creatures with calm voiceover",
  "Fast-paced product reel for a new pair of running shoes",
  "Educational explainer: how black holes form, with diagrams",
];

interface Props {
  onGenerate: (prompt: string) => void;
  loading: boolean;
}

export function PromptPanel({ onGenerate, loading }: Props) {
  const [prompt, setPrompt] = useState("");
  const [listening, setListening] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error("Please describe the video you want to create.");
      return;
    }
    onGenerate(prompt.trim());
  };

  const toggleMic = () => {
    setListening((v) => !v);
    toast(listening ? "Voice input stopped" : "Listening… (demo)", {
      icon: listening ? "🎙️" : "🎤",
    });
  };

  return (
    <div className="relative rounded-2xl glass p-5 sm:p-6 shadow-elegant overflow-hidden animate-fade-in">
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-glow pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-7 w-7 rounded-lg bg-gradient-primary grid place-items-center">
            <Wand2 className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <h2 className="font-display text-lg font-semibold">Create a video</h2>
        </div>

        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video you want to create..."
            className="min-h-[120px] resize-none bg-secondary/40 border-border/60 text-base focus-visible:ring-primary/40 pr-12"
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={toggleMic}
                aria-label="Voice input"
                className={`absolute right-3 bottom-3 h-9 w-9 rounded-full grid place-items-center transition-all ${
                  listening
                    ? "bg-primary text-primary-foreground animate-pulse-glow"
                    : "bg-secondary hover:bg-secondary/70 text-muted-foreground"
                }`}
              >
                <Mic className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Voice input</TooltipContent>
          </Tooltip>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setPrompt(s)}
              className="text-xs px-3 py-1.5 rounded-full bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 transition-colors"
            >
              <Sparkles className="inline h-3 w-3 mr-1 text-primary-glow" />
              {s}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground hidden sm:block">
            Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border/60 text-[10px]">⌘</kbd> +{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border/60 text-[10px]">↵</kbd> to generate
          </p>
          <Button
            onClick={handleGenerate}
            disabled={loading}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" /> Generate Video
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}