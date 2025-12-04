"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const badges = [
  {
    id: 1,
    name: "Première Victoire",
    description: "Complète ton premier défi",
    icon: "🎯",
    unlocked: true,
    rarity: "Commun",
  },
  {
    id: 2,
    name: "Série de feu",
    description: "7 jours consécutifs d'activité",
    icon: "🔥",
    unlocked: true,
    rarity: "Rare",
  },
  {
    id: 3,
    name: "Éco-Warrior",
    description: "Atteins 1000 points",
    icon: "⚡",
    unlocked: true,
    rarity: "Épique",
  },
  {
    id: 4,
    name: "Champion du Climat",
    description: "Top 100 du classement",
    icon: "🏆",
    unlocked: false,
    rarity: "Légendaire",
  },
  {
    id: 5,
    name: "Leader Communautaire",
    description: "Organise 5 actions collectives",
    icon: "👥",
    unlocked: false,
    rarity: "Épique",
  },
  {
    id: 6,
    name: "Zéro Déchet",
    description: "30 jours sans plastique",
    icon: "♻️",
    unlocked: false,
    rarity: "Rare",
  },
]

const rarityColors = {
  Commun: "text-slate-500 border-slate-500/30",
  Rare: "text-blue-500 border-blue-500/30",
  Épique: "text-purple-500 border-purple-500/30",
  Légendaire: "text-amber-500 border-amber-500/30",
}

const rarityGlow = {
  Commun: "shadow-slate-500/20",
  Rare: "shadow-blue-500/30",
  Épique: "shadow-purple-500/40",
  Légendaire: "shadow-amber-500/50",
}

export function BadgesShowcase() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-primary/30 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Accomplissements
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-balance"
          >
            Collectionne tes badges
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            Débloque des récompenses uniques en progressant dans ton parcours
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: badge.unlocked ? 1.05 : 1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              onHoverStart={() => setHoveredBadge(badge.id)}
              onHoverEnd={() => setHoveredBadge(null)}
            >
              <Card
                className={`p-6 space-y-4 transition-all duration-300 relative overflow-hidden ${
                  badge.unlocked
                    ? `hover:shadow-2xl ${rarityGlow[badge.rarity as keyof typeof rarityGlow]}`
                    : "opacity-60"
                }`}
              >
                {badge.unlocked && badge.rarity === "Légendaire" && hoveredBadge === badge.id && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                          left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 30}%`,
                          top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 30}%`,
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                )}

                <div className="flex items-start justify-between">
                  <motion.div
                    className={`text-5xl ${!badge.unlocked ? "filter grayscale" : ""}`}
                    animate={
                      badge.unlocked && hoveredBadge === badge.id
                        ? {
                            rotate: [0, -10, 10, -10, 10, 0],
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {badge.unlocked ? badge.icon : "🔒"}
                  </motion.div>
                  {!badge.unlocked && (
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Badge
                      variant="outline"
                      className={`${rarityColors[badge.rarity as keyof typeof rarityColors]} font-semibold`}
                    >
                      {badge.rarity}
                    </Badge>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
