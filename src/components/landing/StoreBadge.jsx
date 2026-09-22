// No es un control: es texto informativo. Por eso va en un <p> y no en un
// <button>/<a> deshabilitado — no hay enlace muerto ni estado roto que anunciar.
export default function StoreBadge({ label }) {
  return (
    <p className="mt-5 flex cursor-default items-center justify-center gap-2 rounded-field border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/70 select-none">
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-cyan" />
      {label}
    </p>
  );
}
