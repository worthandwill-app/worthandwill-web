import { FEATURES, FEATURES_INTRO } from "../../content/landing";
import FeatureRow from "./FeatureRow";

export default function Features() {
  return (
    <section id="funciones" className="bg-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-navy uppercase sm:text-sm">
            {FEATURES_INTRO.kicker}
            <span aria-hidden="true" className="h-px w-10 bg-navy/25" />
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-5xl">
            {FEATURES_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {FEATURES_INTRO.subtitle}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {FEATURES.map((feature, index) => (
            <FeatureRow key={feature.id} feature={feature} flipped={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
