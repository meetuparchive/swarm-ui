# Swarm Ecosystem

This is a monorepo that houses all packages used to build the swarm design system

[Documentation](https://github.com/meetup/swarm-ui/tree/master/packages/swarm-docs) `@meetup/swarm-docs`

- [Gatsby](https://www.gatsbyjs.org/)
- [MDX](https://mdxjs.com/)
- [react-live](https://react-live.kitten.sh)
- [react-docgen](http://reactcommunity.org/react-docgen/)
- [retoggle](https://retoggle.debuggable.io)

[Styles](https://github.com/meetup/swarm-ui/tree/master/packages/swarm-styles) `@meetup/swarm-styles`

- [PostCSS](https://github.com/postcss/postcss)

[Components](https://github.com/meetup/swarm-ui/tree/master/packages/swarm-components) `@meetup/swarm-components`

- [React](https://reactjs.org/)

[Style Constants](https://github.com/meetup/swarm-ui/tree/master/packages/swarm-constants) `@meetup/swarm-constants`

- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)

## Integration testing using visual diffs

`swarm-constants`, `swarm-styles`, and `swarm-components` all integrate together
to produce consistent UI elements. This project uses a screenshot-generating
visual diff tool to ensure that the rendered elements appear as expected. Because
different operating systems and browsers can render elements slightly differently,
the integration tests use a Docker container to provide a consistent environment,
which means that running integration tests requires Docker support.

To run the visual tests, run `make test-visual`. This command will build a fresh
Docker image including a new install of all dependencies, so it can be slow. If the
visual tests fail, the screenshot diff output will be saved in
`packges/swarm-components/src/__image_snapshots__/__diff_output__` for manual
inspection.

When you are satisfied that the visual diff represents the expected output,
run `make test-visual-update` to re-run the tests and save the updated image
snapshots. Commit the result and push.
