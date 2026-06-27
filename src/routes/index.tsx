import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Dumbbell,
  Utensils,
  Moon,
  Check,
  Leaf,
  BedDouble,
  Droplet,
  PersonStanding,
  Home,
  ClipboardList,
  TrendingUp,
  User,
  Plus,
  Signal,
  Wifi,
  BatteryFull,
  Move,
  SignalHigh,
  Ban,
  Scan,
} from "lucide-react";

import aiFace from "@/assets/ai-face.png";
import muscleChest from "@/assets/muscle-chest.jpg";
import muscleBack from "@/assets/muscle-back.jpg";
import muscleShoulders from "@/assets/muscle-shoulders.jpg";
import mealBreakfast from "@/assets/meal-breakfast.jpg";
import mealLunch from "@/assets/meal-lunch.jpg";
import mealDinner from "@/assets/meal-dinner.jpg";
import mealSnack from "@/assets/meal-snack.jpg";
import exerciseChinTuck from "@/assets/exercise-chin-tuck.jpg";
import exerciseNeckMobility from "@/assets/exercise-neck-mobility.jpg";
import exerciseJaw from "@/assets/exercise-jaw.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Plan — FaceFit AI" },
      { name: "description", content: "Your personalized AI-generated fitness, nutrition and recovery plan." },
      { property: "og:title", content: "My Plan — FaceFit AI" },
      { property: "og:description", content: "Your personalized AI-generated fitness, nutrition and recovery plan." },
    ],
  }),
  component: MyPlan,
});

type TabKey = "workout" | "nutrition" | "recovery";

