function TrustedBrands() {
  const brands = [
    "YouTube",
    "Instagram",
    "Facebook",
    "LinkedIn",
    "X (Twitter)",
    "TikTok",
  ];

  return (
    <section className="border-y border-white/10 bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          Trusted for Managing Content Across
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-white"
            >
              {brand}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;