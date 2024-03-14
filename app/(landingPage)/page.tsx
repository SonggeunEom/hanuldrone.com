'use client';

import React from 'react';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { ScrollWrapper } from './scrollSections/scroll-wrapper';

import { Icons } from '@/components/icons';
import { SiteFooter } from '@/components/layouts/site-footer';

import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';
import Image from 'next/image';
import Timeline from '@/components/timeline';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end end'],
  });

  const transformedYProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const solutionsInfo = [
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
      imgSrc: '/image/solution2.jpg',
      imgText: '3번 솔루션',
      title: '3번 드론',
      description: '3번 솔루션 소개',
    },
    {
      imgSrc: '/image/solution3.jpg',
      imgText: '화재 감시 및 진압',
      title: ' eVTOL 소방 드론',
      description:
        '드론 기반 광범위 화재를 감시하며 소화탄 투하하여 초동 진압에 나섭니다.',
    },
  ];

  return (
    <main>
      <ScrollWrapper ref={ref}>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="-mt-[198px] min-h-[480px] object-cover"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div
            className={cn(
              'absolute left-[7%] top-[55%] text-lg font-extrabold text-stone-300',
              'sm:text-2xl md:text-3xl lg:top-[62%] lg:text-5xl xl:top-[66%]',
            )}
          >
            어둠을 밝히는 혁신의 빛, (주) 한울드론
          </div>
          <Icons.chevronsDown className="mx-auto mt-10 h-8 w-8 animate-bounce" />
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref}>
        <div className="relative h-3/4 w-3/4">
          <div
            className={cn(
              'relative z-[-1] flex place-items-center after:absolute after:-z-20',
              'before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""] before:lg:h-[360px]',
              'after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""]',
            )}
          >
            <Balancer
              as="h1"
              className={cn(
                'relative text-xl font-bold',
                'sm:text-2xl md:text-3xl lg:text-4xl',
              )}
            >
              검증된 드론 솔루션을 제공 드립니다.
            </Balancer>
          </div>
          <main
            className={cn(
              'my-2 grid grid-cols-1 gap-4 text-center',
              'lg:grid-cols-2',
            )}
          >
            {solutionsInfo.map((solution, index) => {
              return (
                <div key={index} className="backdrop-blur-sm">
                  <div
                    className={cn(
                      'max-h-[120px] overflow-hidden',
                      'sm:max-h-[320px]',
                    )}
                  >
                    <Image
                      src={solution.imgSrc}
                      alt={solution.imgText}
                      width={640}
                      height={427}
                    />
                    <div
                      className={cn(
                        'absolute left-1/2 top-1/2 h-1/2 w-1/2 translate-x-[-50%] translate-y-[-75%] bg-stone-800/75',
                        'flex items-center justify-center',
                      )}
                    >
                      <p
                        className={cn(
                          'text-lg font-bold text-white',
                          'sm: text-xl md:text-2xl lg:text-3xl',
                        )}
                      >
                        {solution.imgText}
                      </p>
                    </div>
                  </div>
                  <h3
                    className={cn(
                      'text-xl font-bold tracking-widest',
                      'lg:text-2xl xl:text-3xl',
                    )}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-stone-600">{solution.description}</p>
                </div>
              );
            })}
          </main>
          {/* <motion.p
            variants={fadeIn({
              direction: 'up',
              type: 'tween',
              delay: 0.2,
              duration: 0.5,
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Balancer
              className={cn(
                'text-md max-w-[42rem] leading-normal text-muted-foreground backdrop-blur-sm',
                'sm:text-lg md:text-xl lg:text-2xl',
              )}
            >
              여러 성공적인 실증 사업 추진 경험을 바탕으로 인정 받고 있습니다.
            </Balancer>
          </motion.p> */}
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref}>
        <div className="relative h-1/2 w-3/4 space-y-12">
          <div
            className={cn(
              'relative z-[-1] flex place-items-center after:absolute after:-z-20',
              'before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""] before:lg:h-[360px]',
              'after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""]',
            )}
          >
            <Balancer
              as="h1"
              className={cn(
                'relative text-xl font-extrabold',
                'sm:text-3xl md:text-4xl lg:text-5xl',
              )}
            >
              한울드론 팀 구성
            </Balancer>
          </div>
          <motion.div
            variants={fadeIn({
              direction: 'up',
              type: 'tween',
              delay: 0.2,
              duration: 0.5,
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Balancer
              as="h2"
              className={cn(
                'text-md max-w-[42rem] leading-normal text-muted-foreground',
                'sm:text-lg md:text-xl lg:text-2xl',
              )}
            >
              무인항공기 하나만 바라본 전문가들이 만듭니다.
            </Balancer>
          </motion.div>
          <div>
            <div className="flex space-x-4">
              <div className="flex basis-1/2 backdrop-blur-sm">
                <div>
                  <Image
                    src={'/image/member-ceo.png'}
                    alt={'caricature of member'}
                    width={360}
                    height={360}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      'whitespace-nowrap text-sm font-bold',
                      'sm:text-lg md:text-xl lg:text-2xl',
                    )}
                  >
                    엄송근
                  </p>
                  <p
                    className={cn(
                      'text-sm text-stone-600',
                      'sm:text-md md:text-lg lg:text-xl',
                    )}
                  >
                    Founder & CEO
                  </p>
                  <p
                    className={cn(
                      'mt-4 text-sm',
                      'sm:text-md md:text-lg lg:text-xl',
                    )}
                  >
                    TODO: 한마디가 들어갈 자리입니다.
                  </p>
                </div>
              </div>
              <div className="flex basis-1/2 backdrop-blur-sm">
                <div>
                  <Image
                    src={'/image/member-cto.png'}
                    alt={'caricature of member'}
                    width={360}
                    height={360}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      'whitespace-nowrap text-sm font-bold',
                      'sm:text-lg md:text-xl lg:text-2xl',
                    )}
                  >
                    김정훈
                  </p>
                  <p
                    className={cn(
                      'text-xs text-stone-600',
                      'sm:text-md md:text-lg lg:text-xl',
                    )}
                  >
                    Co-Founder & CTO
                  </p>
                  <p
                    className={cn(
                      'mt-4 text-sm',
                      'sm:text-md md:text-lg lg:text-xl',
                    )}
                  >
                    TODO: 한마디가 들어갈 자리입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper>
        <div className="mr-8">
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
          <div>TODO: 기업 비전이 들어갈 자리</div>
        </div>
        <Timeline
          items={[
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
          ]}
        />

        {/* Fire fighter drone ai generated video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            'ml-2 max-w-[140px] object-cover',
            'sm:enter lg:p md:max-w-xs',
          )}
        >
          <source src="/video/fire-fighting-drone.mp4" type="video/mp4" />
        </video> */}
      </ScrollWrapper>

      <div className="snap-end">
        <div className="mx-auto my-8 text-center lg:w-3/4">
          <div className="mt-36 text-center lg:mt-32">
            <span className="text-lg font-semibold tracking-wider text-stone-600 dark:text-white">
              PARTNER
            </span>
            <div className="slider">
              <div className="slide-track-5 hover:pause mt-6 grid grid-cols-3 items-center justify-around gap-8 sm:grid-cols-4 md:grid-cols-5">
                <div key="0">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo4.png'}
                      alt="에어온"
                      width={190}
                      height={50}
                    />
                  </div>
                </div>
                <div key="1">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo3.jpg'}
                      alt="한서대학교"
                      width={200}
                      height={55}
                    />
                  </div>
                </div>
                <div key="2">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo0.jpg'}
                      alt="국토부"
                      width={194}
                      height={72}
                    />
                  </div>
                </div>
                <div key="3">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo1.png'}
                      alt="서산시"
                      width={200}
                      height={50}
                    />
                  </div>
                </div>
                <div key="4">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo2.jpg'}
                      alt="태안군"
                      width={140}
                      height={80}
                    />
                  </div>
                </div>
                <div key="0">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo4.png'}
                      alt="에어온"
                      width={190}
                      height={50}
                    />
                  </div>
                </div>
                <div key="1">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo3.jpg'}
                      alt="한서대학교"
                      width={200}
                      height={55}
                    />
                  </div>
                </div>
                <div key="2">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo0.jpg'}
                      alt="국토부"
                      width={194}
                      height={72}
                    />
                  </div>
                </div>
                <div key="3">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo1.png'}
                      alt="서산시"
                      width={200}
                      height={50}
                    />
                  </div>
                </div>
                <div key="4">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo2.jpg'}
                      alt="태안군"
                      width={140}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>

      <div>
        <figure className="fixed bottom-9 right-3">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="fill-sky-400 stroke-orange-300 stroke-[8px]"
              style={{
                pathLength: transformedYProgress,
              }}
            />
          </svg>
        </figure>
      </div>
    </main>
  );
}
