import { Helmet } from 'react-helmet-async';
import { seo } from '../seo-config';

const SEOHead = ({ 
  title = seo.title,
  description = seo.description,
  keywords = seo.keywords,
  ogImage = seo.ogImage,
  canonical = seo.canonical,
  noindex = false
}) => {
  const fullTitle = title === seo.title ? title : `${title} | LeadsTracker CRM`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : seo.robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:site_name" content={seo.businessName} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta */}
      <meta name="theme-color" content={seo.themeColor} />
      <meta httpEquiv="Content-Language" content={seo.language} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": seo.businessType,
          "name": seo.businessName,
          "applicationCategory": seo.applicationCategory,
          "operatingSystem": seo.operatingSystem,
          "description": description,
          "url": canonical,
          "author": {
            "@type": "Organization",
            "name": seo.author
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;