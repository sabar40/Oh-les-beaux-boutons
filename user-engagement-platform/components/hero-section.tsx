"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-4 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-4xl text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge animé */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">+12 500 éco-warriors actifs</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Transforme tes actions en{" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0%", "200%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              impact réel
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed"
          >
            Rejoins une communauté engagée, relève des défis quotidiens et deviens acteur du changement. Chaque geste
            compte.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-lg group shadow-lg shadow-accent/20"
              >
                Commencer l'aventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-2">
                Découvrir l'impact
              </Button>
            </motion.div>
          </motion.div>

          {/* Statistiques rapides */}
          <motion.div variants={item} className="grid grid-cols-3 gap-6 md:gap-12 pt-12 max-w-2xl mx-auto">
            <motion.div className="space-y-1" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter from={0} to={2400000} duration={2.5} suffix="M" />
              </div>
              <div className="text-sm text-muted-foreground">Actions réalisées</div>
            </motion.div>
            <motion.div className="space-y-1" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-3xl md:text-4xl font-bold text-accent">
                <AnimatedCounter from={0} to={89} duration={2} suffix="K" />
              </div>
              <div className="text-sm text-muted-foreground">Arbres plantés</div>
            </motion.div>
            <motion.div className="space-y-1" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter from={0} to={156} duration={1.5} />
              </div>
              <div className="text-sm text-muted-foreground">Pays participants</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Décorations animées */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}
