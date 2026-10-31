import { education } from '@/data/education';
import Seo from '@/components/Seo';
function fmt(date?: string) {
  if (!date) return 'Présent';
  const [year, month] = date.split('-');
  return `${month}/${year}`;
}
export default function Education() {
  return (
    <section className="max-w-3xl space-y-9">
      <Seo
        title="Formations"
        description="Master à l’ENS Marrakech, licence d’éducation en informatique à l’ESEF Oujda et baccalauréat de BOUDAD Yasser."
      />
      <h1 className="text-3xl font-bold">Formations</h1>
      <ol className="ml-2 border-l-2">
        {education.map((e) => (
          <li
            key={e.school + e.start}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span
              className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"
              aria-hidden="true"
            />
            <p className="mb-2 text-sm font-semibold text-primary">
              {fmt(e.start)} — {fmt(e.end)}
            </p>
            <h2 className="text-xl font-semibold">{e.degree}</h2>
            {e.field && <p className="mt-2">{e.field}</p>}
            <p className="mt-2 text-muted-foreground">
              {e.school} · {e.location}
            </p>
            {e.highlights?.length && (
              <ul className="mt-3 list-disc pl-5 text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
