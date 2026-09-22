import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AuthRedirect() {
  const location = useLocation();

  useEffect(() => {
    // Supabase manda todo en el hash
    const hash = window.location.hash; // #access_token=...&type=recovery

    if (!hash) return;

    // Ruta actual → deep link
    const path = location.pathname.replace("/", "");
    // reset-password | create-password | etc

    // Redirigir a la app
    window.location.href = `worthandwill://${path}${hash}`;
  }, [location]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-navy px-6 text-center text-white">
      <img
        src="/logo-ww-mark-white.svg"
        alt=""
        aria-hidden="true"
        className="h-14 w-auto"
      />
      <h1 className="text-2xl font-semibold tracking-tight">Abriendo Worth &amp; Will…</h1>
      <p className="max-w-sm text-white/75">
        Si no se abre automáticamente, regresa a la app desde tu pantalla de inicio.
      </p>
    </div>
  );
}
