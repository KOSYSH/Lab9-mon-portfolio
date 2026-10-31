import type { Certification } from '@/data/certifications';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
function fmt(value: string) {
  const [year, month] = value.split('-');
  return month ? `${month}/${year}` : year;
}
export default function CertificationCard({ c }: { c: Certification }) {
  const expired =
    c.status === 'expired' ||
    Boolean(
      c.expiryDate && c.expiryDate < new Date().toISOString().slice(0, 7),
    );
  return (
    <Card
      role="article"
      aria-label={c.title}
      className={expired ? 'opacity-80' : ''}
    >
      <CardHeader>
        {c.image && (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width="256"
            height="256"
            loading="lazy"
            className="mb-4 h-24 w-24 rounded object-contain"
          />
        )}
        <CardTitle className="text-lg leading-snug">{c.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{c.issuer}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {c.issueDate ? fmt(c.issueDate) : 'Date non renseignée'}
          {c.expiryDate ? ` → ${fmt(c.expiryDate)}` : ''}
        </p>
        {c.credentialId && (
          <p className="mt-2 text-sm">Identifiant : {c.credentialId}</p>
        )}
        {c.skills?.length && (
          <p className="mt-3 text-sm">Compétences : {c.skills.join(', ')}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {c.tags?.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
          {expired && <Badge variant="outline">Expirée</Badge>}
          {c.status === 'revoked' && (
            <Badge variant="destructive">Révoquée</Badge>
          )}
        </div>
        {c.credentialUrl && (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-medium text-primary underline underline-offset-4"
          >
            Voir le certificat ↗
          </a>
        )}
        {c.documentUrl && (
          <a
            href={c.documentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-medium text-primary underline underline-offset-4"
          >
            Voir le certificat PDF ↗
          </a>
        )}
      </CardContent>
    </Card>
  );
}
