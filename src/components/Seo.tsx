import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
export default function Seo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Helmet>
      <title>
        {title} — {profile.name}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
