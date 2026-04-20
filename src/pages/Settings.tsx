import { PageShell } from "@/components/video/PageShell";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { User, Bell, KeyRound, CreditCard, Palette, Shield } from "lucide-react";

const Section = ({ icon: Icon, title, desc, children }: any) => (
  <div className="rounded-2xl glass p-5 shadow-elegant animate-fade-in">
    <div className="flex items-start gap-3 mb-4">
      <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 border border-primary/30 grid place-items-center">
        <Icon className="h-4 w-4 text-primary-glow" />
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const Row = ({ label, hint, children }: any) => (
  <div className="flex items-center justify-between gap-4 py-2 border-t border-border/40 first:border-t-0">
    <div>
      <p className="text-sm">{label}</p>
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
    {children}
  </div>
);

const Settings = () => {
  return (
    <PageShell title="Settings" subtitle="Manage your account, preferences, and integrations.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Section icon={User} title="Profile" desc="Your public identity inside AI Video Agent.">
          <Row label="Display name"><Input defaultValue="Alex Vega" className="w-48 h-9 bg-secondary/40" /></Row>
          <Row label="Email"><Input defaultValue="alex@studio.io" className="w-56 h-9 bg-secondary/40" /></Row>
          <Row label="Workspace"><Input defaultValue="Vega Studio" className="w-48 h-9 bg-secondary/40" /></Row>
        </Section>

        <Section icon={Palette} title="Default video preferences" desc="Used as defaults when starting new projects.">
          <Row label="Default style" hint="Cinematic, Documentary, Anime, Vlog…"><span className="text-xs text-muted-foreground">Cinematic</span></Row>
          <Row label="Default duration"><span className="text-xs text-muted-foreground">60 seconds</span></Row>
          <Row label="Default aspect ratio"><span className="text-xs text-muted-foreground">16:9</span></Row>
          <Row label="Auto-generate subtitles"><Switch defaultChecked /></Row>
        </Section>

        <Section icon={Bell} title="Notifications" desc="Decide when we should ping you.">
          <Row label="Render completed" hint="Email me when a video finishes rendering."><Switch defaultChecked /></Row>
          <Row label="Weekly digest"><Switch /></Row>
          <Row label="Product updates"><Switch defaultChecked /></Row>
        </Section>

        <Section icon={CreditCard} title="Billing" desc="Pro plan · renews May 18, 2026.">
          <Row label="Plan"><span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-glow border border-primary/30">Pro</span></Row>
          <Row label="Credits remaining" hint="320 / 500 renders this month"><span className="text-xs font-mono text-muted-foreground">320</span></Row>
          <Row label="Payment method"><span className="text-xs text-muted-foreground">Visa •••• 4242</span></Row>
        </Section>

        <Section icon={KeyRound} title="API keys" desc="Programmatic access for your apps.">
          <Row label="Production key" hint="sk_live_•••••••••••••a92f"><button className="text-xs px-3 py-1 rounded-md bg-secondary border border-border/60 hover:bg-secondary/80">Rotate</button></Row>
          <Row label="Development key" hint="sk_test_•••••••••••••11de"><button className="text-xs px-3 py-1 rounded-md bg-secondary border border-border/60 hover:bg-secondary/80">Rotate</button></Row>
        </Section>

        <Section icon={Shield} title="Security" desc="Protect your account.">
          <Row label="Two-factor authentication"><Switch defaultChecked /></Row>
          <Row label="Active sessions" hint="2 devices"><button className="text-xs px-3 py-1 rounded-md bg-secondary border border-border/60 hover:bg-secondary/80">Manage</button></Row>
          <Row label="Delete account"><button className="text-xs px-3 py-1 rounded-md bg-destructive/20 text-destructive border border-destructive/40 hover:bg-destructive/30">Delete</button></Row>
        </Section>
      </div>
    </PageShell>
  );
};

export default Settings;