"use client"

import { PROJECTS } from "../../constants"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, Code } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-[10%] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-4 sakura-border">
          <Folder className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">Featured Work</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 sakura-text-glow">Projects</h2>
        <p className="text-muted-foreground max-w-2xl sakura-highlight">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-card border border-border/40 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 sakura-card"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="h-full w-full">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent/10 z-10 flex items-center justify-center"
              >
                <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  <Code className="h-6 w-6 text-accent" />
                </div>
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 sakura-text-glow">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + index * 0.05 }}
                    whileHover={{
                      backgroundColor: "rgba(var(--sakura-pink), 0.2)",
                      color: "rgb(var(--sakura-pink))",
                      transition: { duration: 0.2 },
                    }}
                    className="text-xs px-2 py-1 bg-secondary/50 text-foreground rounded-full font-mono"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    aria-label="View GitHub repository"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    aria-label="View live project"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

