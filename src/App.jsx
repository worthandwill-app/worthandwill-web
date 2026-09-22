import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRedirect from "./pages/AuthRedirect";
import LandingPage from "./pages/LandingPage";

// Supabase entrega la sesión en el fragmento de la URL:
//   /#access_token=...&refresh_token=...&type=recovery
// y los fallos igual:
//   /#error=access_denied&error_code=otp_expired&error_description=...
// Si el fragmento trae alguna de esas llaves, "/" sigue siendo el puente al
// deep link de la app. Si no, "/" es la landing pública.
const AUTH_HASH_KEYS = [
  "access_token",
  "refresh_token",
  "type",
  "error",
  "error_code",
  "error_description",
];

function hasSupabaseAuthHash() {
  const raw = window.location.hash;
  if (raw.length < 2) return false;
  const params = new URLSearchParams(raw.slice(1));
  return AUTH_HASH_KEYS.some((key) => params.has(key));
}

// Se lee una sola vez, en render: el hash es fijo durante la carga de la página,
// así que los dos renders de StrictMode coinciden. La no-reactividad es
// intencional — la landing no debe convertirse en AuthRedirect al navegar por
// las anclas (#funciones, #descarga).
function RootRoute() {
  return hasSupabaseAuthHash() ? <AuthRedirect /> : <LandingPage />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        {/* Destino de los códigos QR. Sin esta ruta el QR cae en una página en blanco. */}
        <Route path="/proximamente" element={<LandingPage />} />
        <Route path="/reset-password" element={<AuthRedirect />} />
        <Route path="/create-password" element={<AuthRedirect />} />
        <Route path="/magic-link" element={<AuthRedirect />} />
        <Route path="/email-change" element={<AuthRedirect />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
