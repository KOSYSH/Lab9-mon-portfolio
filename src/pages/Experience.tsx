import { experience } from '@/data/experience';
import Seo from '@/components/Seo';
export default function Experience() {
  return (
    <section className="max-w-3xl space-y-9">
      <Seo
        title="Parcours"
        description="Expériences pédagogiques et administratives de BOUDAD Yasser dans les établissements scolaires d’Oujda."
      />
      <div>
        <h1 className="text-3xl font-bold">Parcours</h1>
        <p className="mt-3 text-muted-foreground">
          Enseignement de l’informatique, soutien scolaire et administration.
        </p>
      </div>
      <ol className="ml-2 border-l-2">
        {experience.map((e) => (
          <li key={e.date} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"
              aria-hidden="true"
            />
            <p className="mb-2 text-sm font-semibold text-primary">{e.date}</p>
            <h2 className="text-xl font-semibold">{e.title}</h2>
            <p className="mt-1 text-muted-foreground">{e.organization}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
