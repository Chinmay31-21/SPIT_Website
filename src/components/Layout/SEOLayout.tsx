import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import { SEOHead } from '../SEO/SEOHead';

interface SEOLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

export const SEOLayout: React.FC<SEOLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type,
  schemaData
}) => {
  return (
    <HelmetProvider>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
        schemaData={schemaData}
      />
      {children}
    </HelmetProvider>
  );
};