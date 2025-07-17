const siteMetadata = {
  title: "Blog | Aidan O'Brien",
  author: "Aidan O'Brien",
  headerTitle: 'Mere Musings',
  description: 'My personal blog where I share my musings',
  snippets: 'Reuseable code snippets collected by Aidan',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://chitraksh.vercel.app',
  siteRepo: 'https://github.com/aiocappo',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/1711655864990.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'aidan@hellionstudios.com',
  github: 'https://github.com/aiocappo',
  twitter: 'https://twitter.com/chitraksh27',
  linkedin: 'https://www.linkedin.com/in/aidan-obrien1',
  website: 'https://heellionstudios.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'https://chitraksh.vercel.app', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-X5LZ75WW6S', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'chitraksh27',
  },
}

module.exports = siteMetadata
