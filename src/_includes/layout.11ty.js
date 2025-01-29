import Header from "./header.11ty.js";

const Layout = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>${data.title || data.meta.title}</title>
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
        <meta property="og:description" content="${data.description || data.meta.description}" />
        <meta property="og:url" content="${data.meta.url + data.page.url}" />
        <meta property="og:image" content="${data.ogImage || data.meta.image}" />

        <meta property="twitter:title" content="${data.title || data.meta.title}" />
        <meta property="twitter:description" content="${data.description || data.meta.description}" />
        <meta property="twitter:url" content="${data.meta.url + data.page.url}" />
        <meta property="twitter:image" content="${data.twitterImage || data.meta.image}" />
        <meta property="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        
        <link rel="stylesheet" href="/assets/styles.css">

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WN9QWB8');</script>
        <!-- End Google Tag Manager -->
    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN9QWB8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            ${Header()}
            <main class="mb-auto">
                ${data.content}
            </main>
            <footer>
                <div class="mt-16 flex flex-col items-center">
                    <div class="mb-3 flex space-x-4">
                        <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:dhruvangg@gmail.com">
                            <span class="sr-only">mail</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6">
                                <title>Mail</title>
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvangg/">
                            <span class="sr-only">github</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                ></path>
                            </svg>
                        </a>
                        <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dhruvangg/">
                            <span class="sr-only">linkedin</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6">
                                <title>Linkedin</title>
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div>Dhruvang Gajjar</div>
                        <div>•</div>
                        <div>© 2025</div>
                    </div>
                </div>
            </footer>
        </section>
    </body>
    </html>
    `;
};

export default Layout;
