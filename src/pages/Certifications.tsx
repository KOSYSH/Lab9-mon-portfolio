import { useMemo, useState } from 'react';
import { certifications } from '@/data/certifications';
import CertificationCard from '@/components/CertificationCard';
import Seo from '@/components/Seo';
import { Input } from '@/components/ui/input';
export default function Certifications() {
  const [q, setQ] = useState('');
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(' ')
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => (b.issueDate ?? '').localeCompare(a.issueDate ?? '')),
    [q],
  );
  return (
    <section className="space-y-8">
      <Seo
        title="Certifications"
        description="Formations et certifications de BOUDAD Yasser, filtrables par titre, organisme et compétence."
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Certifications</h1>
          <p className="mt-3 text-muted-foreground">
            Formations et certifications, des plus récentes aux plus anciennes.
          </p>
        </div>
        <div className="w-full sm:w-80">
          <label
            htmlFor="cert-filter"
            className="mb-2 block text-sm font-medium"
          >
            Filtrer les certifications
          </label>
          <Input
            id="cert-filter"
            placeholder="Titre, organisme ou compétence"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <p role="status" className="text-sm text-muted-foreground">
        {list.length} résultat{list.length > 1 ? 's' : ''}
      </p>
      {list.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CertificationCard key={c.title + (c.issueDate ?? '')} c={c} />
          ))}
        </div>
      ) : (
        <p>Aucune certification ne correspond à cette recherche.</p>
      )}
    </section>
  );
}
