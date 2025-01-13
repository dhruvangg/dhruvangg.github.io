const Meta = (data) => {
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${data.meta.description}" />
        <meta name="keywords" content="${data.meta.keywords}" />
        <meta name="author" content="${data.meta.author}" />
        <meta name="language" content="English" />
        <meta name="copyright" content="${data.meta.author}" />
        <meta name="publisher" content="${data.meta.author}" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:title" content="${data.title || data.meta.title}" />
        <meta property="og:description" content="${data.meta.description}" />
        <meta property="og:url" content="${data.meta.url}" />
        <meta property="og:image" content="${data.ogImage || data.meta.image}" />

        <meta property="twitter:title" content="${data.title || data.meta.title}" />
        <meta property="twitter:description" content="${data.meta.description}" />
        <meta property="twitter:url" content="${data.metaurl}" />
        <meta property="twitter:image" content="${data.twitterImage || data.meta.image}" />
        <meta property="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        
        <title>${data.title || data.meta.title}</title>
        <link rel="stylesheet" href="/assets/styles.css">

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WN9QWB8');</script>
        <!-- End Google Tag Manager -->
        `
}

export default Meta;