import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  FileText,
  Globe2,
  LayoutGrid,
  Menu,
  Puzzle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="overflow-hidden bg-white">
      <header className="relative z-20 bg-navy text-white">
        <div className="mx-auto flex min-h-[86px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Whitepace home" onClick={closeMenu}>
            <LayoutGrid aria-hidden="true" className="h-8 w-8 text-white" strokeWidth={2.2} />
            <span className="font-display text-[25px] font-bold tracking-normal">whitepace</span>
          </a>

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Main navigation">
            <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/90 transition hover:text-white" href="#features">Products <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/90 transition hover:text-white" href="#work-together">Solutions <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/90 transition hover:text-white" href="#resources">Resources <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/90 transition hover:text-white" href="#plans">Pricing <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a href="#plans" className="rounded-md bg-sun px-7 py-3 font-semibold text-navy transition hover:bg-white">Login</a>
            <a href="#plans" className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 font-medium text-white transition hover:bg-white hover:text-navy">
              Try Whitepace free <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-white/15 bg-navy px-5 py-5 shadow-xl xl:hidden" aria-label="Mobile navigation">
            <a className="mobile-link" href="#features" onClick={closeMenu}>Products</a>
            <a className="mobile-link" href="#work-together" onClick={closeMenu}>Solutions</a>
            <a className="mobile-link" href="#resources" onClick={closeMenu}>Resources</a>
            <a className="mobile-link" href="#plans" onClick={closeMenu}>Pricing</a>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="#plans" onClick={closeMenu} className="rounded-md bg-sun px-5 py-3 font-semibold text-navy">Login</a>
              <a href="#plans" onClick={closeMenu} className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 font-medium text-white">Try Whitepace free <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero-pattern relative isolate overflow-hidden bg-navy text-white">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 lg:px-16 lg:py-24">
            <div className="rise-in relative z-10 max-w-[590px]">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-sky">A calmer way to work</p>
              <h1 className="font-display text-[42px] leading-[1.08] font-extrabold tracking-normal sm:text-[56px] lg:text-[64px]">
                Get More Done with <span className="whitespace-nowrap">whitepace</span>
              </h1>
              <p className="mt-6 max-w-[530px] text-base leading-7 text-white/85 sm:text-lg">
                Project management software that enables your team to collaborate, plan, analyze and manage everyday tasks.
              </p>
              <a href="#plans" className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-blue px-7 py-4 font-medium text-white transition hover:bg-white hover:text-navy">
                Try Whitepace free <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>

            <div className="rise-in relative mx-auto w-full max-w-[670px] [animation-delay:120ms]" aria-label="Whitepace project dashboard preview" role="img">
              <div className="absolute -inset-5 rounded-[32px] bg-blue/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-3 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-navy"><LayoutGrid className="h-4 w-4 text-blue" /> Workspace</div>
                  <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ffcf5c]" /><span className="h-2 w-2 rounded-full bg-[#8cce8d]" /><span className="h-2 w-2 rounded-full bg-[#ff8c84]" /></div>
                </div>
                <div className="grid min-h-[250px] grid-cols-[78px_1fr] sm:min-h-[326px] sm:grid-cols-[130px_1fr]">
                  <div className="border-r border-slate-100 py-5 pr-2 sm:pr-4">
                    <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">Workspace</p>
                    <div className="space-y-3 text-[10px] font-medium text-slate-500 sm:text-xs">
                      <p className="flex items-center gap-2 rounded bg-blue/10 px-2 py-2 text-navy"><LayoutGrid className="h-3.5 w-3.5 text-blue" /> Overview</p>
                      <p className="flex items-center gap-2 px-2"><FileText className="h-3.5 w-3.5" /> Projects</p>
                      <p className="flex items-center gap-2 px-2"><CircleCheck className="h-3.5 w-3.5" /> Tasks</p>
                    </div>
                    <div className="mt-8 space-y-2 px-2"><div className="h-1.5 w-full rounded-full bg-slate-100" /><div className="h-1.5 w-3/4 rounded-full bg-slate-100" /><div className="h-1.5 w-5/6 rounded-full bg-slate-100" /></div>
                  </div>
                  <div className="p-3 sm:p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div><p className="font-display text-sm font-bold text-ink sm:text-lg">Good morning, Alex</p><p className="mt-1 text-[9px] text-slate-400 sm:text-xs">Here&apos;s what&apos;s happening today</p></div>
                      <div className="h-7 w-7 rounded-full bg-[#ffd5bd] ring-2 ring-white sm:h-9 sm:w-9" />
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        ['Active projects', '08', 'bg-[#eaf3ff]'],
                        ['Tasks done', '24', 'bg-[#fff4d8]'],
                        ['On schedule', '92%', 'bg-[#e7f8f2]'],
                      ].map(([label, value, color]) => <div key={label} className={`${color} rounded p-2.5 sm:p-3`}><p className="text-[8px] text-slate-500 sm:text-[10px]">{label}</p><p className="mt-1 font-display text-base font-bold text-navy sm:text-xl">{value}</p></div>)}
                    </div>
                    <div className="rounded border border-slate-100 p-3 sm:p-4">
                      <div className="mb-3 flex items-center justify-between"><p className="text-[10px] font-bold text-ink sm:text-xs">My tasks</p><p className="text-[8px] text-blue sm:text-[10px]">View all</p></div>
                      {[
                        ['Finalize homepage', 'Today', 'bg-[#ffad9e]'],
                        ['Review project brief', 'Tomorrow', 'bg-[#81c2ff]'],
                        ['Update team roadmap', 'Fri, Jun 14', 'bg-[#9be0c3]'],
                      ].map(([task, date, dot]) => <div key={task} className="flex items-center gap-2 border-t border-slate-100 py-2.5"><span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} /><span className="flex-1 text-[8px] text-slate-600 sm:text-[10px]">{task}</span><span className="text-[8px] text-slate-400 sm:text-[10px]">{date}</span></div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative overflow-hidden bg-white">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-28">
            <div className="relative z-10 max-w-[600px]">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Project <span className="marker-underline">Management</span></h2>
              <p className="mt-6 max-w-[560px] text-base leading-7 text-muted sm:text-lg">Projects, notes, PDFs and audio files are all in one place. Create team workspaces and organize tasks by project, so everyone knows what comes next.</p>
              <a href="#work-together" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-navy">Get Started <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="absolute -inset-8 rounded-full bg-[#edf6ff] blur-3xl" />
              <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-[0_22px_60px_rgba(20,65,112,0.11)] sm:p-7">
                <div className="mb-6 flex items-center justify-between"><div><p className="font-display text-lg font-bold text-ink">Project board</p><p className="mt-1 text-xs text-muted">Brand refresh · 8 tasks</p></div><button type="button" aria-label="More project options" className="flex gap-1"><i className="h-1 w-1 rounded-full bg-slate-400" /><i className="h-1 w-1 rounded-full bg-slate-400" /><i className="h-1 w-1 rounded-full bg-slate-400" /></button></div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { title: 'To do', color: 'bg-[#ffe492]', tasks: ['Wireframe landing', 'Gather references'] },
                    { title: 'In progress', color: 'bg-blue', tasks: ['Visual direction', 'Plan content'] },
                    { title: 'Done', color: 'bg-[#67d7b1]', tasks: ['Project kickoff', 'Team briefing'] },
                  ].map((column) => <div key={column.title} className="min-w-0"><div className={`mb-3 h-1.5 rounded-full ${column.color}`} /><p className="mb-3 text-[10px] font-bold text-slate-600 sm:text-xs">{column.title}</p><div className="space-y-2">{column.tasks.map((task, index) => <div key={task} className="min-h-[82px] rounded border border-slate-100 bg-white p-2.5 shadow-sm sm:min-h-[100px] sm:p-3"><span className={`mb-2 block h-1 w-7 rounded-full ${index === 0 ? 'bg-[#a8d0ff]' : 'bg-[#ffe492]'}`} /><p className="text-[9px] leading-4 font-semibold text-ink sm:text-[11px]">{task}</p><div className="mt-3 flex items-center justify-between"><span className="h-4 w-4 rounded-full bg-[#ffd5bd]" /><span className="h-1 w-5 rounded bg-slate-100" /></div></div>)}</div></div>)}
                </div>
                <div className="mt-5 flex items-center gap-2 rounded bg-[#f7faff] px-3 py-2.5"><Sparkles aria-hidden="true" className="h-4 w-4 text-blue" /><p className="text-[10px] text-muted sm:text-xs">Your team is right on track this week.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work-together" className="bg-white">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-20 sm:px-8 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16 lg:pb-28">
            <div className="relative mx-auto flex aspect-square w-full max-w-[530px] items-center justify-center">
              <div className="orbit-ring absolute h-[88%] w-[88%]" />
              <div className="orbit-ring absolute h-[62%] w-[62%]" />
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-[0_18px_70px_rgba(37,88,150,0.16)] sm:h-36 sm:w-36">
                <LayoutGrid aria-hidden="true" className="h-14 w-14 text-blue sm:h-[72px] sm:w-[72px]" strokeWidth={2.5} />
              </div>
              {[
                ['00783be9bef8783d0559869721dee672f6151698.png', 'top-[8%] left-[12%]'],
                ['13d1f8e83dbc0f34bfd2aed999007fa6b98dad04.png', 'top-[10%] right-[8%]'],
                ['1ffc3432f1b9162386ccc9e2100b78f333fed351.png', 'right-[1%] top-[47%]'],
                ['728c3b1d33fe647a46f9bf668322f8c1d94ed937.png', 'bottom-[8%] right-[19%]'],
                ['b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png', 'bottom-[13%] left-[13%]'],
                ['8c34c8db075e7a56c830ab69da68db646fe34643.png', 'left-[1%] top-[48%]'],
              ].map(([image, position]) => <img key={image} className={`absolute ${position} h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-md sm:h-[58px] sm:w-[58px]`} src={`/assets/${image}`} alt="Team member" />)}
              <span className="absolute left-[27%] top-[24%] h-3 w-3 rounded-full bg-[#ffcd62]" /><span className="absolute right-[25%] bottom-[21%] h-2.5 w-2.5 rounded-full bg-[#18c999]" />
            </div>
            <div className="max-w-[570px]">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Work <span className="marker-underline">together</span></h2>
              <p className="mt-6 text-base leading-7 text-muted sm:text-lg">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
              <a href="#plans" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-navy">Try it now <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy text-white">
          <div className="hero-pattern absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-16 lg:py-28">
            <div className="relative z-10 max-w-[620px]">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Use as <span className="marker-underline">Extension</span></h2>
              <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
              <a href="#plans" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-white hover:text-navy">Let&apos;s Go <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
            <div className="relative mx-auto flex min-h-[300px] w-full max-w-[540px] items-center justify-center sm:min-h-[390px]">
              <div className="absolute h-[75%] w-[76%] rounded-[36%] bg-white/10 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-3 sm:gap-5">
                <div className="flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-xl bg-white text-navy shadow-xl sm:h-44 sm:w-44"><Puzzle className="h-12 w-12 text-blue sm:h-16 sm:w-16" /><span className="text-xs font-bold">Web clipper</span></div>
                <div className="mt-9 flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-xl bg-[#e8f4ff] text-navy shadow-xl sm:mt-12 sm:h-44 sm:w-44"><FileText className="h-11 w-11 text-blue sm:h-14 sm:w-14" /><span className="text-xs font-bold">Saved notes</span></div>
                <div className="-mt-5 flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-xl bg-[#ffe492] text-navy shadow-xl sm:-mt-8 sm:h-44 sm:w-44"><ShieldCheck className="h-11 w-11 text-navy sm:h-14 sm:w-14" /><span className="text-xs font-bold">Your workspace</span></div>
                <div className="flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-xl bg-blue text-white shadow-xl sm:h-44 sm:w-44"><Globe2 className="h-11 w-11 sm:h-14 sm:w-14" /><span className="text-xs font-bold">Share anywhere</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="bg-white">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-16 lg:py-28">
            <img className="mx-auto w-full max-w-[520px]" src="/assets/6320fb2540c65b1fa73b9bd499c4122aba19d21f.png" alt="Two teammates customising a shared project workspace" />
            <div className="max-w-[610px]">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Customise it to <span className="marker-underline">your needs</span></h2>
              <p className="mt-6 text-base leading-7 text-muted sm:text-lg">Customise the app with plugins, custom themes and multiple text editors. Create your own scripts and plugins to make whitepace work the way your team does.</p>
              <a href="#plans" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-navy">Let&apos;s Go <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
          </div>
        </section>

        <section id="plans" className="bg-[#f8fbff]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Choose Your <span className="marker-underline">Plan</span></h2>
              <p className="mx-auto mt-5 max-w-[760px] text-base leading-7 text-muted sm:text-lg">Whether you&apos;re a solo creator, a small team or a growing organisation, there&apos;s a whitepace plan for you.</p>
            </div>
            <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
              {[
                { name: 'Free', price: '$0', note: 'Forever free', featured: false, description: 'Capture ideas and keep your notes close.', features: ['Capture ideas and find them quickly', 'Sync across all your devices', 'Share notes with friends and family', '25 MB maximum note size'] },
                { name: 'Personal', price: '$3.99', note: 'per month', featured: true, description: 'Keep your work organised and in sync.', features: ['Everything in Free, plus', 'Sync unlimited devices', 'Access notes offline', 'Annotate PDFs and images', '200 MB maximum note size'] },
                { name: 'Organisation', price: '$7.99', note: 'per member / month', featured: false, description: "Bring your team's work together.", features: ['Everything in Personal, plus', 'Team collaboration spaces', 'Manage team members', 'Single sign-on and admin tools', '20 GB maximum note size'] },
              ].map((plan) => <article key={plan.name} className={`flex flex-col rounded-md border p-6 sm:p-8 ${plan.featured ? 'border-navy bg-navy text-white shadow-[0_24px_70px_rgba(4,56,115,0.18)] md:scale-[1.03] md:py-11' : 'border-[#ffe492] bg-white text-ink'}`}>
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className={`mt-4 font-display text-4xl font-extrabold ${plan.featured ? 'text-sun' : 'text-ink'}`}>{plan.price}</p>
                <p className={`mt-2 text-xs ${plan.featured ? 'text-white/70' : 'text-muted'}`}>{plan.note}</p>
                <p className={`mt-5 min-h-12 text-sm leading-6 ${plan.featured ? 'text-white/80' : 'text-muted'}`}>{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-3.5">
                  {plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-5"><Check aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-sun' : 'text-navy'}`} /><span>{feature}</span></li>)}
                </ul>
                <a href="#start" className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-blue text-white hover:bg-white hover:text-navy' : 'border border-[#ffe492] text-ink hover:border-navy hover:bg-navy hover:text-white'}`}>Get Started <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy text-white">
          <div className="hero-pattern absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-28">
            <div className="relative z-10 max-w-[560px]">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Your work, <span className="marker-underline">everywhere</span> you are</h2>
              <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">Access your notes from any device, wherever you are. whitepace keeps your work in sync, so you can pick up right where you left off.</p>
              <a href="#start" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-white hover:text-navy">Try it now <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-7">
              <div className="flex items-center gap-2 border-b border-white/15 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8c84]" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffcf5c]" /><span className="h-2.5 w-2.5 rounded-full bg-[#8cce8d]" /><div className="ml-auto h-2 w-20 rounded bg-white/20" /></div>
              <div className="grid grid-cols-[1fr_0.72fr] gap-3 pt-5 sm:gap-5 sm:pt-7">
                <div className="rounded-lg bg-white p-4 text-navy sm:p-6"><div className="mb-5 flex items-center gap-2"><FileText className="h-4 w-4 text-blue" /><span className="text-xs font-bold">Weekly notes</span></div><div className="h-2 w-4/5 rounded bg-slate-100" /><div className="mt-2 h-2 w-full rounded bg-slate-100" /><div className="mt-2 h-2 w-3/4 rounded bg-slate-100" /><div className="mt-5 rounded bg-[#f3f8ff] p-3"><div className="mb-2 h-2 w-1/3 rounded bg-blue/50" /><div className="h-2 w-full rounded bg-slate-100" /><div className="mt-2 h-2 w-5/6 rounded bg-slate-100" /></div><div className="mt-5 flex gap-2"><span className="h-6 w-6 rounded-full bg-[#ffd5bd]" /><span className="h-6 w-6 rounded-full bg-[#9bd9c4]" /><span className="h-6 w-6 rounded-full bg-[#a7cefc]" /></div></div>
                <div className="flex flex-col gap-3"><div className="flex-1 rounded-lg bg-[#dcecff] p-3 text-navy sm:p-4"><Globe2 className="h-5 w-5 text-blue" /><p className="mt-7 text-[10px] font-bold sm:text-xs">Synced worldwide</p><div className="mt-2 h-1.5 w-4/5 rounded-full bg-blue/30"><div className="h-full w-4/5 rounded-full bg-blue" /></div></div><div className="rounded-lg bg-[#ffe492] p-3 text-navy sm:p-4"><div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /><span className="text-[10px] font-bold sm:text-xs">Always protected</span></div></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-16 lg:py-28">
            <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">100% <span className="marker-underline">your data</span></h2>
            <p className="mx-auto mt-5 max-w-[760px] text-base leading-7 text-muted sm:text-lg">Your notes belong to you. With clear privacy controls and secure cloud syncing, your team can focus on the work that matters.</p>
            <div className="relative mx-auto mt-12 flex min-h-[220px] max-w-[900px] items-center justify-center sm:mt-16 sm:min-h-[300px]">
              <div className="absolute h-[180px] w-[180px] rounded-full border border-blue/20 sm:h-[260px] sm:w-[260px]" /><div className="absolute h-[130px] w-[130px] rounded-full border border-blue/30 sm:h-[190px] sm:w-[190px]" />
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy text-white shadow-xl sm:h-28 sm:w-28"><ShieldCheck aria-hidden="true" className="h-10 w-10 sm:h-14 sm:w-14" /></div>
              <div className="absolute left-[16%] top-[18%] flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf3ff] text-blue sm:left-[25%] sm:h-16 sm:w-16"><FileText aria-hidden="true" /></div>
              <div className="absolute right-[15%] top-[20%] flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4d8] text-navy sm:right-[24%] sm:h-16 sm:w-16"><CircleCheck aria-hidden="true" /></div>
              <div className="absolute bottom-[8%] left-[28%] flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f8f2] text-[#14a878] sm:bottom-[6%] sm:left-[36%] sm:h-16 sm:w-16"><LockIcon /></div>
              <div className="absolute right-[28%] bottom-[8%] flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0ed] text-[#e96b58] sm:right-[36%] sm:bottom-[6%] sm:h-16 sm:w-16"><Globe2 aria-hidden="true" /></div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-[#f8fbff]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">Our sponsors</h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-7 text-xl font-bold text-navy sm:mt-14 sm:gap-x-20 sm:text-2xl">
              <span className="inline-flex items-center gap-2"><span className="text-3xl text-[#333]">●</span> Apple</span>
              <span className="inline-flex items-center gap-2 font-display tracking-wide"><span className="text-3xl text-[#e94b35]">◉</span> microsoft</span>
              <span className="inline-flex items-center gap-2"><span className="text-3xl text-[#4f9cf9]">◈</span> Slack</span>
              <span className="inline-flex items-center gap-2 font-display"><span className="text-3xl text-[#4285f4]">G</span> Google</span>
            </div>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[850px] text-center">
              <h2 className="font-display text-[38px] leading-[1.12] font-extrabold tracking-normal sm:text-5xl lg:text-[58px]">Work with Your Favorite Apps Using <span className="marker-underline">whitepace</span></h2>
              <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-white/80 sm:text-lg">Bring the tools you already love into one connected workspace. Spend less time switching tabs and more time making progress.</p>
              <a href="#start" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-6 py-4 font-medium text-white transition hover:bg-white hover:text-navy">Read more <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
            <div className="mx-auto mt-12 flex max-w-[840px] flex-wrap items-center justify-center gap-4 sm:mt-16 sm:gap-8">
              {[
                ['W', 'bg-white text-blue'], ['S', 'bg-[#36c5f0] text-white'], ['G', 'bg-white text-[#4285f4]'], ['N', 'bg-[#e5e7eb] text-ink'], ['T', 'bg-[#66d9a8] text-navy'],
              ].map(([letter, style]) => <div key={letter} className={`flex h-14 w-14 items-center justify-center rounded-xl text-xl font-extrabold shadow-lg sm:h-[76px] sm:w-[76px] sm:text-2xl ${style}`}>{letter}</div>)}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
            <h2 className="text-center font-display text-[38px] leading-[1.12] font-extrabold sm:text-5xl lg:text-[58px]">What Our Clients <span className="marker-underline">Says</span></h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
              {[
                { image: '00783be9bef8783d0559869721dee672f6151698.png', name: 'Oberon Shaw', role: 'Head of Talent, Invision', quote: 'Whitepace makes it easy to keep our ideas moving. I can find what I need, share it with the team and get back to the work.' },
                { image: '13d1f8e83dbc0f34bfd2aed999007fa6b98dad04.png', name: 'Megan Smith', role: 'Product Designer', quote: 'The simple workspace keeps every project clear. We spend less time looking for notes and more time making things together.' },
                { image: '728c3b1d33fe647a46f9bf668322f8c1d94ed937.png', name: 'Thomas Wayne', role: 'Creative Director', quote: 'Our whole team can stay on the same page, wherever we are. Whitepace feels thoughtful, focused and genuinely useful.' },
              ].map((testimonial, index) => <article key={testimonial.name} className={`flex flex-col rounded-md p-6 sm:p-8 ${index === 1 ? 'bg-navy text-white shadow-xl' : 'border border-slate-100 bg-white text-ink shadow-[0_12px_42px_rgba(31,65,105,0.09)]'}`}>
                <div className="mb-5 flex gap-1 text-[#ffbe3d]" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <span key={star} aria-hidden="true">★</span>)}</div>
                <p className={`flex-1 text-sm leading-6 ${index === 1 ? 'text-white/90' : 'text-muted'}`}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div className={`my-6 h-px ${index === 1 ? 'bg-white/20' : 'bg-slate-200'}`} />
                <div className="flex items-center gap-3"><img className="h-12 w-12 rounded-full object-cover" src={`/assets/${testimonial.image}`} alt="" /><div><p className="font-display text-sm font-bold">{testimonial.name}</p><p className={`mt-1 text-xs ${index === 1 ? 'text-white/65' : 'text-muted'}`}>{testimonial.role}</p></div></div>
              </article>)}
            </div>
            <div className="mt-8 flex justify-center gap-3" aria-label="Testimonial pages"><span className="h-2.5 w-2.5 rounded-full bg-[#c4ddfb]" /><span className="h-2.5 w-2.5 rounded-full bg-blue" /><span className="h-2.5 w-2.5 rounded-full bg-[#c4ddfb]" /></div>
          </div>
        </section>

        <section id="start" className="bg-navy text-white">
          <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-sky">Make room for good work</p>
            <h2 className="font-display text-[40px] leading-[1.1] font-extrabold sm:text-6xl">Try Whitepace today</h2>
            <p className="mx-auto mt-5 max-w-[660px] text-base leading-7 text-white/85 sm:text-lg">Get started with a workspace that helps your team stay organised and move forward together.</p>
            <a href="#home" className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue px-7 py-4 font-medium text-white transition hover:bg-white hover:text-navy">Try it free <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            <p className="mt-5 text-sm text-white/65">On a big team? Contact sales for a tailored plan.</p>
            <div className="mt-10 flex justify-center gap-4 text-sun"><Sparkles aria-hidden="true" /><Puzzle aria-hidden="true" /><Globe2 aria-hidden="true" /></div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-7 sm:px-8 lg:px-16">
          <div className="grid gap-10 border-b border-white/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1.1fr]">
            <div className="max-w-[260px]"><a href="#home" className="flex items-center gap-2.5"><LayoutGrid aria-hidden="true" className="h-7 w-7" /><span className="font-display text-2xl font-bold">whitepace</span></a><p className="mt-5 text-sm leading-6 text-white/70">Make your work and life easier with a little white space.</p></div>
            {[
              ['Product', 'Overview', 'Pricing', 'Integrations', 'Features'],
              ['Resources', 'Blog', 'Guides', 'Help center', 'Webinars'],
              ['Company', 'About us', 'Careers', 'Contact', 'Partners'],
            ].map(([heading, ...links]) => <div key={heading}><h3 className="font-display text-sm font-bold">{heading}</h3><ul className="mt-4 space-y-3">{links.map((link) => <li key={link}><a className="text-sm text-white/70 transition hover:text-sun" href="#resources">{link}</a></li>)}</ul></div>)}
            <div><h3 className="font-display text-lg font-bold">Get more done with whitepace</h3><p className="mt-3 text-sm leading-6 text-white/70">Connect your team and turn ideas into progress.</p><a className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-navy" href="#start">Try it free <ArrowRight aria-hidden="true" className="h-4 w-4" /></a></div>
          </div>
          <div className="flex flex-col gap-4 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Whitepace LLC.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2"><a href="#home" className="hover:text-white">Terms &amp; privacy</a><a href="#home" className="hover:text-white">Security</a><a href="#home" className="hover:text-white">Status</a></div>
            <div className="flex gap-4 font-bold text-white"><a href="#home" aria-label="Facebook" className="hover:text-sun">f</a><a href="#home" aria-label="X" className="hover:text-sun">𝕏</a><a href="#home" aria-label="LinkedIn" className="hover:text-sun">in</a></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LockIcon() {
  return <ShieldCheck aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
}

export default App
