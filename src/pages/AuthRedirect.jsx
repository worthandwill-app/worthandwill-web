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
    <div style={{ padding: 32 }}>
      <h2>Abriendo Worthandwill…</h2>
      <p>Si no se abre automáticamente, regresa a la app.</p>
    </div>
  );
}
