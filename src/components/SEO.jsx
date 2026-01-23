import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    openGraph,
    schema
}) => {
    const siteTitle = "Heartstrings & Braces | Dr. Krutika Patankar";
    const fullTitle = title ? `${title} | Heartstrings & Braces` : siteTitle;
    const metaDescription = description || "Evidence-based orthodontics for all ages, delivered with clinical precision and emotional warmth.";
    const currentUrl = canonical || window.location.href;
    const metaKeywords = keywords || "orthodontist, braces, invisible aligners, invisalign, mumbai, dentist, smile transformation";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={openGraph?.type || "website"} />
            <meta property="og:title" content={openGraph?.title || fullTitle} />
            <meta property="og:description" content={openGraph?.description || metaDescription} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Heartstrings & Braces" />
            <meta property="og:image" content={openGraph?.image || "https://heartstringsbraces.com/og-social-share.jpg"} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={openGraph?.image || "https://heartstringsbraces.com/og-social-share.jpg"} />

            {/* Structured Data (Schema.org) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
