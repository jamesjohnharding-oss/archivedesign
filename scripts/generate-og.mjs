/**
 * generate-og.mjs
 * Generates public/og-image.png at build time using Satori + @resvg/resvg-js.
 * Run via: node scripts/generate-og.mjs
 * Automatically runs as prebuild via package.json scripts.
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const OUT_PATH = resolve(__dirname, '../public/og-image.png');

// ── Load fonts from @fontsource packages (woff1 — supported by Satori) ───────
// woff2 is NOT supported by Satori's bundled opentype.js;
// woff1 (.woff) IS supported. @fontsource ships both formats.
const dmSans = readFileSync(
  resolve(require.resolve('@fontsource/dm-sans/package.json'), '../files/dm-sans-latin-400-normal.woff'),
);
const dmSerifDisplay = readFileSync(
  resolve(require.resolve('@fontsource/dm-serif-display/package.json'), '../files/dm-serif-display-latin-400-normal.woff'),
);
const dmSerifDisplayItalic = readFileSync(
  resolve(require.resolve('@fontsource/dm-serif-display/package.json'), '../files/dm-serif-display-latin-400-italic.woff'),
);

// ── Element helper ────────────────────────────────────────────────────────────
// If positional children are provided they override props.children;
// otherwise props.children is preserved (e.g. when children is set inline).
const h = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    ...(children.length > 0 && {
      children: children.length === 1 ? children[0] : children.filter(c => c != null),
    }),
  },
});

// ── SVG sub-elements ──────────────────────────────────────────────────────────
const LogoMark = h('svg', { width: 36, height: 40, viewBox: '0 0 36 40', fill: 'none' },
  h('rect', { x: '0.8', y: '0.8', width: '34.4', height: '38.4', stroke: '#1A5C6B', 'stroke-width': '1.6', fill: 'none' }),
  h('path', { d: 'M9 38.4 L9 10 L27 10 L27 38.4', stroke: '#1A5C6B', 'stroke-width': '1.6', fill: 'none' }),
  h('circle', { cx: '18', cy: '36', r: '2.5', fill: '#E8952A' }),
);

const GhostDoorLarge = h('svg', { width: 420, height: 420, viewBox: '0 0 420 420', fill: 'none' },
  h('rect', { x: '2', y: '2', width: '416', height: '416', stroke: '#F7F4EE', 'stroke-width': '3', fill: 'none' }),
  h('path', { d: 'M90 416 L90 100 L330 100 L330 416', stroke: '#F7F4EE', 'stroke-width': '3', fill: 'none' }),
  h('circle', { cx: '210', cy: '390', r: '10', fill: '#F7F4EE' }),
);

const GhostDoorSmall = h('svg', { width: 280, height: 280, viewBox: '0 0 280 280', fill: 'none' },
  h('rect', { x: '2', y: '2', width: '276', height: '276', stroke: '#F7F4EE', 'stroke-width': '2.5', fill: 'none' }),
  h('path', { d: 'M60 276 L60 68 L220 68 L220 276', stroke: '#F7F4EE', 'stroke-width': '2.5', fill: 'none' }),
  h('circle', { cx: '140', cy: '258', r: '7', fill: '#F7F4EE' }),
);

const SmallIcon = h('svg', { width: 28, height: 30, viewBox: '0 0 36 40', fill: 'none' },
  h('rect', { x: '0.8', y: '0.8', width: '34.4', height: '38.4', stroke: '#F7F4EE', 'stroke-width': '1.6', fill: 'none' }),
  h('path', { d: 'M9 38.4 L9 10 L27 10 L27 38.4', stroke: '#F7F4EE', 'stroke-width': '1.6', fill: 'none' }),
  h('circle', { cx: '18', cy: '36', r: '2.5', fill: '#E8952A' }),
);

const ArchitectCardLines = h('svg', {
  width: 220, height: 110, viewBox: '0 0 220 110', fill: 'none',
  style: { position: 'absolute', inset: 0, opacity: 0.3 },
},
  h('rect', { x: '30', y: '20', width: '80', height: '70', stroke: '#F7F4EE', 'stroke-width': '1' }),
  h('rect', { x: '50', y: '40', width: '40', height: '50', stroke: '#F7F4EE', 'stroke-width': '0.7' }),
  h('line', { x1: '110', y1: '55', x2: '160', y2: '55', stroke: '#F7F4EE', 'stroke-width': '0.7' }),
  h('rect', { x: '145', y: '30', width: '45', height: '30', stroke: '#F7F4EE', 'stroke-width': '1' }),
  h('circle', { cx: '180', cy: '72', r: '8', stroke: '#E8952A', 'stroke-width': '1', fill: 'none' }),
);

const HomeownerCardLines = h('svg', {
  width: 220, height: 110, viewBox: '0 0 220 110', fill: 'none',
  style: { position: 'absolute', inset: 0, opacity: 0.5 },
},
  h('path', { d: 'M80 85 L80 45 L110 22 L140 45 L140 85 Z', stroke: '#1A5C6B', 'stroke-width': '1.2', fill: 'none' }),
  h('rect', { x: '96', y: '60', width: '28', height: '25', stroke: '#1A5C6B', 'stroke-width': '1', fill: 'none' }),
  h('line', { x1: '30', y1: '85', x2: '190', y2: '85', stroke: '#1A5C6B', 'stroke-width': '0.7' }),
  h('circle', { cx: '110', cy: '22', r: '3', fill: '#E8952A' }),
);

// ── Left panel ────────────────────────────────────────────────────────────────
const LeftPanel = h('div', {
  style: {
    position: 'absolute', top: 0, left: 0, width: 560, height: 630,
    padding: '64px 56px 56px 72px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    zIndex: 2,
  },
},
  // Logo row
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
    LogoMark,
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
      h('div', { style: { display: 'flex', fontFamily: '"DM Sans"', fontSize: 17, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1A5C6B', lineHeight: 1 } }, 'Archive'),
      h('div', { style: { display: 'flex', fontFamily: '"DM Sans"', fontSize: 8, fontWeight: 400, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#1A5C6B', opacity: 0.57, lineHeight: 1 } }, 'Design'),
    ),
  ),
  // Headline block
  h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', paddingTop: 16 } },
    h('div', {
      style: {
        fontFamily: '"DM Serif Display"', fontSize: 46, fontWeight: 400,
        lineHeight: 1.1, letterSpacing: '-0.01em', color: '#1A2E35', marginBottom: 20,
        display: 'flex', flexWrap: 'wrap', alignItems: 'baseline',
      },
    },
      'Find an architect whose work already ',
      h('span', { style: { fontStyle: 'italic', color: '#1A5C6B' } }, 'fits.'),
    ),
    h('div', {
      style: {
        display: 'flex',
        fontFamily: '"DM Sans"', fontSize: 16, fontWeight: 400,
        lineHeight: 1.55, color: '#3A5560', maxWidth: 380,
      },
    }, 'Match with architects whose proven designs align with your vision, site, and budget — before the first meeting.'),
  ),
  // Footer pills
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 20 } },
    h('div', { style: { display: 'flex', fontFamily: '"DM Sans"', fontSize: 13, fontWeight: 500, color: '#1A5C6B', background: '#EBF4F6', padding: '6px 14px', borderRadius: 999 } }, 'For homeowners'),
    h('div', { style: { display: 'flex', fontFamily: '"DM Sans"', fontSize: 13, fontWeight: 500, color: '#1A5C6B', background: '#EBF4F6', padding: '6px 14px', borderRadius: 999 } }, 'For architects'),
    h('div', { style: { display: 'flex', fontFamily: '"DM Sans"', fontSize: 13, fontWeight: 400, color: '#3D6872' } }, 'archivedesign.ai'),
  ),
);

// ── Right panel cards ─────────────────────────────────────────────────────────
const ArchitectCard = h('div', {
  style: {
    position: 'absolute', top: 60, left: 48, width: 220,
    background: '#F7F4EE', borderRadius: 14, overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
    display: 'flex', flexDirection: 'column',
  },
},
  h('div', {
    style: {
      width: '100%', height: 110,
      background: 'linear-gradient(135deg, #1A5C6B 0%, #1A6E80 60%, #EBF4F6 100%)',
      position: 'relative', display: 'flex',
    },
  }, ArchitectCardLines),
  h('div', { style: { padding: '14px 16px 16px', display: 'flex', flexDirection: 'column' } },
    h('div', { style: { display: 'flex', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3D6872', marginBottom: 4 } }, 'Architect · Melbourne'),
    h('div', { style: { display: 'flex', fontSize: 14, fontWeight: 600, color: '#1A2E35', marginBottom: 4 } }, 'Studio Romer'),
    h('div', { style: { display: 'flex', flexDirection: 'column', fontSize: 11, color: '#3A5560', lineHeight: 1.5, marginBottom: 10 } },
      h('div', { style: { display: 'flex' } }, 'Residential · 42 homes completed'),
      h('div', { style: { display: 'flex' } }, '$800K – $2M builds'),
    ),
    h('div', { style: { fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, background: '#1A5C6B', color: '#fff', display: 'flex', alignSelf: 'flex-start' } }, 'Open to introductions'),
  ),
);

const HomeownerCard = h('div', {
  style: {
    position: 'absolute', bottom: 72, right: 48, width: 220,
    background: '#F7F4EE', borderRadius: 14, overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
    display: 'flex', flexDirection: 'column',
  },
},
  h('div', {
    style: {
      width: '100%', height: 110,
      background: 'linear-gradient(135deg, #EBF4F6 0%, #D4E9EE 100%)',
      position: 'relative', display: 'flex',
    },
  }, HomeownerCardLines),
  h('div', { style: { padding: '14px 16px 16px', display: 'flex', flexDirection: 'column' } },
    h('div', { style: { display: 'flex', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3D6872', marginBottom: 4 } }, 'Homeowner · Bowral, NSW'),
    h('div', { style: { display: 'flex', fontSize: 14, fontWeight: 600, color: '#1A2E35', marginBottom: 4 } }, 'The Hardings'),
    h('div', { style: { display: 'flex', flexDirection: 'column', fontSize: 11, color: '#3A5560', lineHeight: 1.5, marginBottom: 10 } },
      h('div', { style: { display: 'flex' } }, 'New build · 4 bed'),
      h('div', { style: { display: 'flex' } }, '$1.8 – 2.2M budget'),
    ),
    h('div', { style: { fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, background: '#FDF3E3', color: '#9E5E00', display: 'flex', alignSelf: 'flex-start' } }, 'Seeking match'),
  ),
);

// ── Right panel ───────────────────────────────────────────────────────────────
const RightPanel = h('div', {
  style: {
    position: 'absolute', top: 0, right: 0, width: 640, height: 630,
    background: '#123F4B', overflow: 'hidden', display: 'flex',
  },
},
  // Ghost door large
  h('div', { style: { display: 'flex', position: 'absolute', top: -40, right: -30, opacity: 0.07 } }, GhostDoorLarge),
  // Ghost door small
  h('div', { style: { display: 'flex', position: 'absolute', bottom: -60, left: 20, opacity: 0.07 } }, GhostDoorSmall),
  // Small icon top-right
  h('div', { style: { display: 'flex', position: 'absolute', top: 28, right: 28, opacity: 0.35 } }, SmallIcon),
  // Connection line
  h('div', {
    style: {
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%) rotate(-38deg)',
      width: 2, height: 240,
      background: 'linear-gradient(to bottom, rgba(232,149,42,0) 0%, rgba(232,149,42,0.4) 40%, rgba(232,149,42,0.4) 60%, rgba(232,149,42,0) 100%)',
      zIndex: 1,
    },
  }),
  // Amber dot
  h('div', {
    style: {
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 16, height: 16, background: '#E8952A', borderRadius: '50%',
      boxShadow: '0 0 0 4px rgba(232,149,42,0.25), 0 0 0 8px rgba(232,149,42,0.10)',
      zIndex: 5,
    },
  }),
  ArchitectCard,
  HomeownerCard,
);

// ── Root element ──────────────────────────────────────────────────────────────
const element = h('div', {
  style: {
    width: 1200, height: 630,
    display: 'flex',
    background: '#F7F4EE',
    fontFamily: '"DM Sans"',
    position: 'relative',
    overflow: 'hidden',
  },
},
  // Amber top bar
  h('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: '#E8952A', zIndex: 10 } }),
  // Panel divider
  h('div', { style: { position: 'absolute', top: 5, left: 559, width: 1, height: 625, background: 'rgba(26,92,107,0.10)', zIndex: 3 } }),
  LeftPanel,
  RightPanel,
);

// ── Render SVG with Satori ────────────────────────────────────────────────────
console.log('Generating OG image...');

const svg = await satori(element, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'DM Sans',          data: dmSans,               style: 'normal', weight: 400 },
    { name: 'DM Serif Display', data: dmSerifDisplay,       style: 'normal', weight: 400 },
    { name: 'DM Serif Display', data: dmSerifDisplayItalic, style: 'italic', weight: 400 },
  ],
});

// ── Convert SVG → PNG with @resvg/resvg-js ────────────────────────────────────
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
});
const png = resvg.render().asPng();

mkdirSync(resolve(__dirname, '../public'), { recursive: true });
writeFileSync(OUT_PATH, png);
console.log(`✓ OG image written to public/og-image.png (${Math.round(png.length / 1024)}KB)`);
