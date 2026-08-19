# ToSpace Website

The Launch To Space site runs as a Next.js application while preserving the
original self-contained HTML document byte-for-byte.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The project is ready to import into Vercel. The root URL is internally rewritten
to `public/launch-to-space.html`, so the browser keeps `/` in the address bar and
all existing layout, animation, navigation, and form behavior remain unchanged.
