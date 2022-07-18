# NuSpeak

## A social media link share site utilizing Authentication using Amazon Cognito, Database using DynamoDB, GraphQL API using Amazon AppSync, Storage for data using S3 Buckets, Next.JS, Static Site Generation, Incremental Static Regeneration, Server-side Render, Next.JS Image Component, React Hook Form. An extremely quick optimized website utilizing modern technologies to deliver a smooth user experience.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting Started with your own:

```
npx create-next-app {name}
cd {name}
npm run dev
create tsconfig.json file
npm install --save-dev typescript @types/react @types/node @types/node
npm run dev
npm install eslint --save-dev
npx eslint --init
npm install --save-dev prettier eslint-config-prettier
Add prettier to .eslintrc.json extends
create .prettierrc & .prettierignore & .eslintignore
Create _document.tsx, createEmotionCache.ts & theme.ts - import code from Next.JS material UI example to _app.tsx, _document.tsx, createEmotionCache.ts, & theme.ts
npm install @material-ui/core @material-ui/icons @mui/material @mui/icons-material @emotion/react @emotion/styled @emotion/cache @emotion/server prop-types
npm install -g @aws-amplify/cli
amplify configure
amplify init
amplify add api
amplify push
amplify console
npm install react-hook-form
npm install aws-amplify
```
