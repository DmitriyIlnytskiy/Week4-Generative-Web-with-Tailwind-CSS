This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Project Documentation: Neon Game Hub
Brief Description of the Problem
Finding new video games to play can be overwhelming. Users often have to browse multiple stores, blogs, and review sites. The Neon Game Hub solves this by providing a single, visually engaging, and fast web application. It centralizes game discovery by connecting directly to the massive RAWG.io database, allowing users to instantly find and learn about games in one place.

Outline of the Main Features
Live API Data Integration: The app fetches all its information in real-time from the RAWG.io API
, ensuring all game data (titles, ratings, images) is up-to-date.

Popular Games on Load: When a user first visits the site, it automatically fetches and displays a grid of popular games, providing immediate value and a starting point for discovery.

Core Search Functionality: A prominent search bar allows users to query the entire RAWG database. The app fetches and displays the results for any game the user searches for.

Interactive Results Display: All games are shown in a "neon-vibe" card format. Each card is an interactive element that shows:

The game's cover image.

The game's title and rating.

A list of genres.

A "Learn More" button that links directly to the game's official page on RAWG.io.

Interactive "Clear" Button: As a secondary interactive element, the "Clear" button resets the search field and re-loads the default list of popular games, providing a simple way to start over.

Responsive "Neon" Design: The entire application is built with Tailwind CSS, featuring a custom dark-mode theme, neon-red accents, and a "glowing" hover effect on cards. It is fully responsive and works on both desktop and mobile.

Animated Background: A subtle, purely CSS-animated particle background gives the site a "futuristic" and polished feel.

Notes on What I Learned
This project was a complete journey from a static HTML file to a dynamic, production-ready web application.

Next.js & React Fundamentals: I learned how to set up a Next.js project using the App Router. The most important concepts were:

React State (useState): How to use state to store and manage data that changes, like the text in the search bar (search) and the list of games returned from the API (games).

React Effects (useEffect): How to use the useEffect hook to run code after the component loads, specifically to fetch the initial list of popular games.

Client Components ("use client"): The critical importance of this one-line command. It tells Next.js that this component is interactive and needs to run in the browser, which is required for useState and useEffect to work.

API Data Fetching: I learned how to use the browser's fetch() function to send a request to an external API. This involved learning how to properly format the URL with my API key and how to handle the asynchronous Promise that is returned, using .then() to get the JSON data.

Secure API Key Management: I learned the correct way to handle secret keys. By using an .env.local file and the NEXT_PUBLIC_ prefix, I could safely use my API key in the code without ever committing it to GitHub or exposing it to the public.

Tailwind CSS: I learned how to use Tailwind's utility-first classes to build a complex, custom design directly in my JSX. This was much faster than writing separate CSS files. I also learned how to customize the tailwind.config.mjs file to add my own brand colors (like neon).

Development Environment Troubleshooting: I learned that the development environment is as important as the code. I had to learn how to:

Solve the PowerShell Set-ExecutionPolicy security error.

Fix the missing tailwind.config.mjs file by creating it manually.

Always be in the correct folder (cd my-game-catalog) before trying to run npm run dev, otherwise, it can't find the package.json file.
