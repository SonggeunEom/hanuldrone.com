import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';

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
              'max-w-[42rem] leading-normal text-muted-foreground',
              'sm:text-xl sm:leading-8',
            )}
          >
            비가시권 실내외 시설 점검, 실시간 관제 기술, 도서산간 배송 서비스 등
            다양한 서비스를 제공합니다.
          </Balancer>
          <video autoPlay loop muted>
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <Icons.chevronsDown className="h-8 w-8" />
        </section>
      </Shell>
    </main>
  );
}
