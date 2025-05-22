import { ProjectCardProps } from "@/types";
import { Code, Server, Database, Layers, GitBranch, Cloud, PenToolIcon as Tool } from "lucide-react";

export const PROJECTS: Array<ProjectCardProps> = [
  {
    title: "Chatterbugs - Web app to complement physical cards",
    description: `
- Developed an end-to-end web application designed to seamlessly complement existing physical card decks sold by the client, enhancing user engagement and product experience.

- Enabled secure, user-specific access by integrating a unique 6-digit code linked to each purchased physical deck, unlocking tailored digital content upon verification and payment.

- Engineered direct content access through QR codes printed on each physical card, allowing users instant digital navigation to corresponding audio content within the web app.

- Led full-stack development lifecycle, including technology stack selection, database architecture, data storage solutions, and infrastructure hosting.

- Implemented frontend using **Next.js**, providing an intuitive, performant, and responsive user interface.

- Designed a robust authentication solution with **Firebase Authentication**, enhanced through custom server-side blocking functions to append additional JWT claims via **Firebase Cloud Functions**.

- Built a secure and scalable backend with **PostgreSQL**, exposing data through a **GraphQL API powered by Hasura**. Ensured secure access control by leveraging the custom JWT claims added while authentication.

- Developed specialized backend services using **Rust with Axum**, strategically chosen for superior performance and memory efficiency on resource-constrained environments (hosted effectively on a **1GB RAM DigitalOcean droplet**), significantly outperforming alternatives like TypeScript or Python.

- Extended server functionalities by implementing **Hasura Actions and Event triggers** directly within the Rust-based Axum server, enhancing operational efficiency and responsiveness.

- Automated deployment pipelines and database migrations using **GitHub Actions**, streamlining continuous integration and delivery processes for Hasura and Rust services.

Available at [https://chatterbugs.app](https://chatterbugs.app)
    `,
    imageUrl: "",
    links: [
      {
        url: "https://chatterbugs.app",
        text: "Web app link",
      },
    ],
  },
  //   {
  //     title: "Github Verified Lens",
  //     description: `
  // At [EthTokyo](https://ethglobal.com/events/tokyo), we worked on this intriguing project utilizing [MetaMask SDK](https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/guide/metamask-sdk-intro.html), [Lens protocol](https://www.lens.xyz/) and [Questbook's Reclaim SDK](https://reclaimprotocol.org/), and **built it in 36 hours**.

  // It enabled Github users to verify their contributions to public / private repositories, similar to Twitter's blue tick, and display them on their pseudonymous Lens Profiles. The project successfully **bagged 3 track prizes** from Lens Protocol, Metamask, and Polygon.

  // Once in production, this tool has the potential to **impact over 100,000** unique users on Lens.
  //     `,
  //     imageUrl: "https://example.com/image.jpg",
  //     links: [
  //       {
  //         url: "https://ethglobal.com/showcase/github-verified-lens-fytrg",
  //         text: "Website",
  //       },
  //       {
  //         url: "https://github.com/sriharshakaramchati/github-lens",
  //         text: "Source Code",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Attestation Paymaster",
  //     description: `
  // During [Superhack](https://ethglobal.com/events/superhack), I developed this project that leverages **Ethereum Attestation Service** and a **custom paymaster** to allow users to have their gas fees paid by an attester after being attested for specific schemas.

  // A practical application of this is for web3 organizations to cover the on-chain transaction costs of their employees by attesting them against a schema and deploying a custom paymaster, in lieu of ESOPs.
  //     `,
  //     imageUrl: "",
  //     links: [
  //       {
  //         url: "https://github.com/richikchanda1999/attestation-paymaster",
  //         text: "Source Code",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Lens Tag",
  //     description: `
  // This enhanced promotions on Lens by enabling hashtag differentiation and continuous token streams for promotions using **Superfluid**, as opposed to one-time payments.

  // The project demonstrates innovative tokenomics for social media engagement and creator monetization on decentralized platforms.
  //     `,
  //     imageUrl: "",
  //     links: [
  //       {
  //         url: "https://hashtag-rewarder.vercel.app/",
  //         text: "Website",
  //       },
  //       {
  //         url: "https://github.com/richikchanda1999/hashtag-rewarder",
  //         text: "Source Code",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Contextual Grant Finder",
  //     description: `
  // This proof-of-concept tool streamlines grant search by allowing users to describe their projects in natural language and receive tailored grant recommendations based on their input.

  // Built using [Langchain JS](https://js.langchain.com/docs/) with [Open AI Embeddings](https://platform.openai.com/docs/guides/embeddings) to provide intelligent, context-aware grant matching.
  //     `,
  //     imageUrl: "",
  //     links: [
  //       {
  //         url: "https://grant-finder-chi.vercel.app/",
  //         text: "Website",
  //       },
  //       {
  //         url: "https://github.com/richikchanda1999/grant-finder",
  //         text: "Source Code",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ZKSM - Zero Knowledge Speed Math",
  //     description: `
  // In this ZK-based game, users solve math problems involving two integers and either addition or multiplication. **Zero Knowledge** ensures answer verification without exposing frontend data.

  // Circuits were created in [Circom](https://docs.circom.io/) and exported as Solidity smart contracts using **Snark JS**.
  //     `,
  //     imageUrl: "",
  //     links: [
  //       {
  //         url: "https://zksm.vercel.app/",
  //         text: "Website",
  //       },
  //       {
  //         url: "https://github.com/richikchanda1999/zksm",
  //         text: "Source Code",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Play and Learn English - Brainy Bugs mobile app",
  //     description: `
  // ## Educational Mobile App

  // A mobile application built using **Flutter and Firebase**, aimed at **empowering specially-abled children** to learn English vocabulary through:

  // - Captivating illustrations that engage visual learners
  // - Interactive games reinforcing vocabulary retention
  // - Progressive difficulty levels for continuous learning

  // **Available on Google Play Store**
  //     `,
  //     imageUrl: "",
  //     links: [
  //       {
  //         url: "https://play.google.com/store/apps/details?id=com.game.brainybugs",
  //         text: "Play Store link",
  //       },
  //     ],
  //   },
];

