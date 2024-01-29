'use client';

import { motion } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

import { fadeIn, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   container: ref,
  //   offset: ['end end', 'start start'],
  // });

  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  console.log('🚀 / scrollY:', scrollY);
  console.log('🚀 / scrollYProgress:', scrollYProgress);
  // const y = useParallax(scrollYProgress, 300);

  return (
    <main>
      {/* <Shell className="max-w-6xl">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className={cn(
            'mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-12 text-center',
            'md:pt-32',
          )}
        >
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
                'relative text-3xl',
                'sm:text-6xl md:text-6xl lg:text-7xl',
              )}
            >
              드론으로 세상을 연결합니다
            </Balancer>
          </div>
          <Balancer
            className={cn(
              'max-w-[52rem] leading-normal text-muted-foreground',
              'sm:text-xl sm:leading-8',
            )}
          >
            실내외 시설 점검, 실시간 관제 기술, 비가시권 도서산간 지역 물류
            서비스 등 다양한 서비스를 제공합니다.
          </Balancer>
          <video autoPlay loop muted>
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <motion.div
            animate={{ y: [0, 15, 0], opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Icons.chevronsDown className="h-8 w-8" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mx-auto flex-col"
          >
            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}>
              <Balancer
                className={cn(
                  'max-w-[42rem] leading-normal text-muted-foreground',
                  'sm:text-xl sm:leading-8',
                )}
              >
                여러 성공적인 실증 사업 추진 경험을 바탕으로 인정 받고 있습니다.
              </Balancer>
            </motion.p>
          </motion.div>
        </section>
      </Shell> */}

      <div>
        {[1, 2, 3, 4, 5].map((image) => (
          <div>
            <Image id={image} ref={ref} />
            <div ref={ref}>
              <figure className="absolute right-24">
                <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="fill-none stroke-[2px] opacity-20"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="stroke-red-400 stroke-[5px]"
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </div>
          </div>
        ))}
        {/* <motion.div className="fixed bottom-24 z-50  rotate-[-90deg] bg-slate-300">
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="fill-none stroke-slate-400 stroke-1 opacity-30"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-slate-200"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </motion.div> */}
        {/* <motion.div
          className="fixed bottom-24 z-50 h-2 w-full bg-black"
          style={{ scaleX }}
        /> */}
      </div>
    </main>
  );
}

import { useRef } from 'react';

import { useScroll, useTransform, MotionValue } from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, ref }: { id: number; ref: any }) {
  // const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="relative flex h-screen snap-center items-center justify-center">
      <div
        ref={ref}
        className="relative m-5 h-96 max-h-[90vh] w-72 overflow-hidden"
      >
        <img
          src={`/${id}.jpg`}
          alt="A London skyscraper"
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      {/* <div>
        <figure className="">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="fill-none stroke-[2px] opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-400 stroke-[5px]"
              style={{ pathLength: scrollY }}
            />
          </svg>
        </figure>
      </div> */}
    </section>
  );
}
