import { QRCodeSVG } from "qrcode.react";
import { DOWNLOAD, QR_URL } from "../../content/landing";
import StoreBadge from "./StoreBadge";

export default function Download() {
  return (
    <section
      id="descarga"
      className="relative overflow-hidden bg-linear-to-b from-navy to-navy-deep text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,196,236,0.18),transparent_65%)] blur-2xl"
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="mx-auto hidden w-fit rounded-card bg-white px-8 py-6 sm:block">
          <img src="/logo-ww.svg" alt="" aria-hidden="true" className="h-20 w-auto" />
        </div>

        <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-cyan uppercase sm:text-sm">
          {DOWNLOAD.kicker}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {DOWNLOAD.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {DOWNLOAD.subtitle}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2 sm:gap-6">
          {DOWNLOAD.stores.map((store) => (
            <div key={store.id} className="rounded-card border border-white/15 bg-white/[0.07] p-6 shadow-lg shadow-navy-deep/30">
              <div className="mx-auto w-fit rounded-field bg-white p-3">
                {/* fgColor navy, no cyan: los escáneres necesitan contraste alto
                    (navy sobre blanco 10.9:1, cyan sobre blanco 2.05:1). */}
                <QRCodeSVG
                  value={`${QR_URL}?store=${store.id}`}
                  size={148}
                  level="M"
                  marginSize={2}
                  bgColor="#FFFFFF"
                  fgColor="#2A3B69"
                  title={`Código QR hacia ${QR_URL}`}
                />
              </div>
              <StoreBadge label={store.label} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/70">{DOWNLOAD.footnote}</p>
      </div>
    </section>
  );
}
