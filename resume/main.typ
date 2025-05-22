#import "@preview/typographic-resume:0.1.0": *
#import "@preview/fontawesome:0.5.0": fa-github, fa-twitter, fa-linkedin, fa-envelope, fa-location-dot

#show link: it => text(fill: rgb("#2563eb"), it)

#show: resume.with(
  theme: (
    margin: 26pt,
    font-size: 8pt,
    text-color: rgb("#3f454d"),
    gutter-size: 4em,
    main-width: 6fr,
    aside-width: 3fr,
    profile-picture-width: 75%,
  ),
  first-name: "Richik",
  last-name: "Chanda",
  profession: "Full Stack Engineer",
  bio: [
    Product-minded full stack engineer with 3+ years experience building scalable, production-grade web applications. Experienced in shipping features end-to-end across modern frontend stacks, cloud-native backends, and event-driven infrastructure.
  ],
  profile-picture: image("./me.jpg"),

  aside: {
    section(
      "Contact",
      {
        contact-entry(
          fa-location-dot(),
          text("Kolkata, India"),
        )
        line(stroke: 0.1pt, length: 100%)

        contact-entry(
          fa-github(),
          link("https://github.com/richikchanda1999", "richikchanda1999"),
        )
        line(stroke: 0.1pt, length: 100%)

        contact-entry(
          fa-twitter(),
          link("https://twitter.com/richik_chanda", "@richik_chanda"),
        )
        line(stroke: 0.1pt, length: 100%)

        contact-entry(
          fa-linkedin(),
          link("https://www.linkedin.com/in/richik-chanda-0585ba15b/", "richikchanda1999"),
        )
        line(stroke: 0.1pt, length: 100%)

        contact-entry(
          fa-envelope(),
          link("mailto:richikchanda1999@gmail.com", "richikchanda1999@gmail.com"),
        )
      },
    )

    section(
      "Education",
      {
        education-entry(
          title: "Bachelor of Technology in Computer Science and Engineering",
          institution: "Indian Institute Of Information Technology, Guwahati, India",
          timeframe: "Batch of 2022",
          [CGPA: 8.98 (on a scale of 10)],
        )

        v(6pt)

        education-entry(
          title: "School",
          institution: "Salt Lake School, Kolkata, India",
          timeframe: "2004 - 2018",
          [
            High School (2018): 93.75% \
            Grade School (2016): 96.6%
          ],
        )
      },
    )

    section(
      "Technical Skills",
      {
        stack(
          spacing: 10pt,
          [
            #text(weight: "bold", "Languages:")
            #stack(spacing: 4pt, "Java, JavaScript (ES6+), TypeScript, SQL")
          ],
          [
            #text(weight: "bold", "Frameworks:")
            #stack(spacing: 4pt, "React, Hasura (GraphQL), Apollo (GraphQL)")
          ],
          [
            #text(weight: "bold", "Databases:")
            #stack(spacing: 4pt, "PostgreSQL, DynamoDB")
          ],
          [
            #text(weight: "bold", "DevOps:")
            #stack(spacing: 4pt, "Serverless Framework, Docker, Jenkins, CircleCI")
          ],
          [
            #text(weight: "bold", "Cloud & Infra:")
            #stack(spacing: 4pt, "AWS Lambda, CloudWatch, Elastic Beanstalk")
          ],
          [
            #text(weight: "bold", "Tools and Libraries:")
            #stack(spacing: 4pt, "FullCalendar, Figma, Git, Zapier")
          ],
        )
      },
    )
  },
)

