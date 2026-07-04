const KEYWORDS = [
  "live painting",
  "malowanie na żywo",
  "live art",
  "portrety na zamówienie",
  "portret ze zdjęcia",
  "szybkie portrety gości",
  "ilustracje gości z wesela",
  "akwarela",
];

export function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-track">
        {[0, 1].map((pass) =>
          KEYWORDS.map((k) => (
            <div className="it" key={`${pass}-${k}`}>
              {k}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
