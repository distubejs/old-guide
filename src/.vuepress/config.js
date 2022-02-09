const { description } = require('../../package')
const sidebar = require('./sidebar.js')

const config = {
    title: 'DisTube v4 Guide',
    description,
    head: [
        ['meta', { charset: 'utf-8' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
            },
        ],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { name: 'og:title', content: 'DisTube v4 Guide' }],
        [
            'meta',
            {
                name: 'og:description',
                content:
                    'A guide for building a Discord music bot with DisTube.',
            },
        ],
        ['meta', { name: 'og:type', content: 'website' }],
        [
            'meta',
            {
                name: 'og:url',
                content: 'https://distube.js.org/guide',
            },
        ],
        ['meta', { name: 'og:locale', content: 'en_US' }],
        ['meta', { name: 'og:image', content: '/banner.png' }],
        ['meta', { name: 'theme-color', content: '#de3636' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
            },
        ],
        ['script', { src: 'https://arc.io/widget.min.js#2srirM1z' }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-EENC5MXGZT',
            },
        ],
        [
            'script',
            {},
            `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-EENC5MXGZT');
            `,
        ],
    ],
    base: '/guide/',
    theme: 'succinct',
    globalUIComponents: ['ThemeManager'],
    plugins: ['vuepress-plugin-element-tabs'],
    themeConfig: {
        repo: 'distubejs/guide',
        editLinks: true,
        docsDir: 'src',
        lastUpdated: true,
        nav: [
            {
                text: 'DisTube Documentation',
                link: 'https://distube.js.org',
            },
        ],
        sidebar,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../',
            },
        },
    },
}

for (const group of Object.values(config.themeConfig.sidebar)) {
    for (const section of group) {
        if (section.collapsable) continue
        section.collapsable = false
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push([
        '@vuepress/google-analytics',
        { ga: 'G-JXSE71VVK8' },
    ])
}

module.exports = config
