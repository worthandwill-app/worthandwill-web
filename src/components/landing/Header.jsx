import { BRAND } from "../../content/landing";

// Navy sólido, el mismo #2A3B69 con el que arranca el hero: sin opacidad ni
// backdrop-blur, que era lo que lo aclaraba y lo despegaba del hero.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5 text-white">
          <img
            src="/logo-ww-mark-white.svg"
            alt=""
            aria-hidden="true"
            className="h-7 w-auto sm:h-8"
          />
          <span className="text-base font-semibold tracking-tight sm:text-lg">{BRAND}</span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-5">
          <a
            href="#funciones"
            className="hidden text-sm font-medium text-white/80 transition hover:text-white sm:block"
          >
            Funciones
          </a>
          <a
            href="#descarga"
            className="rounded-field bg-cyan px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-105"
          >
            Descargar
          </a>
        </nav>
      </div>
    </header>
  );
}
