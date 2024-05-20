import Image from 'next/image';

import { cn } from '@/lib/utils';
import { SiteFooter } from '@/components/layouts/site-footer';

import { siteConfig } from '@/config/site';

export default function Solutions() {
  return (
    <div>
      <div className="flex items-center bg-white">
        <div className="flex w-full items-center">
          <Image
            src="/image/drone-drawing.jpg"
            alt="drone drawing"
            width={200}
            height={150}
            priority={true}
            className="hidden md:block"
          />
          <h1 className="text-xl font-bold text-stone-700 lg:text-4xl">
            솔루션
          </h1>
        </div>
        <div className="text-md w-full text-stone-600 md:text-lg lg:text-xl">
          한울드론이 제공하는 솔루션을 소개드려요.
        </div>
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
      <SiteFooter />
    </div>
  );
}
