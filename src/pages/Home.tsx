import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
export default function Home() {
  return (
    <section className="grid items-center gap-12 py-8 md:grid-cols-[1.4fr_1fr]">
      <Seo title="Accueil · Portfolio" description={profile.about} />
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
          Informatique & Éducation
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">{profile.role}</p>
        <p className="mt-6 max-w-xl">{profile.about}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/projects">Voir les projets</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
        <ul aria-label="Compétences" className="mt-8 flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <li key={s}>
              <Badge variant="secondary">{s}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <aside className="rounded-2xl border bg-card p-8">
        <Avatar className="mb-7 h-24 w-24">
          <AvatarFallback className="bg-secondary text-3xl font-bold text-primary">
            BY
          </AvatarFallback>
        </Avatar>
        <p className="text-xl font-semibold">Développer et transmettre.</p>
        <p className="mt-3 text-muted-foreground">
          Étudiant en master à l’ENS Marrakech, spécialisation Technologies
          Émergentes en Éducation.
        </p>
        <p className="mt-6 border-t pt-5 text-sm text-muted-foreground">
          {profile.location}
        </p>
      </aside>
    </section>
  );
}
