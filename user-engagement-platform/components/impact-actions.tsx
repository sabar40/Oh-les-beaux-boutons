"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, FileSignature, Gift, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const actions = [
  {
    id: 1,
    type: "Pétition",
    title: "Sauvegarde de la forêt amazonienne",
    description: "Signe pour protéger 10 000 hectares de forêt",
    icon: FileSignature,
    progress: 87,
    goal: "100K signatures",
    current: "87K",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    type: "Don",
    title: "Plantation d'arbres au Sahel",
    description: "Contribue à la reforestation en Afrique",
    icon: Gift,
    progress: 64,
    goal: "50K€",
    current: "32K€",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    type: "Événement",
    title: "Clean-up Day Paris",
    description: "Rejoins 500 volontaires le 15 décembre",
    icon: Users,
    progress: 42,
    goal: "500 places",
    current: "210 inscrits",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
]

export function ImpactActions() {
  return (
    <section id="impact" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-accent/30 text-accent">
              <Heart className="w-3 h-3 mr-1" />
              Agir maintenant
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-balance"
          >
            Passe à l'action concrète
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            Signe, donne, participe : chaque action compte pour le changement
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {actions.map((action, index) => {
            const IconComponent = action.icon

            return (
              <motion.div
                key={action.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="p-6 space-y-4 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <motion.div
                      className={`p-3 rounded-xl ${action.bgColor} w-fit`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className={`w-6 h-6 ${action.color}`} />
                    </motion.div>

                    <Badge variant="secondary">{action.type}</Badge>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-balance">{action.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{action.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Progress value={action.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{action.current}</span>
                      <span className="font-semibold">{action.goal}</span>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full group">
                      {action.type === "Pétition" && "Signer"}
                      {action.type === "Don" && "Contribuer"}
                      {action.type === "Événement" && "M'inscrire"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="text-center space-y-6 relative z-10">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-balance">Prêt à faire la différence ?</h3>
                <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                  Rejoins une communauté de +12 500 personnes qui agissent quotidiennement pour un avenir plus durable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 group shadow-lg shadow-accent/20"
                  >
                    Créer mon compte
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-2">
                    En savoir plus
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6 text-sm text-muted-foreground">
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Gratuit à vie</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>Aucune pub</span>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