function MyPlan() {
  const [tab, setTab] = useState<TabKey>("workout");

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
        <header className="px-5 pt-4 pb-5 flex items-center justify-between">
          <button
            aria-label="Back"
            className="w-11 h-11 rounded-full bg-surface flex items-center justify-center border border-border-soft active:scale-95 transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="text-center">
            <h1 className="text-[22px] font-semibold leading-tight">My Plan</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Your personalized plan</p>
          </div>
          <button
            aria-label="Calendar"
            className="w-11 h-11 rounded-full bg-surface flex items-center justify-center border border-primary/40 active:scale-95 transition"
          >
            <CalendarDays className="w-5 h-5 text-primary" />
          </button>
        </header>

        {/* AI Plan Hero */}
        <section className="px-4">
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-[oklch(0.18_0.04_160)] to-[oklch(0.13_0.015_160)] p-5">
            <img
              src={aiFace}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
            />
            <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
            <div className="relative max-w-[62%]">
              <h2 className="text-[22px] font-semibold leading-tight">Your AI Plan</h2>
              <p className="text-[13px] text-muted-foreground mt-1.5 leading-snug">
                A personalized plan created by FaceFit AI just for you.
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">20%</span>
                <span className="text-xs text-muted-foreground">Plan progress</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-surface-2 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: "20%", boxShadow: "0 0 12px var(--primary)" }}
                />
              </div>
              <p className="mt-3 text-[12px] text-primary/90">Keep going, you're doing great!</p>
            </div>
          </div>
        </section>

        {/* Face & Neck Routine */}
        <section className="px-4 mt-5">
          <div className="rounded-3xl bg-card border border-border-soft p-4">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary-soft/40 border border-primary/30 flex items-center justify-center shrink-0">
                <Scan className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[18px] leading-tight">Face &amp; Neck Routine</h4>
                <p className="text-xs text-muted-foreground mt-1">8 minutes • Daily</p>
                <p className="text-[13px] text-muted-foreground mt-2 leading-snug">
                  Improve posture, reduce tension, and support a healthier facial appearance.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <FNPill icon={<Move className="w-3.5 h-3.5" />} label="6 exercises" />
              <FNPill icon={<SignalHigh className="w-3.5 h-3.5" />} label="Beginner" />
              <FNPill icon={<Ban className="w-3.5 h-3.5" />} label="No equipment" />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              <FNExercise img={exerciseChinTuck} name="Chin Tuck" time="45s" />
              <FNExercise img={exerciseNeckMobility} name="Neck Mobility" time="45s" />
              <FNExercise img={exerciseJaw} name="Jaw Relaxation" time="45s" />
              <div className="rounded-2xl bg-surface/60 border border-border-soft flex flex-col items-center justify-center py-3">
                <span className="text-primary font-semibold text-sm">+3</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">more</span>
              </div>
            </div>

            <PrimaryCta label="Start Routine" />
          </div>
        </section>



        {/* Today's Plan */}
        <div className="px-5 pt-6 pb-3 flex items-center justify-between">
          <h3 className="text-[17px] font-semibold">Today's Plan</h3>
          <span className="text-xs text-muted-foreground">May 19, 2025</span>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="bg-surface rounded-full p-1.5 flex items-center border border-border-soft">
            <TabButton active={tab === "workout"} onClick={() => setTab("workout")} icon={<Dumbbell className="w-4 h-4" />} label="Workout" />
            <TabButton active={tab === "nutrition"} onClick={() => setTab("nutrition")} icon={<Utensils className="w-4 h-4" />} label="Nutrition" />
            <TabButton active={tab === "recovery"} onClick={() => setTab("recovery")} icon={<Moon className="w-4 h-4" />} label="Recovery" />
          </div>
        </div>

        {/* Workout Card */}
        <section className="px-4 mt-5">
          <div className="rounded-3xl bg-card border border-border-soft p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-soft/40 border border-primary/30 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[16px] leading-tight">Upper Body Strength</h4>
                <p className="text-xs text-muted-foreground mt-0.5">45 min • 320 kcal</p>
              </div>
              <span className="px-3 py-1 rounded-full border border-primary/40 text-primary text-xs font-medium">
                In Progress
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-surface/60 border border-border-soft divide-y divide-[color:var(--border-soft)]">
              <ExerciseRow img={muscleChest} name="Push Ups" detail="3 sets • 12 reps" status="done" />
              <ExerciseRow img={muscleBack} name="Pull Ups" detail="3 sets • 10 reps" status="progress" />
              <ExerciseRow img={muscleShoulders} name="Shoulder Press" detail="3 sets • 12 reps" status="todo" />
            </div>

            <PrimaryCta label="Continue Workout" />
          </div>
        </section>

        {/* Nutrition Card */}
        <section className="px-4 mt-5">
          <div className="rounded-3xl bg-card border border-border-soft p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-soft/40 border border-primary/30 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[16px] leading-tight">Nutrition Plan</h4>
                <p className="text-xs text-muted-foreground mt-0.5">2000 kcal • High Protein</p>
              </div>
              <span className="px-3 py-1 rounded-full border border-primary/40 text-primary text-xs font-medium">
                To Follow
              </span>
            </div>

            <div className="mt-4 divide-y divide-[color:var(--border-soft)]">
              <MealRow img={mealBreakfast} name="Breakfast" detail="Oatmeal with fruits & protein" kcal="520 kcal" />
              <MealRow img={mealLunch} name="Lunch" detail="Chicken, rice and vegetables" kcal="680 kcal" />
              <MealRow img={mealDinner} name="Dinner" detail="Salmon with vegetables" kcal="540 kcal" />
              <MealRow img={mealSnack} name="Snack" detail="Greek yogurt and almonds" kcal="260 kcal" />
            </div>

            <button className="mt-4 w-full rounded-full border border-primary/50 bg-transparent py-3.5 text-primary font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.99] transition">
              View Nutrition Plan
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Recovery Card */}
        <section className="px-4 mt-5">
          <div className="rounded-3xl bg-card border border-border-soft p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-soft/40 border border-primary/30 flex items-center justify-center">
                <Moon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[16px] leading-tight">Recovery & Wellness</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Take care of your body today.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-primary" />
            </div>

            <div className="mt-4 grid grid-cols-3 rounded-2xl bg-surface/60 border border-border-soft overflow-hidden">
              <RecoveryStat icon={<BedDouble className="w-4 h-4 text-primary" />} label="Sleep goal" value="8 hours" sub="Before 11:30 PM" divider />
              <RecoveryStat icon={<Droplet className="w-4 h-4 text-primary" />} label="Hydration" value="2.2 L" sub="Completed 27%" divider />
              <RecoveryStat icon={<PersonStanding className="w-4 h-4 text-primary" />} label="Mobility" value="8 min" sub="Neck & posture" />
            </div>

            <PrimaryCta label="Start Recovery Routine" />
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-4 pb-2 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent">
          <div className="relative h-[72px] rounded-3xl bg-surface border border-border-soft flex items-center justify-around px-2">
            <NavItem icon={<Home className="w-5 h-5" />} label="Home" />
            <NavItem icon={<ClipboardList className="w-5 h-5" />} label="My Plan" active />
            <div className="w-14" />
            <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Progress" />
            <NavItem icon={<User className="w-5 h-5" />} label="Profile" />

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

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-primary-soft/50 text-primary border border-primary/40"
          : "text-muted-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ExerciseRow({
  img,
  name,
  detail,
  status,
}: {
  img: string;
  name: string;
  detail: string;
  status: "done" | "progress" | "todo";
}) {
  return (
    <div className="flex items-center gap-3 p-3">
      <img src={img} alt="" loading="lazy" width={64} height={64} className="w-14 h-14 rounded-xl object-cover" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[15px] leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
      </div>
      {status === "done" && (
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
        </div>
      )}
      {status === "progress" && (
        <div className="w-7 h-7 rounded-full border-2 border-primary border-r-transparent" />
      )}
      {status === "todo" && (
        <div className="w-7 h-7 rounded-full border-2 border-muted-foreground/40" />
      )}
    </div>
  );
}

