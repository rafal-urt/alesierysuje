// Google Tag Manager. Uzupełnij GTM_ID po założeniu kontenera
// (tagmanager.google.com) - bez ID komponenty nie renderują niczego.
export const GTM_ID = ""; // np. "GTM-XXXXXXX"

// GA4 podpięte bezpośrednio przez gtag.js. Jeśli kiedyś wejdzie GTM z tagiem GA4,
// usuń GA_ID (inaczej odsłony liczyłyby się podwójnie).
export const GA_ID = "G-K7VE32M4N8";

// Klucz w localStorage z decyzją użytkownika: "granted" | "denied"
export const CONSENT_KEY = "alesierysuje-cookie-zgoda";

export function GaScript() {
  if (!GA_ID) return null;
  // Consent Mode v2: start z odmową; wcześniejsza zgoda z localStorage
  // jest przywracana zanim poleci config (GA bez zgody działa bezcookiesowo).
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html:
            `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}` +
            `gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});` +
            `try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}` +
            `gtag('js', new Date());gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}

export function GtmScript() {
  if (!GTM_ID) return null;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
