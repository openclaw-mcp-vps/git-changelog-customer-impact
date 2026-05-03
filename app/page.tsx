export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs with{' '}
          <span className="text-[#58a6ff]">customer impact scores</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repo, let AI analyze every commit, and publish polished customer-facing changelogs — complete with impact scores and adoption tracking.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['AI commit analysis','Impact scoring','Embeddable widgets','Webhook auto-updates','Adoption tracking','GitHub integration'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#8b949e]">
            {[
              'Unlimited repositories',
              'AI-powered commit categorization',
              'Customer impact scoring (1–10)',
              'Embeddable changelog widget',
              'Webhook auto-updates on push',
              'Feature adoption analytics',
              'Custom branding & domain',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI analyze commits?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">We parse your commit messages, diffs, and PR descriptions, then use an LLM to classify each change by type (feature, fix, perf, etc.) and assign a customer impact score from 1–10 based on scope and user-facing effect.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do webhooks keep changelogs up to date?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">You add our webhook URL to your GitHub repo. Every push to your main branch triggers an automatic re-analysis and changelog update — no manual work needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I embed the changelog on my own site?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Yes. Each project gets a lightweight embeddable widget (one script tag) that renders your latest changelog entries. It respects your brand colors and updates in real time.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  )
}
