import Carousel from "../common/Carousel";

type Tech = { label: string; icon?: string; href?: string };

type Props = {
  title: string;
  description: string;
  images: string[];
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  techs?: Tech[];
}

export default function ProjectShowcase({ title, description, images, className = '', ctaHref, ctaLabel, techs = [] }: Props) {
  return (
    <div className={`rounded-2xl ring-1 ring-white/20 bg-white/10 backdrop-blur-md shadow-lg p-4 sm:p-6 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">{title}</h2>
      <Carousel images={images} className="rounded-xl" autoPlay={false} intervalMs={0} />
      <p className="mt-4 text-white/90">{description}</p>
      {techs.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techs.map((t, idx) => {
            const chip = (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white/90 ring-1 ring-white/25 shadow-sm text-xs sm:text-sm">
                {t.icon && <i className={`${t.icon} text-white/90`} aria-hidden="true" />}
                <span>{t.label}</span>
              </span>
            );
            return t.href ? (
              <a key={`${t.label}-${idx}`} href={t.href} target="_blank" rel="noopener noreferrer" title={t.label}>
                {chip}
              </a>
            ) : (
              <span key={`${t.label}-${idx}`}>{chip}</span>
            );
          })}
        </div>
      )}
      {ctaHref && (
        <div className="mt-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-sky-400 hover:from-pink-600 hover:to-sky-500 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all"
          >
            {ctaLabel ?? 'Ver sitio'} <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      )}
    </div>
  );
}
