import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  schemaData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sardar Patel Institute of Technology - Premier Engineering College Mumbai",
  description = "SPIT is a leading autonomous engineering institute in Mumbai offering undergraduate and postgraduate programs in Computer, IT, Electronics & Telecom engineering with excellent placement records.",
  keywords = "SPIT, Sardar Patel Institute of Technology, engineering college Mumbai, computer engineering, information technology, electronics engineering, autonomous college, NAAC A+ grade, Mumbai university, engineering admission, placement",
  image = "https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png",
  url = "https://www.spit.ac.in",
  type = "website",
  author = "SPIT Mumbai",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  schemaData
}) => {
  const fullTitle = title.includes('SPIT') ? title : `${title} | SPIT Mumbai`;
  
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sardar Patel Institute of Technology",
    "alternateName": "SPIT Mumbai",
    "url": "https://www.spit.ac.in",
    "logo": "https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhavan's Campus, Munshi Nagar, Andheri (West)",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400058",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-22-2670-7440",
      "contactType": "customer service",
      "email": "info@spit.ac.in"
    },
    "sameAs": [
      "https://www.facebook.com/SPITCOLLEGE/",
      "https://www.linkedin.com/school/bhartiya-vidya-bhavans-sardar-patel-institute-of-technology-munshi-nagar-andheri-mumbai/",
      "https://x.com/bvbspit",
      "https://www.youtube.com/@SPITMedia-tu5rk"
    ],
    "foundingDate": "1995",
    "accreditedBy": {
      "@type": "Organization",
      "name": "NAAC",
      "description": "A+ Grade with CGPA 3.68"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "NAAC Accreditation",
        "credentialCategory": "A+ Grade"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "NBA Accreditation",
        "credentialCategory": "All Programs"
      }
    ]
  };

  const finalSchemaData = schemaData || defaultSchemaData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SPIT Mumbai" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@bvbspit" />
      <meta name="twitter:creator" content="@bvbspit" />

      {/* Article specific tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#4169E1" />
      <meta name="msapplication-TileColor" content="#4169E1" />
      <meta name="application-name" content="SPIT Mumbai" />
      <meta name="apple-mobile-web-app-title" content="SPIT Mumbai" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.123083;72.835634" />
      <meta name="ICBM" content="19.123083, 72.835634" />

      {/* Language and Content Tags */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://ui-avatars.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};