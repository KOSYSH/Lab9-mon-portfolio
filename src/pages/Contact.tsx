import { profile } from '@/data/profile';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
export default function Contact() {
  return (
    <section className="max-w-2xl space-y-8">
      <Seo
        title="Contact"
        description="Contacter BOUDAD Yasser par e-mail, téléphone, GitHub ou LinkedIn."
      />
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">
          Pour échanger autour d’un projet web, de l’informatique ou de
          l’éducation.
        </p>
      </div>
      <dl className="grid gap-6 rounded-xl border bg-card p-6 sm:grid-cols-[100px_1fr]">
        <dt className="text-sm text-muted-foreground">E-mail</dt>
        <dd className="break-words">
          <a
            href={`mailto:${profile.email}`}
            className="text-primary underline underline-offset-4"
          >
            {profile.email}
          </a>
        </dd>
        <dt className="text-sm text-muted-foreground">Téléphone</dt>
        <dd>
          <a href={`tel:${profile.telephone}`}>{profile.phone}</a>
        </dd>
        <dt className="text-sm text-muted-foreground">Localisation</dt>
        <dd>{profile.location}</dd>
      </dl>
      <div className="flex flex-wrap gap-3">
        {profile.socials.map((s) => (
          <Button key={s.label} variant="outline" asChild>
            <a href={s.href} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          </Button>
        ))}
      </div>
      <Separator />
      <Button asChild>
        <a href={profile.cv} download>
          Télécharger le CV
        </a>
      </Button>
    </section>
  );
}