export const WORK_EX = [
  {
    company: "Greyfinch",
    role: "Mid Level Product Engineer",
    period: "November 2023 to April 2025",
    location: "Remote",
    description:
      "Worked on modernizing core services and improving reliability for a US-based Orthodontic Practice Management Software.",
    achievements: [
      "Was part of a 3-person team who worked on the overhaul of the payment infrastructure, modernizing core services and improving reliability",
      "Defined and scoped requirements for a new standalone Pay App to support seamless one-off payments",
      "Engineered and delivered the full-stack solution from scratch within a month, enabling rapid adoption across partner clinics",
      "Played a key role in migrating legacy calendar modules to a modular and maintainable architecture",
      "Rebuilt the UI using FullCalendar, matching Figma designs with pixel-perfect precision and improving user interactivity",
    ],
  },
  {
    company: "Questbook (YC 21)",
    role: "Full Stack Blockchain Developer",
    period: "January 2022 to May 2023",
    location: "Remote",
    description:
      "Worked on their stack end-to-end, starting as a frontend engineer and expanding to blockchain and backend development.",
    achievements: [
      "Joined as a frontend engineer, working on the grants tool frontend",
      "Worked on the set of smart contracts that power the Questbook grants tool",
      "Added and modified handlers for the subgraph that indexed the events emitted by the contracts",
      "Maintained the graph node for subgraph deployment on four chains: Optimism, Polygon, Celo and Goerli",
      "Developed a Serverless API endpoint for Zapier integration",
      "Built an email notification service using Serverless for tool users",
      "Created a Telegram bot for user action notifications with a webhook and cron job based on pub-sub architecture",
      "Acquired experience with AWS Lambda, AWS Elastic Beanstalk, and AWS CloudWatch",
    ],
  },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6 text-terminal-blue" />,
    items: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    icon: <Code className="h-6 w-6 text-terminal-green" />,
    items: ["React", "Hasura (GraphQL)", "Apollo (GraphQL)"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6 text-terminal-purple" />,
    items: ["PostgreSQL", "DynamoDB"],
  },
  {
    category: "DevOps",
    icon: <GitBranch className="h-6 w-6 text-accent" />,
    items: ["Serverless Framework", "Docker", "Jenkins", "CircleCI"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-destructive" />,
    items: ["AWS Lambda", "CloudWatch", "Elastic Beanstalk"],
  },
  {
    category: "Tools & Libraries",
    icon: <Tool className="h-6 w-6 text-terminal-green" />,
    items: ["FullCalendar", "Figma", "Git", "Zapier"],
  },
];