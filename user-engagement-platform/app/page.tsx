import { HeroSection } from "@/components/hero-section"
import { DailyChallenges } from "@/components/daily-challenges"
import { StatsSection } from "@/components/stats-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { BadgesShowcase } from "@/components/badges-showcase"
import { ImpactActions } from "@/components/impact-actions"
import { Header } from "@/components/header"
import { FloatingActionButton } from "@/components/floating-action-button"
import { FloatingAchievement } from "@/components/floating-achievement"
import { StreakTracker } from "@/components/streak-tracker"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DailyChallenges />
      <StatsSection />

      <section className="py-12 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <StreakTracker />
          </div>
        </div>
      </section>

      <LeaderboardSection />
      <BadgesShowcase />
      <ImpactActions />

      <FloatingActionButton />
      <FloatingAchievement />
    </main>
  )
}
