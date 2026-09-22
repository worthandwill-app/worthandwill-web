import { HERO } from "../../content/landing";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  return (
    // Arranca exactamente en --color-navy, el mismo del header, y oscurece hacia
    // abajo: así la unión con el header no tiene costura.
    <section
      id="inicio"
      className="relative overflow-hidden bg-linear-to-b from-navy via-navy to-navy-deep text-white"
    >
      {/* El brillo cyan vive detrás del teléfono, no en el borde superior, para
          no teñir la franja que toca el header. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(54,196,236,0.26),transparent_65%)] blur-2xl lg:top-1/4"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="motion-safe:animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-cyan uppercase sm:text-xs">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan" />
            {HERO.kicker}
          </p>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[3rem] xl:text-[3.4rem]">
            {HERO.titleLead}{" "}
            {/* En bloque para que el acento no parta a mitad de frase */}
            <span className="block text-cyan">{HERO.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {HERO.subtitle}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">{HERO.support}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#funciones"
              className="rounded-field bg-cyan px-6 py-3.5 text-center text-base font-semibold text-navy shadow-lg shadow-cyan/20 transition hover:brightness-105"
            >
              {HERO.primaryCta}
            </a>
            <a
              href="#descarga"
              className="rounded-field border border-white/25 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              {HERO.secondaryCta}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/65">{HERO.microcopy}</p>
        </div>
        <div className="relative lg:justify-self-end">
          <PhoneFrame
            priority
            src={HERO.image.src}
            alt={HERO.image.alt}
            width={HERO.image.width}
            height={HERO.image.height}
            className="ring-1 ring-white/10 lg:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
