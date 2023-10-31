import { ProjectCardProps } from "src/types";
export const PROJECTS: Array<ProjectCardProps> = [
    {
      title: "Github Verified Lens",
      description: [
        {
          type: "text",
          content: "At ",
        },
        {
          type: "link",
          content: "EthTokyo",
          url: "https://ethglobal.com/events/tokyo",
        },
        {
          type: "text",
          content: ", we worked on this intriguing project utilizing ",
        },
        {
          type: "link",
          content: "MetaMask SDK",
          url: "https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/guide/metamask-sdk-intro.html",
        },
        { type: "text", content: ", " },
        { type: "link", content: "Lens protocol", url: "https://www.lens.xyz/" },
        { type: "text", content: " and " },
        {
          type: "link",
          content: "Questbook's Reclaim SDK",
          url: "https://reclaimprotocol.org/",
        },
        { type: "text", content: ", and " },
        { type: "highlight", content: "built it in 36 hours" },
        {
          type: "text",
          content:
            ". It enabled Github users to verify their contributions to public / private repositories, similar to Twitter's blue tick, and display them on their pseudonymous Lens Profiles. The project successfully ",
        },
        { type: "highlight", content: "bagged 3 track prizes" },
        {
          type: "text",
          content:
            " from Lens Protocol, Metamask, and Polygon. Once in production, this tool has the potential to ",
        },
        { type: "highlight", content: "impact over 100,000" },
        { type: "text", content: " unique users on Lens." },
      ],
      imageUrl: "https://example.com/image.jpg",
      links: [
        {
          url: "https://ethglobal.com/showcase/github-verified-lens-fytrg",
          text: "Website",
        },
        {
          url: "https://github.com/sriharshakaramchati/github-lens",
          text: "Source Code",
        },
      ],
    },
    {
      title: "Attestation Paymaster",
      description: [
        { type: "text", content: "During " },
        {
          type: "link",
          content: "Superhack",
          url: "https://ethglobal.com/events/superhack",
        },
        { type: "text", content: ", I developed this project that leverages " },
        { type: "highlight", content: "Ethereum Attestation Service" },
        { type: "text", content: " and a " },
        { type: "highlight", content: "custom paymaster" },
        {
          type: "text",
          content:
            " to allow users to have their gas fees paid by an attester after being attested for specific schemas. A practical application of this is for web3 organizations to cover the on-chain transaction costs of their employees by attesting them against a schema and deploying a custom paymaster, in lieu of ESOPs.",
        },
      ],
      imageUrl: "",
      links: [
        {
          url: "https://github.com/richikchanda1999/attestation-paymaster",
          text: "Source Code",
        },
      ],
    },
    {
      title: "Lens Tag",
      description: [
        {
          type: "text",
          content:
            "This enhanced promotions on Lens by enabling hashtag differentiation and continuous token streams for promotions using Superfluid, as opposed to one-time payments.",
        },
      ],
      imageUrl: "",
      links: [
        { url: "https://hashtag-rewarder.vercel.app/", text: "Website" },
        {
          url: "https://github.com/richikchanda1999/hashtag-rewarder",
          text: "Source Code",
        },
      ],
    },
    {
      title: "Contextual Grant Finder",
      description: [
        {
          type: "text",
          content:
            "This proof-of-concept tool streamlines grant search by allowing users to describe their projects in natural language and receive tailored grant recommendations based on their input. It was built using ",
        },
        {
          type: "link",
          content: "Langchain JS",
          url: "https://js.langchain.com/docs/",
        },
        { type: "text", content: " with " },
        {
          type: "link",
          content: "Open AI Embeddings",
          url: "https://platform.openai.com/docs/guides/embeddings",
        },
        { type: "text", content: "." },
      ],
      imageUrl: "",
      links: [
        { url: "https://grant-finder-chi.vercel.app/", text: "Website" },
        {
          url: "https://github.com/richikchanda1999/grant-finder",
          text: "Source Code",
        },
      ],
    },
    {
      title: "ZKSM - Zero Knowledge Speed Math",
      description: [
        {
          type: "text",
          content:
            "In this ZK-based game, users solve math problems involving two integers and either addition or multiplication. ZK ensures answer verification without exposing frontend data. Circuits were created in ",
        },
        { type: "link", content: "Circom", url: "https://docs.circom.io/" },
        {
          type: "text",
          content: " and exported as Solidity smart contracts using ",
        },
        { type: "highlight", content: "Snark JS" },
        { type: "text", content: "." },
      ],
      imageUrl: "",
      links: [
        { url: "https://zksm.vercel.app/", text: "Website" },
        { url: "https://github.com/richikchanda1999/zksm", text: "Source Code" },
      ],
    },
    {
      title: "Play and Learn English - Brainy Bugs mobile app",
      description: [
        { type: "text", content: "It is a mobile application built using " },
        { type: "highlight", content: "Flutter and Firebase" },
        { type: "text", content: ", aimed at " },
        { type: "highlight", content: "empowering specially-abled children" },
        {
          type: "text",
          content:
            " to learn English vocabulary through captivating illustrations and interactive games. This app is currently available on the Play Store.",
        },
      ],
      imageUrl: "",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.game.brainybugs",
          text: "Play Store link",
        },
      ],
    },
  ];
  