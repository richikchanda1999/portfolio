import { ListItem } from "src/types";

export const data: ListItem[] = [
    {
      content: [
        'Worked on the ',
        { text: 'decentralised grants tool', url: 'https://questbook.app' },
        ' that was used by more than ',
        { text: '20000 users', url: '' },
        ', and had disbursed around ',
        { text: '$2M to builders', url: '' },
        '.',
      ],
    },
    {
      content: [
        'Performed modifications and maintained the Solidity ',
        { text: 'smart contracts', url: 'https://github.com/questbook/grants-contracts-upgradeable' },
        ', Next.JS ',
        { text: 'frontend', url: 'https://github.com/questbook/grants-frontend' },
        ', and the subgraphs that powered the Dapp through ',
        { text: 'GraphQL', url: '' },
        ' queries.',
      ],
    },
    {
      content: [
        'Built the ',
        { text: 'notification system for the app from scratch', url: '' },
        '. I architected an',
        { text: 'email notification system', url: 'https://github.com/questbook/communication-service' },
        ' leveraging AWS Simple Email Service. This system dispatched both event-driven and periodic emails to a roster of recipients, enhancing user engagement and reducing response times on the platform.',
      ],
    },
    {
      content: [
        'Singlehandedly, I also created a ',
        { text: 'Telegram bot', url: 'https://t.me/qb_notif_bot' },
        ' for user action notifications. It comprised a webhook, where the Telegram server sent new subscription requests and a cron job that sent out periodic notifications based on a ',
        { text: 'pub-sub architecture', url: '' },
        '.',
      ],
    },
    {
      content: [
        'Integrated Zapier for the clients to set up their own data pipelines. For this, I built an ',
        { text: 'API endpoint', url: 'https://github.com/questbook/qb-api' },
        ' using the ',
        { text: 'Serverless architecture', url: '' },
        ', and used periodic polling of this endpoint to get new data.',
      ],
    },
    {
      content: [
        'Maintained the ',
        { text: 'custom graph node', url: '' },
        ' that Questbook had for its ',
        { text: 'subgraph', url: 'https://github.com/questbook/subgraph' },
        ' on ',
        { text: 'Optimism', url: 'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-optimism-mainnet/graphql' },
        '.',
      ],
    },
    {
      content: [
        'This helped me acquire experience with AWS Lambda while deploying serverless apps, AWS Elastic Beanstalk for graph node management, and AWS CloudWatch for debugging.',
      ],
    },
  ];
  