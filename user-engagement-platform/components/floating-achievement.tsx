"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Trophy, X } from "lucide-react"
import { useEffect, useState } from "react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  points: number
}

let achievementQueue: Achievement[] = []
let notifyFn: ((achievement: Achievement) => void) | null = null

export function showAchievement(achievement: Achievement) {
  achievementQueue.push(achievement)
  if (notifyFn) {
    notifyFn(achievement)
  }
}

export function FloatingAchievement() {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    notifyFn = (achievement: Achievement) => {
      setAchievements((prev) => [...prev, achievement])
      setTimeout(() => {
        setAchievements((prev) => prev.filter((a) => a.id !== achievement.id))
      }, 5000)
    }

    // Process queued achievements
    achievementQueue.forEach((a) => notifyFn?.(a))
    achievementQueue = []

    return () => {
      notifyFn = null
    }
  }, [])

  const removeAchievement = (id: string) => {
    setAchievements((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 max-w-sm">
      <AnimatePresence>
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: 400, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-lg p-5 rounded-2xl shadow-2xl border-2 border-primary/20 relative overflow-hidden"
          >
            {/* Effet de brillance animé */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            />

            <button
              onClick={() => removeAchievement(achievement.id)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{ duration: 0.6 }}
                className="text-5xl"
              >
                {achievement.icon}
              </motion.div>
              <div className="flex-1 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wide">Nouveau badge</span>
                </div>
                <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                <p className="text-sm text-white/90 mb-2">{achievement.description}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur">
                  <span className="font-bold">+{achievement.points}</span>
                  <span className="text-xs">points</span>
                </div>
              </div>
            </div>

            {/* Particules célébration */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + Math.cos((i * 45 * Math.PI) / 180) * 100}%`,
                  y: `${50 + Math.sin((i * 45 * Math.PI) / 180) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
