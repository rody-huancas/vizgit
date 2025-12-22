import { Metadata } from 'next';
import { Suspense } from 'react';
import ContributionsLoading from '@/components/ContributionsLoading';
import UserContributionsClient from '@/components/UserContributionsClient';

interface PageProps {
  params: Promise<{username: string}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params;
  
  return {
    title      : `Contribuciones de @${username} | vizgit`,
    description: `Visualiza las contribuciones de GitHub de @${username} en un hermoso heatmap personalizable. Analiza estadísticas, lenguajes de programación y patrones de actividad.`,
    keywords   : ['GitHub', 'contribuciones', 'heatmap', 'estadísticas', 'desarrollador', username],
    authors    : [{ name: 'vizgit' }],
    creator    : 'vizgit',
    publisher  : 'vizgit',
    robots     : {
      index    : true,
      follow   : true,
      googleBot: {
        index              : true,
        follow             : true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet'      : -1,
      },
    },
    openGraph  : {
      title      : `Contribuciones de @${username} | vizgit`,
      description: `Visualiza las contribuciones de GitHub de @${username} en un hermoso heatmap personalizable`,
      type       : 'profile',
      url        : `https://vizgit.novtiq.com/${username}`,
      siteName   : 'vizgit',
      images     : [
        {
          url   : `/api/og?username=${username}`,
          width : 1200,
          height: 630,
          alt   : `Contribuciones de GitHub de ${username}`,
        },
      ],
    },
    twitter: {
      card       : 'summary_large_image',
      title      : `Contribuciones de @${username} | vizgit`,
      description: `Visualiza las contribuciones de GitHub de @${username}`,
      images     : [`/api/og?username=${username}`],
      creator    : '@vizgit',
    },
    alternates: {
      canonical: `https://vizgit.novtiq.com/${username}`,
    },
  };
}

export default async function UsernamePage({ params }:  PageProps) {
  const { username } = await params;

  return (
    <Suspense fallback={<ContributionsLoading />}>
      <UserContributionsClient username={username} />
    </Suspense>
  );
}