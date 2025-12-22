import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vizgit.novtiq.com";

  const popularUsers = ["rody-huancas"];

  const userUrls = popularUsers.map((username) => ({
    url            : `${baseUrl}/${username}`,
    lastModified   : new Date(),
    changeFrequency: "weekly" as const,
    priority       : 0.8,
  }));

  return [
    {
      url            : baseUrl,
      lastModified   : new Date(),
      changeFrequency: "daily",
      priority       : 1,
    },
    ...userUrls,
  ];
}
