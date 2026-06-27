import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  Camera,
  Flame,
  Dumbbell,
  CalendarCheck,
  Zap,
  Crown,
  User,
  Target,
  BarChart3,
  ClipboardList,
  UtensilsCrossed,
  Ruler,
  Image as ImageIcon,
  Medal,
  ShieldCheck,
  HelpCircle,
  LogOut,
  Home,
  ClipboardList as PlanIcon,
  TrendingUp,
  User as UserTab,
  Plus,
  Signal,
  Wifi,
  BatteryFull,
  Quote,
} from "lucide-react";

import avatar from "@/assets/profile-avatar.jpg";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — FaceFit AI" },
      { name: "description", content: "Manage your FaceFit AI account, preferences, and personal fitness settings." },
      { property: "og:title", content: "Profile — FaceFit AI" },
      { property: "og:description", content: "Manage your FaceFit AI account, preferences, and personal fitness settings." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div className="min-h-screen w-full bg-background flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen relative pb-36">
        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 text-foreground text-[15px] font-semibold">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 opacity-90">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <BatteryFull className="w-5 h-5" />
          </div>
        </div>

        {/* Header */}
        <header className="px-5 pt-4 pb-5 relative flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[22px] font-semibold leading-tight">Profile</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Manage your account and preferences</p>
          </div>
          <button
            aria-label="Notifications"
            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface flex items-center justify-center border border-border-soft active:scale-95 transition"
          >
            <Bell className="w-5 h-5 text-primary" />
          </button>
        </header>

        {/* Profile summary card */}
        <section className="px-4">
          <div className="rounded-3xl bg-card border border-border-soft overflow-hidden">
            <div className="p-4 flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={avatar}
                  alt="Yassine El Amrani"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-[84px] h-[84px] rounded-full object-cover border border-border-soft"
                />
                <button
                  aria-label="Change photo"
                  className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-card active:scale-95 transition"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-[18px] leading-tight truncate">Yassine El Amrani</h2>
                  <span className="px-2 py-0.5 rounded-full border border-primary/50 text-primary text-[11px] font-medium">
                    Pro
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">FaceFit Member since Apr 2025</p>
                <p className="text-[12px] text-muted-foreground/90 italic mt-2 flex items-center gap-1">
                  Discipline today, strength tomorrow.
                  <Quote className="w-3 h-3 text-primary fill-primary shrink-0" />
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
            </div>

            <div className="border-t border-border-soft grid grid-cols-4 divide-x divide-[color:var(--border-soft)]">
              <Stat icon={<Flame className="w-4 h-4 text-primary" />} value="8,420" label="Calories Burned" />
              <Stat icon={<Dumbbell className="w-4 h-4 text-primary" />} value="18" label="Workouts" />
              <Stat icon={<CalendarCheck className="w-4 h-4 text-primary" />} value="12" label="Active Days" />
              <Stat icon={<Zap className="w-4 h-4 text-primary" />} value="7" label="Day Streak" />
            </div>
          </div>
        </section>

        {/* Upgrade card */}
        <section className="px-4 mt-4">
          <div
            className="rounded-3xl border border-primary/40 p-4 flex items-center gap-3 bg-gradient-to-br from-[oklch(0.2_0.06_150)] to-[oklch(0.13_0.02_160)]"
            style={{ boxShadow: "0 0 24px -12px var(--primary)" }}
          >
            <div className="w-12 h-12 rounded-full border border-primary/50 bg-primary-soft/30 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-primary font-semibold text-[15px] leading-tight">FaceFit Pro</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5 leading-snug">
                Unlock all premium features and accelerate your progress.
              </p>
            </div>
            <button className="shrink-0 bg-primary text-primary-foreground rounded-full px-3.5 py-2.5 text-xs font-semibold flex items-center gap-1 active:scale-95 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              Upgrade Now
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Account */}
        <SectionTitle>Account</SectionTitle>
        <GroupCard>
          <SettingRow icon={<User className="w-5 h-5 text-primary" />} title="Personal Information" subtitle="Update your name, email, height, weight, etc." />
          <SettingRow icon={<Target className="w-5 h-5 text-primary" />} title="Fitness Goals" subtitle="Lose weight • Build muscle • Improve health" />
          <SettingRow icon={<BarChart3 className="w-5 h-5 text-primary" />} title="Activity Level" subtitle="Moderate • 3–4 workouts per week" />
        </GroupCard>

        {/* Preferences */}
        <SectionTitle>Preferences</SectionTitle>
        <GroupCard>
          <SettingRow icon={<ClipboardList className="w-5 h-5 text-primary" />} title="Plan Preferences" subtitle="Workout days, equipment, focus areas" />
          <SettingRow icon={<UtensilsCrossed className="w-5 h-5 text-primary" />} title="Nutrition Preferences" subtitle="Diet type, allergies, meal timing" />
          <SettingRow icon={<Bell className="w-5 h-5 text-primary" />} title="Reminders" subtitle="Workout, hydration, meals, sleep" />
          <SettingRow icon={<Ruler className="w-5 h-5 text-primary" />} title="Units" subtitle="Metric (kg, cm) / Imperial (lb, ft)" />
        </GroupCard>

        {/* More */}
        <SectionTitle>More</SectionTitle>
        <GroupCard>
          <SettingRow icon={<ImageIcon className="w-5 h-5 text-primary" />} title="Progress Photos" subtitle="View and manage your progress photos" />
          <SettingRow icon={<Medal className="w-5 h-5 text-primary" />} title="Achievements" subtitle="See all your badges and milestones" />
          <SettingRow icon={<ShieldCheck className="w-5 h-5 text-primary" />} title="Privacy & Security" subtitle="Change password, data privacy" />
          <SettingRow icon={<HelpCircle className="w-5 h-5 text-primary" />} title="Help & Support" subtitle="FAQ, contact support, feedback" />
          <SettingRow
            icon={<LogOut className="w-5 h-5 text-[oklch(0.65_0.18_25)]" />}
            title="Log Out"
            subtitle="Sign out from your account"
            danger
          />
        </GroupCard>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-4 pb-2 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent">
          <div className="relative h-[72px] rounded-3xl bg-surface border border-border-soft flex items-center justify-around px-2">
            <NavItem icon={<Home className="w-5 h-5" />} label="Home" />
            <NavItem icon={<PlanIcon className="w-5 h-5" />} label="My Plan" />
            <div className="w-14" />
            <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Progress" />
            <NavItem icon={<UserTab className="w-5 h-5" />} label="Profile" active />

            <button
              aria-label="Add"
              className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-95 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Plus className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>
          <div className="mt-2 flex justify-center">
            <div className="h-[5px] w-32 rounded-full bg-foreground/90" />
          </div>
        </nav>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="py-3 px-2 flex flex-col items-center text-center">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-semibold text-[15px]">{value}</span>
      </div>
      <span className="text-[10.5px] text-muted-foreground mt-1 leading-tight">{label}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="px-5 pt-6 pb-3 text-[15px] font-semibold">{children}</h3>;
}

function GroupCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4">
      <div className="rounded-2xl bg-card border border-border-soft divide-y divide-[color:var(--border-soft)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function SettingRow({
  icon,
  title,
  subtitle,
  danger,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  danger?: boolean;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3.5 text-left active:bg-surface/60 transition">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-[14.5px] leading-tight ${danger ? "text-[oklch(0.65_0.18_25)]" : "text-foreground"}`}>
          {title}
        </p>
        <p className="text-[12px] text-muted-foreground mt-0.5 truncate">{subtitle}</p>
      </div>
      <ChevronRight className={`w-4 h-4 shrink-0 ${danger ? "text-[oklch(0.65_0.18_25)]" : "text-muted-foreground"}`} />
    </button>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button className={`flex flex-col items-center gap-1 flex-1 ${active ? "text-primary" : "text-muted-foreground"}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
