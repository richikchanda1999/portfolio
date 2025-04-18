"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  GitBranch,
  Cloud,
  PenToolIcon as Tool,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: <Code className="h-6 w-6 text-terminal-blue" />,
      items: ["JavaScript (ES6+)", "TypeScript", "Java"],
    },
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-terminal-green" />,
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Chakra UI"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-terminal-yellow" />,
      items: ["Node.js", "Serverless Framework", "GraphQL", "Hasura"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-terminal-purple" />,
      items: ["PostgreSQL", "DynamoDB"],
    },
    {
      category: "DevOps",
      icon: <GitBranch className="h-6 w-6 text-accent" />,
      items: ["Docker", "Jenkins", "CircleCI", "Git"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6 text-destructive" />,
      items: [
        "AWS Lambda",
        "CloudWatch",
        "Elastic Beanstalk",
        "Simple Email Service",
      ],
    },
    {
      category: "Tools & Integration",
      icon: <Tool className="h-6 w-6 text-terminal-green" />,
      items: ["Telegram Bots", "Zapier"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-[10%] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-4">
          <Code className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">Technical Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          I've worked with a variety of technologies across frontend, backend,
          cloud infrastructure, and blockchain to build scalable and efficient
          applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-card border border-border/40 rounded-lg p-6 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="flex items-center mb-4"
            >
              {skill.icon}
              <h3 className="font-bold ml-2">{skill.category}</h3>
            </motion.div>
            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + itemIndex * 0.05 + 0.3,
                  }}
                  className="flex items-center text-muted-foreground"
                >
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
