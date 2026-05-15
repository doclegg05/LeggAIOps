# Codex Operating Brief — Legg AI Ops Site

This file briefs any agent (Codex, Claude, or other) working in this directory. Read it before making changes.

---

## 1. What This Project Is

The marketing site for **Legg AI Ops**, a solo productized-service business run by Britt Legg. The active production build is a Next.js App Router app using Tailwind CSS.

**Public positioning:** "Modern tools, built fast — by a real person using real AI."

---

## 2. The Memory System (Important)

This site is paired with a knowledge vault at:

```
C:\Users\Instructor\Dev\Legg-AI-Ops-Vault\
```

**The vault is the source of truth.** When the site and the vault disagree on pricing, voice, or positioning, the vault wins and the site gets updated to match — never the reverse.

### Vault files you should reference before making site changes:

| Before you... | Read this |
|---------------|-----------|
| Change any price | `06-Pricing/current-packages.md` |
| Write or revise copy | `08-Business/voice.md` (tone rules, banned words) |
| Restructure service positioning | `08-Business/profile.md` |
| Write content targeted at a customer segment | `08-Business/customer.md` |
| Add a backlog item or check what's planned | `09-Site/backlog.md` |
| Deploy | `09-Site/deploy.md` (pre-deploy checklist) |
| Understand current site state | `09-Site/state.md` |

### Vault files you should write to after making changes:

| After you... | Update this |
|--------------|-------------|
| Ship a site edit | `09-Site/state.md` (note what changed and when) |
| Complete a backlog item | `09-Site/backlog.md` (move task to DONE with date) |
| Discover tech debt | `09-Site/state.md` §6 (Known Issues) |
| Make a non-obvious decision | Propose an entry for `02-Decisions.md`; append only when Britt explicitly says to record it |

---

## 3. Project Structure

```
Legg AI Ops/
├── src/app/page.tsx      ← active landing page
├── src/app/layout.tsx    ← root layout, metadata, analytics placeholder
├── src/app/globals.css   ← Tailwind entry and global styles
├── tailwind.config.ts    ← design tokens and Tailwind config
├── index.html            ← legacy static snapshot; not the active source
├── styles.css            ← legacy static styles; not the active source
├── AGENTS.md             ← this file
├── assets/               ← images, icons
├── docs/                 ← internal docs (not deployed)
├── output/               ← build artifacts
└── Legg AI Ops Front-end Design/   ← EARLIER iteration — do NOT edit
```

Edit the active Next.js files under `src/app/` and Tailwind config. The root `index.html` / `styles.css` files and `Legg AI Ops Front-end Design/` folder are prior iterations kept for reference.

---

## 4. Voice Rules (Quick Reference)

Full rules in `08-Business/voice.md`. The most violated:

**Never use these words in copy:**
- "Unlock," "supercharge," "elevate," "transform," "empower"
- "Solutions," "best-in-class," "cutting-edge," "next-gen"
- "AI-powered," "AI-driven," "revolutionary," "game-changing"
- "Reach out," "circle back," "touch base"
- "We" (it's a solo business — use "I" or service-passive)

**Use these patterns:**
- Pain-led headlines: *"You need more customers."* not *"Marketing services."*
- Specific numbers: *"$2,500"* not *"competitive pricing."*
- Plain verbs: *"I build"* not *"I deliver."*

---

## 5. Pricing Rules

- **All prices on the site must match `06-Pricing/current-packages.md` exactly.**
- **Never advertise an hourly rate.** Hourly is private fallback only.
- **Founding-client framing** is active: "First 5 founding clients — launch pricing." Don't change to fake urgency or fake scarcity.

---

## 6. Anti-Patterns

- Don't invent testimonials, case studies, client names, or stats. The site explicitly avoids fake social proof.
- Don't add another JavaScript framework on top of Next.js.
- Don't add new build tools unless there is a clear production need.
- Don't change pricing without updating the vault first.
- Don't refactor `styles.css` architecture unless asked.
- Don't restructure sections without confirming with Britt.

---

## 7. Common Tasks

### Apply a copy or pricing change
1. Read `06-Pricing/current-packages.md` and `08-Business/voice.md`
2. Make the edit in `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, or `tailwind.config.ts`
3. Run `npm run lint` and `npm run build`
4. Update `09-Site/state.md` §4 with what changed
5. If it was a backlog item, move it to DONE in `09-Site/backlog.md`

### Build a new section
1. Confirm scope with Britt
2. Check `08-Business/voice.md` for tone
3. Build using existing CSS patterns (look at `path-grid`, `example-grid`, `trust-grid` for reusable layouts)
4. Verify mobile responsiveness at 1020px and 720px breakpoints
5. Verify accessibility: heading hierarchy, ARIA where needed, focus styles
6. Update `09-Site/state.md`

### Deploy
1. Run the pre-deploy checklist in `09-Site/deploy.md` §5
2. Deploy via the host configured in `09-Site/state.md` §3
3. Verify Lighthouse scores ≥ 90 across all four categories
4. Update `09-Site/state.md` with deploy date and any notes

---

## 8. When You Don't Know Something

If a fact isn't in this file or in the vault, ask Britt directly. Do not synthesize an answer from training data. The memory system exists precisely so you can operate from current truth, not guesswork.
