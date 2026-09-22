import PhoneFrame from "./PhoneFrame";
import { BeneficiariesMock, DistributionMock } from "./Mockups";

function Visual({ feature }) {
  if (feature.visual === "phone") {
    return (
      <PhoneFrame
        src={feature.image.src}
        alt={feature.image.alt}
        width={feature.image.width}
        height={feature.image.height}
      />
    );
  }

  if (feature.visual === "screenshot") {
    return (
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-card border border-ink/10 bg-white shadow-card">
        <img
          src={feature.image.src}
          alt={feature.image.alt}
          width={feature.image.width}
          height={feature.image.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    );
  }

  if (feature.visual === "beneficiarios") return <BeneficiariesMock />;
  return <DistributionMock />;
}

export default function FeatureRow({ feature, flipped }) {
  // Strings literales completos, nunca `lg:order-${n}`: la detección de
  // contenido de Tailwind v4 escanea el texto fuente y no vería la clase.
  return (
    <article className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={flipped ? "lg:order-2" : undefined}>
        <span className="inline-flex items-center gap-2 rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan" />
          {feature.tab}
        </span>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
          {feature.body}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {feature.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
      {/* Pedestal: un halo suave detrás del visual para que el teléfono no
          flote sobre el fondo plano de la sección. */}
      <div className={`relative ${flipped ? "lg:order-1" : ""}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 size-[min(92%,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(42,59,105,0.09),transparent_68%)]"
        />
        <div className="relative">
          <Visual feature={feature} />
        </div>
      </div>
    </article>
  );
}
