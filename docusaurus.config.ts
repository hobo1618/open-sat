import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
    title: 'Open SAT',
    tagline: 'Free, open-source SAT prep for everyone',
    favicon: 'img/smiley.ico',
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap',
            type: 'text/css',
            crossorigin: 'anonymous',
        }
    ],

    // Set the production url of your site here
    url: 'https://open-sat.vercel.app/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'hobo1618', // Usually your GitHub org/user name.
    projectName: 'open-sat', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/hobo1618/open-sat',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/hobo1618/open-sat',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        docs: {
            sidebar: {
                hideable: true,
            }
        },
        metadata: [
            { name: 'keywords', content: "SAT test prep, SAT preparation, SAT study guide, SAT practice tests, SAT tutoring, SAT exam tips, SAT strategies, SAT study materials, SAT practice questions, SAT math prep, SAT reading prep, SAT writing prep, Best SAT prep, SAT online courses, SAT study plan, SAT test dates, SAT score improvement, SAT prep books, SAT essay tips, SAT study schedule, How to study for the SAT, SAT prep tips for teens, Fun SAT practice, Study hacks for the SAT, SAT prep games, SAT math tricks, SAT vocab help, SAT reading strategies, Best SAT prep apps, SAT prep for high schoolers, SAT essay tips, SAT test-taking strategies, Interactive SAT prep, SAT study buddies, SAT cram session tips, Quick SAT prep tips, SAT practice quizzes, SAT study playlists, SAT prep for busy teens, SAT prep without stress" },
        ],
        navbar: {
            logo: {
                alt: 'Open SAT Logo',
                src: 'img/smiley.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Learn',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/resources', label: 'Resources', position: 'left' },
                {
                    href: 'https://github.com/hobo1618/open-sat',
                    position: 'right',
                    className: 'header-github-link',
                    ariaLabel: 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Content',
                    items: [
                        {
                            label: 'Learn',
                            to: '/docs/getting-started',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/BRDEKRrG',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/sixoneeight',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/hobo1618/open-sat',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} open SAT(R), Inc. TEST NAMES ARE THE PROPERTY OF THE RESPECTIVE TRADEMARK HOLDERS, NONE OF WHOM ENDORSE OR ARE AFFILIATED WITH THIS WEBSITE.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
