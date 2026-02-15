import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    image,
    url,
    type = 'website',
    keywords = ''
}) => {
    const siteTitle = 'Bell Needles';
    const siteDomain = 'https://bellneedles.com'; // Update with actual domain

    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Premium Sewing & Tailoring Solutions`;
    const fullDescription = description || 'Premium sewing and tailoring solutions for global professionals. Manufacturing excellence since 25+ years.';
    const fullImage = image ? (image.startsWith('http') ? image : `${siteDomain}${image}`) : `${siteDomain}/assets/images/logo.png`;
    const fullUrl = url ? `${siteDomain}${url}` : siteDomain;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={fullImage} />

            {/* Additional SEO */}
            <link rel="canonical" href={fullUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Bell Needles" />
        </Helmet>
    );
};

export default SEO;