function MealRow({
  img,
  name,
  detail,
  kcal,
}: {
  img: string;
  name: string;
  detail: string;
  kcal: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 py-3 text-left active:bg-surface/40 transition">
      <img src={img} alt="" loading="lazy" width={56} height={56} className="w-12 h-12 rounded-xl object-cover" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[15px] leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{detail}</p>
      </div>
      <span className="text-xs text-muted-foreground">{kcal}</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>
  );
}

function RecoveryStat({
  icon,
  label,
  value,
  sub,
  divider,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  divider?: boolean;
}) {
  return (
    <div className={`p-3 ${divider ? "border-r border-border-soft" : ""}`}>
      <div className="flex items-center gap-1.5">
        <div className="w-7 h-7 rounded-full bg-primary-soft/40 border border-primary/25 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-[11px] text-muted-foreground">{label}</span>
      </div>
      <p className="mt-2 text-primary font-semibold text-[15px]">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}

function PrimaryCta({ label }: { label: string }) {
  return (
    <button
      className="mt-4 w-full rounded-full bg-primary text-primary-foreground py-4 font-semibold text-sm flex items-center justify-between px-6 active:scale-[0.99] transition"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      <span className="w-5" />
      <span>{label}</span>
      <ChevronRight className="w-5 h-5" />
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

function FNPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-soft bg-surface/60 text-[12px] text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}

function FNExercise({ img, name, time }: { img: string; name: string; time: string }) {
  return (
    <div className="rounded-2xl bg-surface/60 border border-border-soft p-2 flex flex-col items-center">
      <img src={img} alt="" loading="lazy" width={120} height={120} className="w-full aspect-square rounded-xl object-cover" />
      <p className="mt-1.5 text-[11px] font-medium text-center leading-tight line-clamp-1">{name}</p>
      <p className="text-[10px] text-muted-foreground">{time}</p>
    </div>
  );
}

