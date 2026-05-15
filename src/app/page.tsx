import {
  ArrowDown,
  Check,
  ClipboardList,
  Gauge,
  GitBranch,
  Mail,
  Menu,
  PencilRuler,
  Rocket,
  Settings,
  Sprout,
  type LucideIcon,
} from 'lucide-react'

const email = 'hello@leggaiops.com'

const servicePaths: Array<{
  name: string
  icon: LucideIcon
  title: string
  body: string
  featured: string
  range: string
  tone: string
}> = [
  {
    name: 'Growth & Lead Gen',
    icon: Sprout,
    title: 'You need more customers.',
    body: "Your website doesn't convert. You have no lead magnet. People visit and bounce.",
    featured: 'Business Site — $2,500',
    range: 'From $350 to $3,500',
    tone: 'bg-surface border-line-strong',
  },
  {
    name: 'Ops & Automations',
    icon: Settings,
    title: 'Your team is drowning in busywork.',
    body: "You're copy-pasting between tabs. Spreadsheets everywhere. Reports eat all of Friday.",
    featured: 'Workflow Bundle — $1,200',
    range: 'From $450 to $9,500',
    tone: 'bg-[#fbfcff] border-[#9fb7ca]',
  },
  {
    name: 'Software & MVPs',
    icon: Rocket,
    title: 'You have an idea for a product.',
    body: "You've been talking about it for a year. You need to find out if it works before you raise money or quit your job.",
    featured: 'Lean MVP — $4,500',
    range: 'From $1,800 to $15,000',
    tone: 'bg-surface-warm border-[#d3b98c]',
  },
]

const examples = [
  {
    label: 'Business site',
    title: 'Service site that explains the offer and captures qualified inquiries.',
    body: 'Homepage, service page, contact flow, analytics, basic SEO, and owner handoff.',
  },
  {
    label: 'Lead-gen kit',
    title: 'Lead magnet or intake quiz connected to your follow-up process.',
    body: 'Landing page, form logic, email routing, simple CRM or Airtable capture, and tracking.',
  },
  {
    label: 'Friday report automation',
    title: 'Weekly reporting flow that stops eating half a day.',
    body: 'Pull data from sheets or tools, format the update, and send the right summary to the right people.',
  },
]

const leanMvpItems = [
  '1 primary user journey: signup -> core action -> outcome',
  'Up to 5 data entities',
  'Authentication + database + deployment',
  'No payments, no admin panel, no third-party integrations beyond email',
  '2-week build, 1 revision round',
]

const proofSlots = [
  {
    icon: Gauge,
    alt: 'Before/After website screenshots',
    left: 'Before',
    right: 'After',
    caption: 'Lighthouse 47 → 98. Conversion +2.3x.',
    hatch: false,
  },
  {
    icon: GitBranch,
    alt: 'Messy to clean process diagram',
    left: 'Messy',
    right: 'Clean',
    caption: 'Replaced a 7-step manual workflow. Saves ~12 hours/week.',
    hatch: true,
  },
  {
    icon: PencilRuler,
    alt: 'Wireframe to deployed product',
    left: 'Wireframe',
    right: 'Live MVP',
    caption: 'From sketch to live MVP in 14 days.',
    hatch: false,
  },
]

const faqs = [
  {
    question: 'How can you build this so fast?',
    answer:
      'Modern AI tools like Claude, Codex, and Cursor let one skilled operator do what used to take a team. They speed up the work, but the planning, judgment, testing, and handoff still matter.',
  },
  {
    question: 'Do I own the code?',
    answer:
      'Yes. Projects are deployed to your accounts when possible, and source is transferred at delivery.',
  },
  {
    question: "What if my project doesn't fit one of the three paths?",
    answer: "That's exactly what the $500 Project Roadmap is for.",
  },
  {
    question: 'What is not included?',
    answer:
      'Hosting, third-party software, paid APIs, stock content, and platform subscriptions. Most small builds land around $0 to $50 per month in outside tools.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. Retainers range from $200 to $1,500 per month depending on monitoring, updates, and support needs.',
  },
  {
    question: 'What if I am not happy?',
    answer:
      'Every project includes revision rounds. If we are not aligned after round 2, you keep what is built and we part ways cleanly.',
  },
]

