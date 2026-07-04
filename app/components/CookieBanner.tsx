import { useEffect, useState } from "react";
import { Link } from "react-router";
import { CONSENT_KEY, GA_ID } from "~/components/Gtm";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Baner zgody na cookies analityczne (Consent Mode v2).
// Pokazuje się do momentu podjęcia decyzji; wybór trzymamy w localStorage.
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // localStorage niedostępny (np. tryb prywatny) - nie pokazuj banera
    }
  }, []);

  function choose(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // ignoruj - decyzja zadziała do końca sesji
    }
    if (granted) {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookiebar" role="dialog" aria-label="Zgoda na cookies">
      <p>
        Używamy cookies wyłącznie do anonimowej statystyki odwiedzin (Google Analytics). Zgoda jest
        dobrowolna - bez niej strona działa normalnie.{" "}
        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
      </p>
      <div className="cookiebar-actions">
        <button className="btn sm" onClick={() => choose(true)}>
          Zgadzam się
        </button>
        <button className="btn ghost sm" onClick={() => choose(false)}>
          Odmawiam
        </button>
      </div>
    </div>
  );
}

// Przycisk zmiany decyzji (używany na stronie polityki prywatności).
export function ConsentResetButton() {
  return (
    <button
      className="btn ghost sm"
      onClick={() => {
        try {
          localStorage.removeItem(CONSENT_KEY);
        } catch {
          // brak localStorage - nic do zresetowania
        }
        window.location.reload();
      }}
    >
      Zmień decyzję o cookies
    </button>
  );
}
