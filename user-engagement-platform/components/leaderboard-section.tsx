"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp, Crown } from "lucide-react"
import { motion } from "framer-motion"

const leaderboard = [
  {
    rank: 1,
    name: "Sophie Martin",
    points: 8450,
    streak: 45,
    badge: "Championne",
    avatar: "SM",
    trend: "up",
  },
  {
    rank: 2,
    name: "Lucas Dubois",
    points: 7920,
    streak: 32,
    badge: "Expert",
    avatar: "LD",
    trend: "up",
  },
  {
    rank: 3,
    name: "Emma Bernard",
    points: 7350,
    streak: 28,
    badge: "Activiste",
    avatar: "EB",
    trend: "down",
  },
  {
    rank: 4,
    name: "Thomas Petit",
    points: 6890,
    streak: 21,
    badge: "Engagé",
    avatar: "TP",
    trend: "same",
  },
  {
    rank: 5,
    name: "Léa Moreau",
    points: 6540,
    streak: 19,
    badge: "Motivé",
    avatar: "LM",
    trend: "up",
  },
]

export function LeaderboardSection() {
  return (
    <section id="classement" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-accent/30 text-accent">
              <Trophy className="w-3 h-3 mr-1" />
              Compétition amicale
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-balance"
          >
            Classement communautaire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            Les éco-warriors les plus actifs de la semaine
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto overflow-hidden shadow-lg">
            <div className="divide-y divide-border">
              {leaderboard.map((user, index) => {
                const getRankIcon = () => {
                  if (user.rank === 1) return <Trophy className="w-5 h-5 text-amber-500" />
                  if (user.rank === 2) return <Medal className="w-5 h-5 text-slate-400" />
                  if (user.rank === 3) return <Award className="w-5 h-5 text-amber-700" />
                  return null
                }

                return (
                  <motion.div
                    key={user.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      backgroundColor: "rgba(var(--muted), 0.5)",
                      transition: { duration: 0.2 },
                    }}
                    className={`p-5 flex items-center gap-4 relative overflow-hidden ${
                      index < 3 ? "bg-primary/5" : ""
                    }`}
                  >
                    {user.rank === 1 && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                      />
                    )}

                    <div className="flex items-center gap-3 min-w-[60px] relative z-10">
                      {getRankIcon() || (
                        <span className="text-xl font-bold text-muted-foreground w-5 text-center">{user.rank}</span>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Avatar className="w-12 h-12 border-2 border-primary/20 relative z-10">
                        {user.rank === 1 && (
                          <motion.div
                            className="absolute -top-2 -right-2 z-20"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Crown className="w-5 h-5 text-amber-500" />
                          </motion.div>
                        )}
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>

                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold truncate">{user.name}</p>
                        <Badge variant="secondary" className="text-xs">
                          {user.badge}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{user.points.toLocaleString()} pts</span>
                        <span>•</span>
                        <motion.span
                          className="flex items-center gap-1"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🔥 {user.streak}j
                        </motion.span>
                      </div>
                    </div>

                    <motion.div className="flex items-center relative z-10" whileHover={{ scale: 1.2 }}>
                      {user.trend === "up" && <TrendingUp className="w-5 h-5 text-primary" />}
                      {user.trend === "down" && <TrendingUp className="w-5 h-5 text-destructive rotate-180" />}
                      {user.trend === "same" && <span className="text-muted-foreground">—</span>}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
