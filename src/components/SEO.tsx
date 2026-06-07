import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  schema?: any;
  jsonLd?: any;
  keywords?: string[];
}

export function SEO({ title, description, url, schema, jsonLd, keywords }: SEOProps) {
  const location = useLocation();
  const currentUrl = url || location.pathname;
  const structuredData = schema || jsonLd;

  return (
    <Helmet>
      <title>{title} | Rural Utility Cost</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={`https://ruralutilitycost.com${currentUrl}`} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
