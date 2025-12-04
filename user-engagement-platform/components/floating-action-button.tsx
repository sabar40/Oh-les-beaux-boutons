"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Target, Users, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const actions = [
  { icon: Target, label: "Nouveau défi", color: "bg-primary" },
  { icon: Users, label: "Inviter des amis", color: "bg-blue-500" },
  { icon: Sparkles, label: "Voir badges", color: "bg-purple-500" },
]

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 20, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: -5 }}
                className="flex items-center gap-3"
              >
                <motion.span
                  className="bg-background border border-border px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {action.label}
                </motion.span>
                <Button size="icon" className={`${action.color} text-white shadow-lg h-12 w-12 rounded-full`}>
                  <action.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-primary text-white shadow-2xl shadow-accent/40 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen ? "0 20px 60px rgba(249, 115, 22, 0.4)" : "0 20px 60px rgba(249, 115, 22, 0.2)",
        }}
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Pulse effect */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  )
}
