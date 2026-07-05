// Eventy GA4 (gtag). Dziala tylko w przegladarce i tylko gdy gtag jest zaladowany
// (zgoda cookies) - w innym wypadku cichy no-op.
export function track(name: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag("event", name, params);
}
