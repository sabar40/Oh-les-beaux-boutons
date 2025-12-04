"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Award, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  {
    label: "Série actuelle",
    value: 7,
    suffix: " jours",
    change: "+2 cette semaine",
    icon: Zap,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    label: "Points totaux",
    value: 2450,
    suffix: "",
    change: "+380 ce mois",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Défis réussis",
    value: 45,
    suffix: "/50",
    change: "90% de réussite",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Classement",
    value: 234,
    suffix: "",
    change: "+12 positions",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
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
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />

                  <div className="flex items-center justify-between relative z-10">
                    <motion.div
                      className={`p-3 rounded-xl ${stat.bgColor}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </motion.div>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">
                      {index === 3 ? "#" : ""}
                      <AnimatedCounter from={0} to={stat.value} duration={2} />
                      {stat.suffix}
                    </p>
                    <motion.p
                      className="text-xs text-primary"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {stat.change}
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
