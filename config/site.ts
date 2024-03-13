export const siteConfig = {
  name: '한울드론',
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
      title: '소식',
      href: '/blog',
      items: [],
    },
    {
      title: '팀 소개(임시)',
      href: '/team',
      items: [],
    },
  ],
  footer: {
    ceo: '엄송근',
    address: '충청남도 태안군 남면 곰섬로 236-49, 216호(창업2관)',
    email: 'hanuldrone3@hanuldrone.com',
    foundedYear: 2023,
  },
};
