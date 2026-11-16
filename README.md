<h1 align="center">
  LED strip driver calculator
</h1>

This is a small experimental website that allows you to calculate the driver your LED strip needs to shine brightly.

## Development

Use Node 24 (Maintenance LTS), pinned to a patch in `.tool-versions`;
`.node-version` and `package.json` select the same major. Gatsby currently
requires Node `>=18 <26`. React stays on 18 while the router and Helmet
dependency graph require it.

```bash
mise install
mise exec -- npm ci
mise exec -- npm run build
```

The `npm test` script is a placeholder; verify calculator interactions in a
production preview after dependency changes.
