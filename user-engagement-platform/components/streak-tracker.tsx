"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { Card } from "@/components/ui/card"

const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]
const streakData = [true, true, true, true, true, false, false]

export function StreakTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="p-3 rounded-xl bg-accent/10"
            >
              <Flame className="w-6 h-6 text-accent" />
            </motion.div>
            <div>
              <h3 className="font-bold text-xl">Série de feu</h3>
              <p className="text-sm text-muted-foreground">Continue ton élan!</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-4xl font-bold text-accent"
          >
            5<span className="text-lg">j</span>
          </motion.div>
        </div>

        <div className="flex items-center justify-between gap-2">
          {daysOfWeek.map((day, index) => {
            const isCompleted = streakData[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                whileHover={{ scale: 1.2 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs text-muted-foreground font-medium">{day}</span>
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                  animate={
                    isCompleted
                      ? {
                          boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.4)", "0 0 0 10px rgba(16, 185, 129, 0)"],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  {isCompleted ? "✓" : ""}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-2 text-center">
          <p className="text-sm text-muted-foreground">
            Plus que <span className="font-bold text-primary">2 jours</span> pour battre ton record!
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
