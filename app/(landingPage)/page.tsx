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
    '화재 감시 및 초동 진압',
  ];

  return (
    <main>
      <ScrollWrapper ref={ref}>
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="-mt-[198px] min-h-[480px] object-cover"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute left-[7%] top-[62%] text-xl font-bold text-stone-300 md:text-6xl lg:text-6xl">
            사람들이 필요로 할 때 나타나 한 줄기의 빛이 되기
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
                'relative text-2xl',
                'sm:text-6xl md:text-6xl lg:text-7xl',
              )}
            >
              검증된 드론 솔루션을 제공합니다.
            </Balancer>
          </div>
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="basis-2/5">
                  <div>
                    <Card>
                      <CardContent className="aspect-square flex-col items-center justify-center">
                        <div className="relative inline-block h-full max-h-96 w-full max-w-lg">
                          <Image
                            alt="Carousel image"
                            src={`/image/carousel${index}.png`}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <p className="text-center text-lg md:text-4xl">
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
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Balancer
              className={cn(
                'max-w-[42rem] leading-normal text-muted-foreground',
                'sm:text-xl sm:leading-8',
              )}
            >
              여러 성공적인 실증 사업 추진 경험을 바탕으로 인정 받고 있습니다.
            </Balancer>
          </motion.p>
        </div>
      </ScrollWrapper>

      <ScrollWrapper>
        <ol className="relative left-8 top-8 border-l border-stone-200">
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-400">
                2024
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                한울드론 비상
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                날개를 펴고 날아가는 청룡의 해
              </div>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-400">
                2023
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                한울드론 개고생
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                여러 실증 사업에 참여
              </div>
              <Button>더 알아보기 →</Button>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300"></div>
              <div className="flex h-full w-0.5 bg-gray-200" />
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-stone-400">
                2022
              </time>
              <h3 className="text-lg font-semibold text-stone-900">
                한울드론 창립
              </h3>
              <div className="mb-4 text-base font-normal text-stone-500 ">
                2022년 겨울, 창립
              </div>
            </div>
          </li>
        </ol>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="ml-2 max-w-[140px] object-cover md:max-w-xs"
        >
          <source src="/video/fire-fighting-drone.mp4" type="video/mp4" />
        </video>
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
