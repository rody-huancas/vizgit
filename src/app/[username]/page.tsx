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
    description: `Visualiza las contribuciones de GitHub de @${username} en un hermoso heatmap personalizable. `,
    openGraph  : {
      title      : `Contribuciones de @${username}`,
      description: `Visualiza las contribuciones de GitHub de @${username}`,
      type       : 'profile',
    },
    twitter: {
      card       : 'summary_large_image',
      title      : `Contribuciones de @${username}`,
      description: `Visualiza las contribuciones de GitHub de @${username}`,
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