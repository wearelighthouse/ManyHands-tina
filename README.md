# ManyHands

ManyHands is an event for product people. The event (and website) is by [Lighthouse](https://wearelighthouse.com/), a specialist UX and UI design agency based in London.

ManyHands was previously a static single-page website: [ManyHands-site](https://github.com/wearelighthouse/ManyHands-site)

This Next.js app is powered by [TinaCMS](https://app.tina.io) to allow visuall live editing. ✨

The content is managed through Markdown and JSON files stored in this GitHub repository, and queried through Tina GraphQL API.

### Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management.
- [GitHub Actions](https://github.com/features/actions) and [GitHub Pages](https://pages.github.com/) for automated deployment and hosting, including visual editing from the `/admin` route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.

## Local Development

Install the project's dependencies:

```
npm install
```

Run the project locally:

```
npm run dev
```

### Local URLs

- http://localhost:3000 : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
npm run build
```

## Getting Help

To get help with any TinaCMS challenges you may have:

- Visit the [documentation](https://tina.io/docs/) to learn about Tina.
- [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
- Visit the [community forum](https://community.tinacms.org/) to ask questions.
- Get support through the chat widget on the TinaCMS Dashboard
- [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
- [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
- Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

### Typescript

A good way to ensure your components match the shape of your data is to leverage the auto-generated TypeScript types.
These are rebuilt when your `.tina` config changes.

## LICENSE

The [Tina CMS starter](https://github.com/tinacms/tina-cloud-starter), and any other code included in this repository is licensed under the [Apache 2.0 license](./LICENSE).