function mailto(subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-green">
      {children}
    </p>
  )
}

function ButtonLink({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}) {
  const className =
    variant === 'primary'
      ? 'border-green bg-green text-white hover:border-green-dark hover:bg-green-dark'
      : 'border-ink bg-surface text-ink hover:border-blue hover:text-blue'

  return (
    <a
      href={href}
      className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-brand border px-[18px] py-3 font-bold leading-tight transition hover:-translate-y-px ${className}`}
    >
      {children}
    </a>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 px-[clamp(18px,4vw,48px)] py-3.5 backdrop-blur-xl">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-7 max-lg:grid-cols-[auto_auto]">
        <a
          href="#main"
          className="inline-flex min-w-max items-center gap-2.5"
          aria-label="Legg AI Ops home"
        >
          <span className="grid size-[34px] place-items-center rounded-md border border-ink bg-green font-bold text-white">
            L
          </span>
          <span className="font-bold">Legg AI Ops</span>
        </a>

        <nav
          className="flex justify-center gap-[clamp(18px,3vw,34px)] max-lg:hidden"
          aria-label="Primary"
        >
          {['Service Paths', 'Roadmap', 'Examples', 'Proof', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={mailto('Free 15-min call request')}
          className="justify-self-end rounded-brand border border-green px-3.5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-green hover:bg-green hover:text-white max-lg:hidden"
        >
          Book a free call
        </a>

        <details className="relative hidden justify-self-end max-lg:block">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-brand border border-line-strong bg-surface [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </summary>
          <nav
            className="absolute right-0 mt-3 grid min-w-56 gap-3 rounded-brand border border-line-strong bg-surface p-4 shadow-panel"
            aria-label="Mobile"
          >
            {['Service Paths', 'Roadmap', 'Examples', 'Proof', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted hover:text-ink"
              >
                {item}
              </a>
            ))}
            <a
              href={mailto('Free 15-min call request')}
              className="rounded-brand border border-green px-3 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.08em] text-green"
            >
              Book a free call
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="mx-auto grid max-w-site grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] items-stretch gap-[clamp(32px,6vw,80px)] px-[clamp(18px,4vw,48px)] py-[clamp(50px,7vw,88px)] pb-[clamp(42px,5vw,68px)] max-lg:grid-cols-1 max-md:py-10">
          <div className="self-center">
            <Label>Small organization builds - websites, automations, MVPs</Label>
            <h1 className="mt-4 max-w-[900px] text-[clamp(2.45rem,6vw,5.35rem)] font-bold leading-[0.98]">
              Modern tools, built fast by a real person using real AI.
            </h1>
            <p className="mt-6 max-w-[640px] text-[clamp(1.08rem,1.4vw,1.28rem)] text-ink-soft">
              Small businesses, consultants, and founders hire Legg AI Ops when
              they need something built and they need it done in weeks, not
              quarters.
            </p>
            <p className="mt-5 inline-flex w-fit rounded-full border border-[#d3b98c] bg-surface-warm px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#7a4a16]">
              Founding clients only - limited launch pricing
            </p>
            <div
              className="mt-7 flex flex-wrap gap-3 max-[430px]:[&>a]:w-full"
              role="group"
              aria-label="Primary calls to action"
            >
              <ButtonLink href="#service-paths">
                See Service Paths <ArrowDown className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={mailto('Free 15-min call request')}
                variant="secondary"
              >
                Book a Free 15-min Call
              </ButtonLink>
            </div>
          </div>

          <aside
            className="flex flex-col justify-between gap-5 rounded-brand border border-line-strong bg-surface p-[clamp(22px,3vw,34px)] shadow-panel max-md:p-5"
            aria-label="Engagement summary"
          >
            <div className="grid gap-2 border-b border-line pb-5">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                Typical path
              </span>
              <strong className="text-[clamp(1.3rem,2vw,1.7rem)] leading-tight">
                Call -&gt; Quote -&gt; Build -&gt; Ship
              </strong>
            </div>
            <dl className="grid grid-cols-2 gap-3.5 max-md:gap-2.5">
              {[
                ['Starting at', '$350'],
                ['Roadmap', '$500'],
                ['Quote', '24 hrs'],
                ['Ownership', 'Yours'],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  className="min-w-0 rounded-brand border border-line bg-surface-cool p-3.5"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    {term}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold leading-none max-md:text-xl">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-ink-soft">
              Fixed scope in writing before deposit. Source, accounts, and
              walkthrough are handed off at delivery.
            </p>
          </aside>
        </section>

        <section
          id="service-paths"
          className="mx-auto max-w-site border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]"
        >
          <div className="mb-[clamp(28px,4vw,44px)] grid gap-3">
            <Label>Service paths</Label>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
              Where are you stuck?
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4.5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {servicePaths.map((path) => (
              <article
                key={path.name}
                className={`flex min-h-[360px] flex-col gap-4.5 rounded-brand border p-6.5 max-md:min-h-0 ${path.tone}`}
              >
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  <path.icon className="size-4 text-green" aria-hidden="true" />
                  {path.name}
                </div>
                <h3 className="text-[clamp(1.45rem,2.1vw,2rem)] font-bold leading-[1.08]">
                  {path.title}
                </h3>
                <p className="text-ink-soft">{path.body}</p>
                <div className="mt-auto grid gap-1.5 border-t border-line pt-4">
                  <span className="text-lg font-bold">{path.featured}</span>
                  <strong className="font-bold italic text-green">
                    {path.range}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className="mx-auto grid max-w-site grid-cols-[1.1fr_0.9fr_auto] items-center gap-7 border-y border-line bg-ink px-[clamp(18px,4vw,48px)] py-[clamp(32px,5vw,52px)] text-white max-lg:max-w-none max-lg:grid-cols-1"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9ed0be]">
              Bridge product
            </p>
            <h2 className="mt-2 max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
              Not sure which path fits?
            </h2>
            <p className="mt-3 text-[clamp(1.4rem,2vw,1.8rem)] font-bold text-white">
              <ClipboardList className="mr-2 inline size-7 align-[-0.15em]" aria-hidden="true" />
              Project Roadmap — $500
            </p>
            <p className="mt-2 text-white/80">
              90-minute diagnostic. You leave with:
            </p>
          </div>
          <ul className="grid gap-2.5 text-white/80">
            {[
              'A fixed-price quote',
              'A clear architecture and timeline',
              'A scope document you can compare to other vendors',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-white" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="grid gap-3.5">
            <p className="max-w-[270px] text-white/80">
              The $500 applies to your project if you move forward.
            </p>
            <a
              href={mailto('Project Roadmap session')}
              className="inline-flex min-h-[46px] items-center justify-center rounded-brand border border-white bg-white px-[18px] py-3 font-bold text-ink"
            >
              Book a Roadmap Session
            </a>
          </div>
        </section>

        <section
          id="examples"
          className="bg-surface-cool border-y border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]"
        >
          <div className="mx-auto max-w-site">
            <div className="mb-[clamp(28px,4vw,44px)] grid gap-3">
              <Label>Examples of work</Label>
              <h2 className="max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
                Representative scopes small teams can actually use.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              {examples.map((example) => (
                <article
                  key={example.label}
                  className="min-h-[260px] rounded-brand border border-line-strong bg-surface p-6 max-md:min-h-0"
                >
                  <span className="mb-10 block font-mono text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                    {example.label}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">
                    {example.title}
                  </h3>
                  <p className="mt-3.5 text-ink-soft">{example.body}</p>
                </article>
              ))}

              <article className="rounded-brand border border-line-strong bg-surface p-6">
                <span className="mb-10 block font-mono text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Lean MVP
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Validates one core user workflow end-to-end.
                </h3>
                <ul className="mt-3.5 grid list-disc gap-2 pl-5 text-sm text-ink-soft">
                  {leanMvpItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-site border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]"
        >
          <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-10 max-lg:grid-cols-1">
            <div>
              <Label>Who builds this</Label>
              <h2 className="mt-3 max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
                Hi, I'm Britt.
              </h2>
              <div className="mt-5 grid gap-4 text-[clamp(1.08rem,1.4vw,1.28rem)] text-ink-soft">
                <p>
                  I'm an operations veteran and adult education instructor based in West Virginia.
                </p>
                <p>
                  I spent over a decade running multi-million-dollar businesses and directing corporate training programs, so I know exactly what it feels like when your team is drowning in busywork.
                </p>
                <p>
                  I started Legg AI Ops to build the automated workflows and software I wish I had back then—delivered fast, at a fixed price, and handed off so you can actually run them.
                </p>
              </div>
            </div>
            <div className="grid place-items-center rounded-brand border border-line-strong bg-surface-cool p-4 shadow-panel">
              <div className="flex aspect-[4/5] w-full max-w-[320px] items-center justify-center rounded-brand border-2 border-dashed border-line-strong bg-surface">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted text-center p-4">
                  [Britt's Photo Placeholder]
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]">
          <div className="grid grid-cols-[0.8fr_1.2fr] items-start gap-10 max-lg:grid-cols-1">
            <div>
              <Label>Why this works</Label>
              <h2 className="mt-3 max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
                AI-assisted, human-built.
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Modern tools let one skilled operator deliver what agencies bill
                weeks for. They are power tools, not replacements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
              {[
                ['Fixed prices, no surprises.', 'Quote in writing before deposit.'],
                ['You own everything.', 'Code, accounts, content, and deployed assets. No lock-in.'],
                ['Built to hand off.', 'Loom walkthrough included so you can run it.'],
                ['Practical stack.', 'Next.js, Claude, Codex, Make.com, Supabase, Airtable, and plain tools where plain tools win.'],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-brand border border-line-strong bg-surface p-5.5"
                >
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proof"
          className="mx-auto max-w-site border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]"
        >
          <div className="mb-[clamp(28px,4vw,44px)] grid gap-3">
            <Label>Proof without fake testimonials</Label>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
              Visual proof anchors for the work.
            </h2>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {proofSlots.map((slot) => (
              <figure
                key={slot.caption}
                className="m-0 overflow-hidden rounded-brand border border-line-strong bg-surface"
              >
                <div
                  className="grid min-h-[220px] grid-cols-2 gap-2.5 bg-proof-soft bg-surface-cool p-4.5"
                  role="img"
                  aria-label={slot.alt}
                >
                  {[slot.left, slot.right].map((label, index) => {
                    const isClean = index === 1
                    return (
                      <span
                        key={label}
                        className={`grid place-items-center rounded-brand border bg-white/75 font-bold ${
                          slot.hatch && index === 0
                            ? 'border-dashed border-line-strong bg-process-hatch'
                            : isClean
                              ? 'border-line-strong text-green'
                              : 'border-dashed border-line-strong text-ink-soft'
                        }`}
                      >
                        {isClean && (
                          <slot.icon className="mb-2 size-5" aria-hidden="true" />
                        )}
                        {label}
                      </span>
                    )
                  })}
                </div>
                <figcaption className="border-t border-line px-4.5 py-4 font-bold">
                  {slot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {['Next.js', 'Claude', 'Codex', 'Make.com', 'Supabase', 'Airtable'].map(
              (tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line-strong bg-surface px-2.5 py-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-soft"
                >
                  {tool}
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 max-w-[760px] border-l-4 border-green bg-surface p-5.5 text-ink-soft">
            <p>
              No invented logos or testimonials here. For each project, you can
              review the written scope, working build, source handoff, and
              walkthrough.
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="bg-surface-cool border-y border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)]"
        >
          <div className="mx-auto max-w-site">
            <div className="mb-[clamp(28px,4vw,44px)] grid gap-3">
              <Label>FAQ</Label>
              <h2 className="max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
                Common questions before we scope it.
              </h2>
            </div>
            <div className="grid gap-2.5">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-brand border border-line-strong bg-surface px-5.5 py-4.5"
                >
                  <summary className="cursor-pointer font-bold">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-[860px] text-ink-soft">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto grid max-w-site grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] items-start gap-[clamp(28px,5vw,64px)] border-t border-line px-[clamp(18px,4vw,48px)] py-[clamp(54px,8vw,96px)] max-lg:grid-cols-1"
        >
          <div>
            <Label>Ready to ship the thing you have been putting off?</Label>
            <h2 className="mt-3 max-w-[760px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02]">
              Start with a short note.
            </h2>
            <p className="mt-4 max-w-[560px] text-ink-soft">
              Use the form or email directly. A short description is enough:
              what you need, who it is for, and when you need it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 max-[430px]:[&>a]:w-full">
              <ButtonLink href={mailto('Free 15-min call request')}>
                <Mail className="size-4" aria-hidden="true" />
                Book a free call
              </ButtonLink>
              <ButtonLink href={mailto('Project Roadmap request')} variant="secondary">
                Start a Project Roadmap
              </ButtonLink>
            </div>
          </div>

          <form
            className="grid gap-4.5 rounded-brand border border-line-strong bg-surface p-[clamp(22px,3vw,32px)] shadow-panel"
            id="intake-form"
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Legg AI Ops inquiry"
            />
            <FormField label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
              />
            </FormField>
            <FormField label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
              />
            </FormField>
            <FormField label="Best fit" htmlFor="path">
              <select
                id="path"
                name="path"
                className="w-full rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
              >
                <option>Growth &amp; Lead Gen</option>
                <option>Ops &amp; Automations</option>
                <option>Software &amp; MVPs</option>
                <option>Project Roadmap</option>
                <option>Not sure yet</option>
              </select>
            </FormField>
            <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
              <FormField label="Budget range" htmlFor="budget">
                <select
                  id="budget"
                  name="budget"
                  className="w-full rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
                >
                  <option>$350-$1,000</option>
                  <option>$1,000-$3,500</option>
                  <option>$3,500-$9,500</option>
                  <option>$9,500-$15,000</option>
                  <option>Not sure yet</option>
                </select>
              </FormField>
              <FormField label="Timeline" htmlFor="timeline">
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
                >
                  <option>This month</option>
                  <option>Next 60 days</option>
                  <option>This quarter</option>
                  <option>Researching options</option>
                </select>
              </FormField>
            </div>
            <FormField label="What do you need built?" htmlFor="details">
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="A few sentences is enough."
                required
                className="w-full resize-y rounded-md border border-line-strong bg-white px-3 py-3 text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/20"
              />
            </FormField>
            <button
              className="mt-1 inline-flex min-h-[46px] w-full items-center justify-center rounded-brand border border-green bg-green px-[18px] py-3 font-bold text-white hover:bg-green-dark"
              type="submit"
            >
              Send inquiry
            </button>
            <p className="text-center font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Posts to a placeholder webhook for Airtable or Make.com wiring.
            </p>
          </form>
        </section>
      </main>

      <footer className="flex justify-between gap-6 border-t border-line bg-ink px-[clamp(18px,4vw,48px)] py-8.5 text-white max-md:flex-col">
        <div className="grid gap-1.5">
          <strong>Legg AI Ops</strong>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-white/60">
            Modern tools, built fast. Small organization service builds.
          </span>
        </div>
        <a className="underline underline-offset-4" href={`mailto:${email}`}>
          {email}
        </a>
      </footer>
    </>
  )
}

function FormField({
  children,
  htmlFor,
  label,
}: {
  children: React.ReactNode
  htmlFor: string
  label: string
}) {
  return (
    <div className="grid gap-1.5">
      <label className="font-bold" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  )
}