#section(
  theme: (space-above: 4pt),
  "Freelance Projects",
  {
    work-entry(
      theme: (space-above: 6pt),
      timeframe: "November 2024 - May 2025",
      title: "Building Chatterbugs Web app",
      organization: "Brainy Bug Resources",
      [
        - Developed an end-to-end #link("https://chatterbugs.app")[web application] link designed to seamlessly complement existing physical card decks sold by the client, enhancing user engagement and product experience.
        - Enabled secure, user-specific access by integrating a unique 6-digit code linked to each purchased physical deck, unlocking tailored digital content upon verification and payment.
        - Engineered direct content access through QR codes printed on each physical card, allowing users instant digital navigation to corresponding audio content within the web app.
        - Led full-stack development lifecycle, including technology stack selection, database architecture, data storage solutions, and infrastructure hosting.
        - Implemented frontend using Next.js, providing an intuitive, performant, and responsive user interface.
        - Designed a robust authentication solution with Firebase Authentication, enhanced through custom server-side blocking functions to append additional JWT claims via Firebase Cloud Functions.
        - Built a secure and scalable backend with PostgreSQL, exposing data through a GraphQL API powered by Hasura. Ensured secure access control by leveraging the custom JWT claims added while authentication
        - Developed specialized backend services using Rust with Axum, strategically chosen for superior performance and memory efficiency on resource-constrained environments (hosted effectively on a 1GB RAM DigitalOcean droplet), significantly outperforming alternatives like TypeScript or Python.
        - Extended server functionalities by implementing Hasura Actions and Event triggers directly within the Rust-based Axum server, enhancing operational efficiency and responsiveness.
        - Automated deployment pipelines and database migrations using GitHub Actions, streamlining continuous integration and delivery processes for Hasura and Rust services.
      ],
    )
  },
)

#section(
  theme: (space-above: 4pt),
  "Work Experience",
  {
    work-entry(
      theme: (space-above: 6pt),
      timeframe: "Nov 2023 - Apr 2025",
      title: "Mid Level Product Engineer",
      organization: "Greyfinch (US based Orthodontic Practice Management Software)",
      location: "Remote",
      [
        #strong("Greyfinch Pay App — Revamp and Feature Development (Jan 2024 -- Jul 2024)")
        - Was part of a 3 person team, who worked on the overhaul of the payment infrastructure, modernizing core services and improving reliability
        - Defined and scoped requirements for a new standalone Pay App to support seamless one-off payments
        - Engineered and delivered the full-stack solution from scratch within a month, enabling rapid adoption across partner clinics

        #v(0.3em)
        #strong("Modernization of Appointment Calendar Experience (Aug 2024 -- Apr 2025)")
        - Played a key role in migrating legacy calendar modules to a modular and maintainable architecture
        - Rebuilt the UI using FullCalendar, matching Figma designs with pixel-perfect precision and improving user interactivity
      ],
    )

    work-entry(
      theme: (space-above: 8pt), // Slightly more space between different jobs
      timeframe: "Jan 2022 - May 2023",
      title: "Full stack Blockchain developer",
      organization: "Questbook (YC 21)",
      location: "Remote",
      [
        - Joined as a frontend engineer, working on the #link("https://github.com/questbook/grants-frontend")[grants tool] frontend
        - Worked on the #link("https://github.com/questbook/grants-contracts-upgradeable")[set of smart contracts] that power the Questbook #link("https://github.com/questbook/grants-frontend")[grants tool]
        - Added and modified handlers for the #link("https://github.com/questbook/subgraph")[subgraph] that indexed the events emitted by the above contracts. The data was queried from the frontend using a GraphQL API, that was exposed by the same subgraph node.
        - Maintained the graph node for subgraph deployment on four chains
        - Developed a #link("https://github.com/questbook/qb-api")[Serverless API endpoint] that could be used to poll data periodically by #link("https://zapier.com/")[Zapier] and be used by other apps
        - Built an #link("https://github.com/questbook/communication-service")[email notification service] using #link("https://www.serverless.com/")[Serverless], for Questbook users. It would poll the subgraph at specific intervals and send out emails based on new and modified data
        - Created a #link("https://t.me/qb_notif_bot")[Telegram bot] for user action notifications. It comprised a webhook, where the Telegram server sent new subscription requests and a cron job that sent out periodic notifications based on a pub-sub architecture
        - Acquired experience with AWS Lambda while deploying serverless apps, AWS Elastic Beanstalk for graph node management, and AWS CloudWatch for debugging
      ],
    )
  },
)
