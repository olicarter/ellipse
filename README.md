# Ellipse - @olicarter's interpretation of Spill's Frontend tech task

## Tech decisions

- Using pnpm for dependency management as it's [very fast](https://pnpm.io/benchmarks)
- Would use NextJS for production project (in-built SSG and SSR), but it's overkill for a test task.
- Using TypeScript for the incredibly useful developer experience, catches most bugs during development.
- Implemented animated background after my wife said it looked "boring". Performance takes a hit so would likely make the design more vibrant without the full viewport animation in production.
- Decided on using query parameters for persisting state as allows for opening pre-filled forms from anywhere. Ideally wouldn't put selected appointment ID in query params as availability will change often and is unlikely to need to route to a pre-selected appointment directly. Only did this due to time constraints of test task. Alternate implementation for test task could've used mutations and local storage to persist booked appointment data.

## Improvements

- Progressive avatar loading for better UX
- Page title to indicate what the page is for and improve SEO
- Persist booked appointment state
- Tests. Ideal, but time consuming and not required for this task.
- Move appointment filter and selection boxes onto 2 different pages for mobile to reduce scrolling distance.

### Reasons for using some of the main packages

- [@apollo-client](https://www.apollographql.com/docs/react) - Allows for great component isolation and consistent local and remote data management syntax using GraphQL.
- [@mdi/js and @mdi/react](https://materialdesignicons.com) - Huge icon library with React component that caters for most needs.
- [date-fns](https://date-fns.org) - Modern and popular date/time manipulation.
- [framer-motion](https://www.framer.com/motion) - Animation library with simple syntax and very useful AnimatePresence import that allows animation before unmounting a component.
- [polished](https://polished.js.org) - Provides lots of useful functions for manipulating CSS.
- [prettier](https://prettier.io) - Enforces code formatting consistency.
- [styled-components](https://styled-components.com) - Allows simple and clean dynamic styling with an easy to understand syntax.
