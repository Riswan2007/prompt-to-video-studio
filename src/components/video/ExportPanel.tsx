import { useState } from "react";
import { Download, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

interface Props {
  ready: boolean;
}

export function ExportPanel({ ready }: Props) {
  const [progress, setProgress] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [done, setDone] = useState(false);

  const startExport = () => {
    if (!ready) {
      toast.error("Generate a video first.");
      return;
    }
    setExporting(true);
    setDone(false);
    setProgress(0);
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setExporting(false);
          setDone(true);
          toast.success("Export complete — MP4 ready to download.");
          return 100;
        }
        return p + 5;
      });
    }, 120);
  };

  return (
    <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
      <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Export
      </h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          onClick={startExport}
          disabled={exporting}
          className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
        >
          {done ? <Check className="h-4 w-4 mr-2" /> : <Download className="h-4 w-4 mr-2" />}
          {done ? "Downloaded MP4" : exporting ? `Exporting ${progress}%` : "Download MP4"}
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              onClick={() => toast("Share link copied (demo)")}
              className="border-border/60 bg-secondary/40"
            >
              <Share2 className="h-4 w-4 mr-2" /> Share
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy a shareable link</TooltipContent>
        </Tooltip>
      </div>
      {(exporting || done) && (
        <div className="mt-3">
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1.5 font-mono">
            {done ? "100% — render finished" : `${progress}% — encoding 1080p`}
          </p>
        </div>
      )}
    </div>
  );
}