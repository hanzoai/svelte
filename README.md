# @hanzo/svelte

Hanzo UI for Svelte 5.

These components used to live inside `@hanzo/ui` as `@hanzo/ui/svelte`. They are
here now because a component library should be one stack: `@hanzo/ui` is React on
`@hanzo/gui`, and shipping a second renderer inside it meant every consumer
resolved `svelte` whether or not they used it.

Nothing about the components changed. Same shapes, same `cva` variants, same
tokens.

## Install

```sh
npm i @hanzo/svelte svelte
```

Two dependencies, on purpose: `svelte` (peer, yours) and `class-variance-authority`
(the variant function). No design-system runtime, no icon pack, no CSS-in-JS.

## Use

```svelte
<script>
  import { Button, Card, CardHeader, CardContent } from '@hanzo/svelte'
</script>

<Card>
  <CardHeader>Ship it</CardHeader>
  <CardContent><Button variant="default">Go</Button></CardContent>
</Card>
```

Import one component if you want one component:

```svelte
import Button from '@hanzo/svelte/Button.svelte'
```

## Composition

Every component takes `class` and spreads the rest onto its root element, so a
variant is a function of props and nothing is hidden behind a theme provider.
Compose by wrapping, not by configuring.
