import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRedirect from "./pages/AuthRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/reset-password" element={<AuthRedirect />} />
        <Route path="/create-password" element={<AuthRedirect />} />
        <Route path="/magic-link" element={<AuthRedirect />} />
        <Route path="/email-change" element={<AuthRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
