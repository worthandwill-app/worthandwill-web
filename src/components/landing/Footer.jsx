import { BRAND, FOOTER } from "../../content/landing";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div className="flex items-center gap-2.5">
          <img src="/logo-ww-mark-white.svg" alt="" aria-hidden="true" className="h-6 w-auto" />
          <span className="text-sm font-semibold">{BRAND}</span>
        </div>
        <p className="text-sm text-white/70">{FOOTER.tagline}</p>
        <p className="text-sm text-white/70">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
