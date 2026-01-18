import React, { useEffect } from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shahnawas Adeel",
    "jobTitle": "Full-Stack Systems Engineer",
    "url": "https://adeel.dev",
    "email": "shahnawasadeel@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chittagong",
      "addressCountry": "Bangladesh"
    },
    "description": "Full-stack systems engineer and infrastructure architect specializing in React, Node.js, and scalable web applications.",
    "knowsAbout": [
      "React Development",
      "Node.js",
      "MongoDB",
      "Systems Architecture",
      "Web Development",
      "Full-Stack Engineering",
      "Infrastructure Design"
    ],
    "sameAs": [
      "https://github.com/mdadeel",
      "https://linkedin.com/in/shahnawazadeel",
      "https://twitter.com/shahnawas_adeel"
    ]
  };

  useEffect(() => {
    // Update page title dynamically
    document.title = "Shahnawas Adeel | Full-Stack Systems Engineer & Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = structuredData.description;
    }
  }, [structuredData.description]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}