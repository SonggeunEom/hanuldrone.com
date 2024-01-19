export const siteConfig = {
  name: '한울드론',
  description: 'hi',
  url: 'http://localhost:3000',
  ogImage: 'http://localhost:3000/og-image.png',
  mainMenus: [
    {
      title: '솔루션',
      href: '/solutions',
      submenus: [
        {
          title: '화재 진압',
          description: '화재를 감시하고 초기에 진압하는 eVTOL 드론',
          href: '/solutions/#fire-monitoring',
        },
        {
          title: '수색 및 감시',
          description: '인명 수색 및 야간 연안 감시 드론',
          href: '/solutions/#surveillance',
        },
      ],
    },
    {
      title: '활용 사례',
      href: '/insights',
      items: [],
    },
    {
      title: '블로그',
      href: '/blog',
      items: [],
    },
    {
      title: '채용',
      href: '/career',
      items: [],
    },
  ],
};
