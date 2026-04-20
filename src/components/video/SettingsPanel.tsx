import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Film, Clock, Maximize2, Captions, AudioLines } from "lucide-react";

export interface VideoSettings {
  style: string;
  duration: string;
  aspect: string;
  subtitles: boolean;
  voiceover: boolean;
}

interface Props {
  value: VideoSettings;
  onChange: (v: VideoSettings) => void;
}

export function SettingsPanel({ value, onChange }: Props) {
  const set = <K extends keyof VideoSettings>(k: K, v: VideoSettings[K]) =>
    onChange({ ...value, [k]: v });

  const aspects = [
    { v: "16:9", label: "16:9", w: "w-7", h: "h-4" },
    { v: "9:16", label: "9:16", w: "w-4", h: "h-7" },
    { v: "1:1", label: "1:1", w: "w-5", h: "h-5" },
  ];

  return (
    <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
      <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Style & Settings
      </h3>

      <div className="space-y-4">
        <div>
          <Label className="text-xs flex items-center gap-1.5 mb-1.5 text-muted-foreground">
            <Film className="h-3.5 w-3.5" /> Video style
          </Label>
          <Select value={value.style} onValueChange={(v) => set("style", v)}>
            <SelectTrigger className="bg-secondary/40 border-border/60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cinematic">Cinematic</SelectItem>
              <SelectItem value="Fast-paced">Fast-paced</SelectItem>
              <SelectItem value="Documentary">Documentary</SelectItem>
              <SelectItem value="Educational">Educational</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs flex items-center gap-1.5 mb-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> Duration
          </Label>
          <div className="grid grid-cols-3 gap-2">
            {["30s", "60s", "2 min"].map((d) => (
              <button
                key={d}
                onClick={() => set("duration", d)}
                className={`py-2 rounded-lg text-sm border transition-all ${
                  value.duration === d
                    ? "border-primary/60 bg-primary/15 text-foreground shadow-glow"
                    : "border-border/60 bg-secondary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-xs flex items-center gap-1.5 mb-1.5 text-muted-foreground">
            <Maximize2 className="h-3.5 w-3.5" /> Aspect ratio
          </Label>
          <div className="grid grid-cols-3 gap-2">
            {aspects.map((a) => (
              <button
                key={a.v}
                onClick={() => set("aspect", a.v)}
                className={`py-2.5 rounded-lg text-xs border flex flex-col items-center gap-1.5 transition-all ${
                  value.aspect === a.v
                    ? "border-primary/60 bg-primary/15 text-foreground"
                    : "border-border/60 bg-secondary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className={`${a.w} ${a.h} rounded-sm border border-current opacity-80`} />
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 space-y-3 border-t border-border/60">
          <div className="flex items-center justify-between">
            <Label className="text-sm flex items-center gap-2">
              <Captions className="h-4 w-4 text-muted-foreground" /> Subtitles
            </Label>
            <Switch checked={value.subtitles} onCheckedChange={(v) => set("subtitles", v)} />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm flex items-center gap-2">
              <AudioLines className="h-4 w-4 text-muted-foreground" /> Voiceover
            </Label>
            <Switch checked={value.voiceover} onCheckedChange={(v) => set("voiceover", v)} />
          </div>
        </div>
      </div>
    </div>
  );
}