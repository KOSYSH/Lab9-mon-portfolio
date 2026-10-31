import { projects } from '@/data/projects';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function Projects() {
  return (
    <section className="space-y-8">
      <Seo
        title="Projets"
        description="Projets web de BOUDAD Yasser : SOS Pièce Auto, Speaking Without Listening et gestion de rendez-vous dentaires."
      />
      <div>
        <h1 className="text-3xl font-bold">Projets</h1>
        <p className="mt-3 text-muted-foreground">
          Applications web, expériences interactives et gestion de données.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            role="article"
            aria-label={p.title}
            key={p.title}
            className="flex flex-col overflow-hidden"
          >
            {'image' in p && p.image && (
              <img
                src={p.image}
                alt="Aperçu du projet Speaking Without Listening"
                width="1440"
                height="1000"
                className="aspect-[16/10] w-full border-b object-cover"
              />
            )}
            <CardHeader>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {p.period}
              </p>
              <CardTitle className="text-xl">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm text-muted-foreground">{p.summary}</p>
              <ul className="my-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Badge variant="secondary">{t}</Badge>
                  </li>
                ))}
              </ul>
              {'link' in p && p.link && (
                <Button
                  variant="outline"
                  asChild
                  className="mt-auto self-start"
                >
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Voir le site ↗
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
