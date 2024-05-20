export const siteConfig = {
  name: '한울드론',
  mainMenus: [
    {
      title: '소식',
      href: '/blog',
      items: [],
    },
  ],
  landingPage: {
    heroMessage: '어둠을 밝히는 혁신의 빛, (주) 한울드론',
    solutionsInfo: [
      // ⚠ 3개 이상 작성 시 PC 레이아웃 깨짐!
      {
        imgSrc: '/image/solution0.jpg',
        imgText: '시설물 안전 점검',
        title: '결함 탐지 드론',
        description:
          'AI 영상 처리를 통한 손상 및 결함을 탐지합니다. GPS 단절 환경에서도 무사히 임무를 완수합니다.',
      },
      {
        imgSrc: '/image/solution1.jpg',
        imgText: '의약품 배송',
        title: '화물 배송 드론',
        description:
          '화물 보호 기능을 갖춘 배송함을 탑재하여 다양한 화물을 배송합니다.',
      },
      {
        imgSrc: '/image/solution3.jpg',
        imgText: '화재 감시 및 진압',
        title: ' eVTOL 소방 드론',
        description:
          '드론 기반 광범위 화재를 감시하며 소화탄 투하하여 초동 진압에 나섭니다.',
      },
    ],
    vision: [
      {
        imgSrc: '/image/icon0.png',
        style: 'bg-teal-200/50 px-4 py-3',
        title: '목표 지향',
        description:
          '신속, 정확하게 이동하여 안전하고 완벽하게 임무를 달성합니다.',
      },
      {
        imgSrc: '/image/icon1.png',
        style: 'ml-3 bg-amber-400/40',
        title: '창의와 혁신',
        description:
          '창의적이고 혁신적인 아이디어를 위해 다양한 방법을 모색합니다.',
      },
      {
        imgSrc: '/image/icon2.png',
        style: 'bg-red-500/40 p-4',
        title: '협동과 소통',
        description:
          '가장 큰 임팩트를 낼 수 있는 목표를 향해 자유롭게 소통하며 몰입합니다.',
      },
    ],
    history: [
      {
        dateTime: '2024-04',
        label: '국방벤처기업 인증',
        description: '국방기술진흥연구소 주관',
      },
      {
        dateTime: '2024-03',
        label: '디지털 물류서비스 실증 사업',
        description: 'VTOL 의약품 배송 분야\n국토교통부 주관',
      },
      {
        dateTime: '2024-03',
        label: '드론 실증 도시 구축 사업(서산)',
        description: '물품 배송 분야 사업자 선정',
      },
      {
        dateTime: '2023-12',
        label: '벤처기업 인증',
        description: '중소벤처기업부',
      },
      {
        dateTime: '2023-04',
        label: '드론 실증도시 구축 사업(서산, 태안)',
        description: '초기 화재 감시 및 진압 분야\nVTOL 의약품 배송 분야',
      },
      {
        dateTime: '2023-03',
        label: '청년창업사관학교 기업 선정',
        description: '중소벤처기업부',
      },
      { dateTime: '2022-12', label: '한울드론 법인 설립' },
    ],
    membersInfo: [
      {
        imgSrc: '/image/member-ceo.png',
        name: '엄송근',
        position: 'Founder & CEO',
        introduction:
          '한서대 항공시스템공학 석사 학위를 취득하고, 한울드론을 공동창업 하였습니다. 인공지능 기술을 연구 하였습니다.',
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
