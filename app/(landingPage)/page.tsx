'use client';

import React from 'react';
import { useRef, useState, useEffect, useMemo } from 'react';

import { motion } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { ScrollWrapper } from './scrollSections/scroll-wrapper';

import { Icons } from '@/components/icons';
import { SiteFooter } from '@/components/layouts/site-footer';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';
import Image from 'next/image';
import Timeline from '@/components/timeline';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState('hero');

  // 섹션 ID 배열을 useMemo로 감싸기
  const sections = useMemo(
    () => ['hero', 'solutions', 'vision', 'team', 'partners'],
    [],
  );

  // 파트너 로고 데이터
  const partnerLogos = useMemo(
    () => [
      { src: '/image/logo4.jpg', alt: '국방부', width: 200, height: 75 },
      { src: '/image/logo3.jpg', alt: '한서대학교', width: 200, height: 55 },
      { src: '/image/logo0.jpg', alt: '국토부', width: 194, height: 72 },
      { src: '/image/logo1.png', alt: '서산시', width: 200, height: 50 },
      { src: '/image/logo2.jpg', alt: '태안군', width: 140, height: 80 },
      { src: '/image/logo4.jpg', alt: '국방부', width: 240, height: 100 },
      { src: '/image/logo3.jpg', alt: '한서대학교', width: 200, height: 55 },
      { src: '/image/logo0.jpg', alt: '국토부', width: 194, height: 72 },
      { src: '/image/logo1.png', alt: '서산시', width: 200, height: 50 },
      { src: '/image/logo2.jpg', alt: '태안군', width: 140, height: 80 },
    ],
    [],
  );

  // 섹션 이동 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  // 현재 활성화된 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          currentPosition >= top - 450 &&
          currentPosition < top + height - 400
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <main className="overflow-x-hidden">
      <div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'scale-125 bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`스크롤 ${section} 섹션으로 이동`}
          />
        ))}
      </div>

      <ScrollWrapper ref={ref} className="items-start" id="hero">
        <div className="w-full">
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-36 opacity-80 md:py-52">
            <div className="absolute inset-0 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                className="text-blue-100"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                  혁신적인 드론 솔루션
                </h1>
                <p className="text-md mb-8 text-blue-100 md:text-lg">
                  <span className="block">
                    최첨단 드론 기술로 산업의 미래를 선도합니다.
                  </span>
                  <span className="block">
                    한울드론의 솔루션으로 새로운 가능성을 경험하세요.
                  </span>
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    variant="outline"
                    className="w-32 border-blue-700 bg-white text-blue-700 hover:border-white hover:bg-blue-800 hover:text-white sm:w-auto"
                  >
                    <Link href="/contact">데모 요청하기</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-32 border-blue-700 text-blue-700 hover:border-white hover:bg-blue-800 hover:text-white sm:w-auto"
                  >
                    <Link href="/main/company">자세히 알아보기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('solutions')}
            className="mx-auto block cursor-pointer"
            aria-label="다음 섹션으로 스크롤"
          >
            <Icons.chevronsDown className="mx-auto mt-10 h-8 w-8 animate-bounce" />
          </button>
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref} id="solutions">
        <div className="relative mx-4 h-[43%] lg:h-3/4 lg:w-3/4">
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
              'my-2 grid grid-cols-2 gap-x-4 gap-y-2 text-center',
              'lg:grid-cols-1 lg:gap-4',
            )}
          >
            {siteConfig.landingPage.solutionsInfo.map((solution, index) => {
              return (
                <div key={index} className="backdrop-blur-sm">
                  <div
                    className={cn(
                      'flex max-h-[180px] justify-center overflow-hidden',
                      'sm:max-h-[200px]',
                    )}
                  >
                    <Image
                      src={solution.imgSrc}
                      alt={solution.imgText}
                      width={360}
                      height={240}
                    />
                    <div
                      className={cn(
                        'absolute translate-y-[-55%] bg-transparent',
                        'flex items-center justify-center',
                        'sm:top-[45%] lg:h-1/3 lg:w-fit lg:bg-stone-800/75',
                      )}
                    >
                      <p
                        className={cn(
                          'hidden font-bold text-white',
                          'lg:text-2x4 lg:m-2 lg:block',
                        )}
                      >
                        {solution.imgText}
                      </p>
                    </div>
                  </div>
                  <h3
                    className={cn(
                      'text-sm font-bold tracking-widest',
                      'lg:text-xl xl:text-2xl',
                    )}
                  >
                    {solution.title}
                  </h3>
                  <p className={cn('text-xs text-stone-600', 'sm:text-sm')}>
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </main>
        </div>
      </ScrollWrapper>

      <ScrollWrapper id="vision">
        <div className={cn('h-[43%] w-1/3 md:h-1/2')}>
          <div className="flex justify-center">
            <Balancer
              as="h2"
              className={cn(
                'text-lg font-bold leading-normal tracking-wider text-muted-foreground backdrop-blur-sm',
                'sm:text-xl md:text-2xl lg:text-3xl',
              )}
            >
              VISION
            </Balancer>
          </div>
          <div className={cn('mt-4 w-3/4 space-y-2', 'md:mt-16 md:space-y-20')}>
            {siteConfig.landingPage.vision.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex even:flex-row-reverse even:text-right"
                >
                  <div
                    className={cn(
                      `relative hidden h-24 w-24 rounded-xl px-4 py-3 ${item.style}`,
                      'lg:block',
                    )}
                  >
                    <Image
                      src={item.imgSrc}
                      alt="icon"
                      fill
                      className="px-1.5 py-3"
                    />
                  </div>
                  <div className="backdrop-blur-sm lg:ml-3">
                    <h3 className="text-sm font-semibold md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-500 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[43%] w-1/3 md:h-2/3">
          <div className="flex justify-center">
            <Balancer
              as="h2"
              className={cn(
                'max-w-[42rem] text-lg font-bold leading-normal tracking-wider text-muted-foreground backdrop-blur-sm',
                'sm:text-xl md:text-2xl lg:text-3xl',
              )}
            >
              HISTORY
            </Balancer>
          </div>
          <div className="flex justify-center">
            <Timeline items={siteConfig.landingPage.history} />
          </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref} id="team">
        <div className="relative h-1/3 w-3/4 space-y-4 md:space-y-12">
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
              {siteConfig.landingPage.membersInfo.map((member, index) => {
                return (
                  <div key={index} className="flex basis-1/2 backdrop-blur-sm">
                    <div>
                      <Image
                        src={member.imgSrc}
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
                        {member.name}
                      </p>
                      <p
                        className={cn(
                          'text-sm text-stone-600',
                          'sm:text-md md:text-lg lg:text-xl',
                        )}
                      >
                        {member.position}
                      </p>
                      <p
                        className={cn(
                          'mt-4 text-sm',
                          'md:text-md sm:text-sm lg:text-xl',
                        )}
                      >
                        {member.introduction}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollWrapper>

      <div className="snap-end" id="partners">
        <div className="mx-auto my-8 text-center lg:w-3/4">
          <div className="mt-36 text-center lg:mt-32">
            <span className="text-lg font-semibold tracking-wider text-stone-600 dark:text-white">
              PARTNERS
            </span>
            <div className="slider">
              <div
                className={cn(
                  'slide-track-5 hover:pause mt-6 grid grid-cols-3 items-center justify-around gap-16',
                  'sm:grid-cols-4 md:grid-cols-5',
                )}
              >
                {partnerLogos.map((logo, index) => (
                  <div key={index}>
                    <div className="flex items-center text-lg font-semibold hover:scale-110">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </main>
  );
}
