"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, Droplet, Bike, Users, CheckCircle2, Clock, Coins, Sparkles } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ConfettiButton } from "@/components/confetti-button"
import { toast } from "sonner"

const challenges = [
  {
    id: 1,
    title: "Mode éco-transport",
    description: "Utilise un moyen de transport écologique aujourd'hui",
    icon: Bike,
    points: 50,
    category: "Transport",
    difficulty: "Facile",
    progress: 0,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    title: "Zéro plastique",
    description: "Passe une journée sans utiliser de plastique jetable",
    icon: Leaf,
    points: 75,
    category: "Consommation",
    difficulty: "Moyen",
    progress: 60,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    title: "Économie d'eau",
    description: "Réduis ta consommation d'eau de 20% aujourd'hui",
    icon: Droplet,
    points: 40,
    category: "Ressources",
    difficulty: "Facile",
    progress: 100,
    completed: true,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 4,
    title: "Action collective",
    description: "Organise ou participe à une action de nettoyage",
    icon: Users,
    points: 150,
    category: "Communauté",
    difficulty: "Difficile",
    progress: 0,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

export function DailyChallenges() {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([3])
  const [totalPoints, setTotalPoints] = useState(40)

  const handleCompleteChallenge = (id: number, points: number) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges([...completedChallenges, id])
      setTotalPoints(totalPoints + points)

      toast.success(`Défi terminé! +${points} points`, {
        description: "Continue comme ça, champion!",
        icon: <Sparkles className="w-4 h-4" />,
      })
    }
  }

  return (
    <section id="defis" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="border-primary/30 text-primary">
              <Clock className="w-3 h-3 mr-1" />
              Défis du jour
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-balance"
          >
            Tes missions quotidiennes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            Complète des défis, gagne des points et grimpe dans le classement!
          </motion.p>

          {/* Points total */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20"
          >
            <Coins className="w-5 h-5 text-accent" />
            <span className="text-2xl font-bold text-accent">{totalPoints}</span>
            <span className="text-sm text-muted-foreground">points aujourd'hui</span>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
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
          <AnimatePresence>
            {challenges.map((challenge, index) => {
              const isCompleted = completedChallenges.includes(challenge.id)
              const IconComponent = challenge.icon

              return (
                <motion.div
                  key={challenge.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  layout
                >
                  <Card
                    className={`p-6 space-y-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                      isCompleted ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    {isCompleted && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </motion.div>
                    )}

                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <motion.div
                          className={`p-3 rounded-xl ${challenge.bgColor}`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className={`w-6 h-6 ${challenge.color}`} />
                        </motion.div>
                        <div className="space-y-1 flex-1">
                          <h3 className="font-semibold text-lg pr-8">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground">{challenge.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="secondary" className="font-normal">
                          {challenge.category}
                        </Badge>
                        <motion.div
                          className="flex items-center gap-1 font-semibold text-accent"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Coins className="w-4 h-4" />
                          {challenge.points} pts
                        </motion.div>
                      </div>

                      {!isCompleted && challenge.progress > 0 && (
                        <motion.div className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <Progress value={challenge.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">Progression : {challenge.progress}%</p>
                        </motion.div>
                      )}

                      {isCompleted ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="w-full py-2 text-center font-semibold text-primary flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Terminé
                        </motion.div>
                      ) : (
                        <ConfettiButton
                          className="w-full"
                          onClick={() => handleCompleteChallenge(challenge.id, challenge.points)}
                        >
                          Valider le défi
                        </ConfettiButton>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
