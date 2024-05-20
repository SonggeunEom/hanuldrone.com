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

import { siteConfig } from '@/config/site';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end end'],
  });

  const transformedYProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

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
              'absolute left-[7%] top-[54%] text-lg font-extrabold text-stone-300',
              'sm:text-2xl md:text-3xl lg:top-[56%] lg:text-5xl xl:top-[62%]',
            )}
          >
            {siteConfig.landingPage.heroMessage}
          </div>
          <Icons.chevronsDown className="mx-auto mt-10 h-8 w-8 animate-bounce" />
        </div>
      </ScrollWrapper>

      <ScrollWrapper ref={ref}>
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
                      'sm:max-h-[320px]',
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

      <ScrollWrapper>
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
            {siteConfig.landingPage.vision.map((item) => {
              return (
                <div className="flex even:flex-row-reverse even:text-right">
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

      <ScrollWrapper ref={ref}>
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

      <div className="snap-end">
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
                <div key="0">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo4.jpg'}
                      alt="국방부"
                      width={200}
                      height={75}
                    />
                  </div>
                </div>
                <div key="0">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo3.jpg'}
                      alt="한서대학교"
                      width={200}
                      height={55}
                    />
                  </div>
                </div>
                <div key="1">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo0.jpg'}
                      alt="국토부"
                      width={194}
                      height={72}
                    />
                  </div>
                </div>
                <div key="2">
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
                      src={'/image/logo4.jpg'}
                      alt="국방부"
                      width={240}
                      height={100}
                    />
                  </div>
                </div>
                <div key="0">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo3.jpg'}
                      alt="한서대학교"
                      width={200}
                      height={55}
                    />
                  </div>
                </div>
                <div key="1">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo0.jpg'}
                      alt="국토부"
                      width={194}
                      height={72}
                    />
                  </div>
                </div>
                <div key="2">
                  <div className="flex items-center text-lg font-semibold hover:scale-110">
                    <Image
                      src={'/image/logo1.png'}
                      alt="서산시"
                      width={200}
                      height={50}
                    />
                  </div>
                </div>
                <div key="3">
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
