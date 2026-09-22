import { DISTRIBUTION, DISTRIBUTION_ASSETS } from "../../content/landing";

// Ilustraciones de UI dibujadas en JSX/SVG, con datos de ejemplo genéricos.
// Se usan solo en Beneficiarios y Distribución: las capturas reales de esas dos
// pantallas muestran nombres de personas y no pueden ir a una página pública.
// Son decorativas —el texto de cada función describe lo mismo—, así que van
// aria-hidden para no duplicar el anuncio en lectores de pantalla.

// Tres tonos de la marca lo bastante separados entre sí, cada uno con el color
// de texto que sí pasa AA encima: blanco sobre los navy, tinta sobre el cyan
// (blanco sobre cyan es 2.05:1). El gris es "No distribuido", como en la app.
const SERIES = [
  { fill: "#2A3B69", ink: "#FFFFFF" },
  { fill: "#57689F", ink: "#FFFFFF" },
  { fill: "#36C4EC", ink: "#0F1626" },
];
const UNASSIGNED = "#C3C9D4";

function MockPanel({ tab, children }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-sm overflow-hidden rounded-card border border-ink/10 bg-surface-card shadow-card"
    >
      <div className="flex items-center justify-between bg-navy px-4 py-3">
        <span className="text-xs font-semibold tracking-wide text-white">{tab}</span>
        <span className="h-1 w-8 rounded-full bg-cyan" />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

const ASSIGNED = DISTRIBUTION.beneficiaries.reduce((t, b) => t + b.share, 0);
const DONUT_RADIUS = 54;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

// Offsets acumulados calculados una sola vez, fuera del render.
const DONUT_SEGMENTS = [
  ...DISTRIBUTION.beneficiaries.map((person, index) => ({
    name: person.name,
    color: SERIES[index].fill,
    share: person.share,
  })),
  { name: "No distribuido", color: UNASSIGNED, share: 100 - ASSIGNED },
].map((segment, index, all) => ({
  ...segment,
  length: (segment.share / 100) * DONUT_CIRCUMFERENCE,
  start:
    (all.slice(0, index).reduce((total, s) => total + s.share, 0) / 100) *
    DONUT_CIRCUMFERENCE,
}));

export function BeneficiariesMock() {
  return (
    <MockPanel tab="Distribución">
      <p className="mb-3 text-xs font-semibold text-ink-muted">
        Neto a distribuir: <span className="text-ink">{DISTRIBUTION.net}</span>
      </p>
      <ul className="flex flex-col gap-2.5">
        {DISTRIBUTION.beneficiaries.map((person, index) => (
          <li
            key={person.name}
            className="flex items-center justify-between gap-3 rounded-field border border-ink/10 bg-white px-3.5 py-3"
          >
            <span className="flex items-center gap-3">
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full text-[13px] font-semibold"
                style={{ backgroundColor: SERIES[index].fill, color: SERIES[index].ink }}
              >
                {person.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{person.name}</span>
                <span className="block text-xs text-ink-muted">
                  Distribución neta total: {person.amount}
                </span>
              </span>
            </span>
            <span className="text-sm font-semibold text-navy">{person.share}%</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-center gap-4">
        <svg viewBox="0 0 140 140" className="size-28 shrink-0" role="presentation">
          {DONUT_SEGMENTS.map((segment) => (
            <circle
              key={segment.name}
              cx="70"
              cy="70"
              r={DONUT_RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth="22"
              strokeDasharray={`${segment.length - 3} ${DONUT_CIRCUMFERENCE - segment.length + 3}`}
              strokeDashoffset={-segment.start}
              transform="rotate(-90 70 70)"
            />
          ))}
        </svg>
        <ul className="flex flex-col gap-1.5 text-[11px] font-medium text-ink-muted">
          {DONUT_SEGMENTS.map((segment) => (
            <li key={segment.name} className="flex items-center gap-1.5">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              {segment.name} {segment.share}%
            </li>
          ))}
        </ul>
      </div>
    </MockPanel>
  );
}

export function DistributionMock() {
  return (
    <MockPanel tab="Distribución por activo">
      <ul className="flex flex-col gap-3.5">
        {DISTRIBUTION_ASSETS.map((asset) => {
          const assigned = asset.splits.reduce((total, share) => total + share, 0);
          return (
            <li key={asset.name} className="rounded-field border border-ink/10 bg-white p-3.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="size-6 shrink-0 rounded-[0.45rem]"
                  style={{ backgroundColor: asset.color }}
                />
                <span className="text-sm font-semibold text-ink">{asset.name}</span>
                <span className="ml-auto text-xs text-ink-muted">{asset.category}</span>
              </div>
              <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-ink/10">
                {asset.splits.map((share, index) => (
                  <span
                    key={DISTRIBUTION.beneficiaries[index].name}
                    style={{ width: `${share}%`, backgroundColor: SERIES[index].fill }}
                  />
                ))}
                {assigned < 100 && (
                  <span style={{ width: `${100 - assigned}%`, backgroundColor: UNASSIGNED }} />
                )}
              </div>
              <div className="mt-2 flex flex-wrap justify-between gap-x-2 text-[11px] font-semibold text-ink-muted">
                {asset.splits.map((share, index) => (
                  <span key={DISTRIBUTION.beneficiaries[index].name}>
                    {DISTRIBUTION.beneficiaries[index].name} {share}%
                  </span>
                ))}
                <span>{assigned < 100 ? `Sin asignar ${100 - assigned}%` : "Repartido 100%"}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </MockPanel>
  );
}
