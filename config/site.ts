export const siteConfig = {
  name: '한울드론',
  mainMenus: [
    {
      title: '솔루션',
      href: '/solutions',
      submenus: [
        {
          title: '화재 진압',
          description: '화재 초기 감시 및 진압 드론',
          href: '/solutions/#fire-monitoring',
        },
        {
          title: '수색 및 감시',
          description: '인명 수색 및 주/야간 연안 감시 드론',
          href: '/solutions/#surveillance',
        },
      ],
    },
    {
      title: '소식',
      href: '/blog',
      items: [],
    },
  ],
  landingPage: {
    solutionsInfo: [
      {
        imgSrc: '/image/solution0.jpg',
        imgText: '시설물 안전 점검',
        title: '결함 탐지 드론',
        description:
          'GNSS 단절 환경에서도 AI 영상 처리를 통한 손상 및 결함 탐지 드론.',
      },
      {
        imgSrc: '/image/solution1.jpg',
        imgText: 'VTOL 배송',
        title: '물류 및 의약품 배송 드론',
        description:
          '화물 보호 기능을 갖춘 배송함을 탑재하여 다양한 화물 배송.',
      },
      {
        imgSrc: '/image/solution2.jpg',
        imgText: '3번 솔루션',
        title: '3번 드론',
        description: '3번 솔루션 소개',
      },
      {
        imgSrc: '/image/solution3.jpg',
        imgText: '화재 감시 및 진압',
        title: ' 소방 드론',
        description:
          '초기 화재를 감시하며 소화탄 투하를 통한 초동 진압.',
      },
    ],
    membersInfo: [
      {
        imgSrc: '/image/member-ceo.png',
        name: '엄송근',
        position: 'Founder & CEO',
        introduction:
          '한마디가 들어갈 자리입니다.한마디가 들어갈 자리입니다.한마디가 들어갈 자리입니다.한마디가 들어갈 자리입니다.한마디가 들어갈 자리입니다.한마디가 들어갈',
      },
      {
        imgSrc: '/image/member-cto.png',
        name: '김정훈',
        position: 'Co-Founder & CTO',
        introduction:
          '한서대 항공시스템공학 석사 학위를 취득하고, 한울드론을 공동창업 하였습니다. 편대비행 및 충돌회피 기술을 연구 하였으며 다양한 실증에 참여한 이력이 있습니다.',
      },
    ],
  },
  footer: {
    ceo: '엄송근',
    address: '충청남도 태안군 남면 곰섬로 236-49, 216호(창업2관)',
    email: 'hanuldrone3@hanuldrone.com',
    foundedYear: 2023,
  },
};
