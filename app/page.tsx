'use client';

import { motion } from 'framer-motion';

import Balancer from 'react-wrap-balancer';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

import { fadeIn, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main>
      <Shell className="max-w-6xl">
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
      </Shell>
    </main>
  );
}
