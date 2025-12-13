
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_BACKGROUND_IMAGE } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  // Use the provided image, or fallback to the main site background
  const socialImage = image || SITE_BACKGROUND_IMAGE;

  return (
    <Helmet>
      <title>{title} | Olagbajumo Education Foundation</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={`${title} | OEF`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | OEF`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
};

export default SEO;
