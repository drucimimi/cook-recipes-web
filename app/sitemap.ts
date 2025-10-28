import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cook-recipes-app.webapps24.eu/',
      lastModified: new Date(),
    }
  ];
}