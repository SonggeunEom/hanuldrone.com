'use client';

import React from 'react';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { ScrollWrapper } from './scrollSections/scroll-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { SiteFooter } from '@/components/layouts/site-footer';

import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';
import Image from 'next/image';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end end'],
  });

  const transformedYProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const carouselTextList = [
    '시설물 안전 점검',
    '의약품 배송',
    '화재 감시 및 진압',
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
              'absolute left-[7%] top-[55%] text-lg font-bold text-stone-300',
              'sm:text-2xl md:text-3xl lg:top-[62%] lg:text-5xl xl:top-[66%]',
            )}
          >
            어둠을 밝히는 혁신의 빛, (주) 한울드론
          </div>
          <motion.div
            animate={{ y: [0, 15, 0], opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mx-auto mt-8 w-fit"
          >
            <Icons.chevronsDown className="h-8 w-8" />
          </motion.div>
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
              검증된 드론 솔루션을 제공 드립니다.
            </Balancer>
          </div>
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="basis-2/5">
                  <div>
                    <Card>
                      <CardContent className="aspect-video flex-col items-center justify-center pt-6">
                        <div className="relative inline-block h-full max-h-96 w-full max-w-lg">
                          <Image
                            alt="Carousel image"
                            src={`/image/carousel${index}.png`}
                            className="object-cover"
                            fill
                          />
                        </div>
                        <p
                          className={cn(
                            'text-center text-xs',
                            'sm:text-md md:text-lg lg:text-xl',
                          )}
                        >
                          {carouselTextList[index]}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <motion.p
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
          </motion.p>
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
        <ol className="relative left-8 top-8 border-l border-stone-200 backdrop-blur-sm">
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2024.03
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                디지털 물류서비스 실증 사업
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                VTOL 의약품 배송 분야, 국토교통부 주관
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2024.03
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                드론 실증 도시 구축 사업(서산)
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                물품 배송 분야 사업자 선정
              </div>
              {/* <Button>더 알아보기 →</Button> */}
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2023.12
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                벤처기업 인증
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                중소벤처기업부
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2023.04
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                드론 실증도시 구축 사업(서산, 태안)
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                초기 화재 감시 및 진압 분야, VTOL 의약품 배송 분야
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2023.03
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                청년창업사관학교 기업 선정
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                중소벤처기업부
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-600">
                2022.12
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                한울드론 법인 설립
              </h3>
            </div>
          </li>
        </ol>
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
