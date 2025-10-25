const TECHS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'PHP',
  'MySQL',
  'Bootstrap',
  'GitHub',
];

function Chip({ label }: { label: string }) {
  return (
    <span className="shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 text-white/90 ring-1 ring-white/25 shadow-sm text-xs sm:text-sm md:text-base">
      {label}
    </span>
  );
}

export default function TechBanner({ compact = false }: { compact?: boolean }) {
  const wrapper = compact
    ? "mt-0 mb-0 w-full "
    : "hidden sm:block  mb-8 w-full";
  const box = compact
    ? "relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 w-full"
    : "relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 w-full max-w-screen-xl mx-auto";
  const pad = compact ? "py-1.5 sm:py-2" : "py-2 sm:py-3 lg:py-4";

  return (
    <div className={wrapper}>
      <div className={box}>
        <div className={`marquee ${pad}`}>
          <div className="marquee-track flex items-center gap-3 sm:gap-5 lg:gap-6 whitespace-nowrap px-2 sm:px-4 lg:px-6">
            {TECHS.map((t) => (
              <Chip key={`a-${t}`} label={t} />
            ))}
            {TECHS.map((t) => (
              <Chip key={`b-${t}`} label={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
