import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Image from 'next/image';
import { PostCard } from '@/components/post-card';

export default async function Blog() {
  const data = await extractMetaTags(
    'https://www.siminilbo.co.kr/news/newsview.php?ncode=1160267458084537',
  );

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <>
      <div className="container flex items-center bg-white">
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
            뉴스 & 블로그
          </h1>
        </div>
        <div className="text-md w-full text-stone-600 md:text-lg lg:text-xl">
          한울드론의 새로운 소식을 알려드려요.
        </div>
      </div>
      <main className="container flex justify-center">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="mb-2 grid h-12 w-full grid-cols-2 rounded-xl">
            <TabsTrigger
              className="rounded-xl focus-visible:ring-sky-300 data-[state=active]:border-2 data-[state=active]:border-sky-300"
              value="news"
            >
              뉴스
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl focus-visible:ring-sky-300 data-[state=active]:border-2 data-[state=active]:border-sky-300"
              value="blog"
            >
              블로그
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="news"
            className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <PostCard
              url="https://www.siminilbo.co.kr/news/newsview.php?ncode=1160267458084537"
              thumbnail={data.image}
              title={data.title}
              date={new Date()}
              writer={'엄송근'}
            />
          </TabsContent>
          <TabsContent
            value="blog"
            className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <PostCard
              url="https://www.google.com"
              thumbnail={data.image}
              title={data.title}
              date={new Date()}
              writer={'TODO 블로그'}
            />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}

import { JSDOM } from 'jsdom';

const extractMetaTags = async (url: string) => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const metaTags = Array.from(document.querySelectorAll('meta')).reduce(
      (tags, meta) => {
        const name =
          meta.getAttribute('name') ||
          meta.getAttribute('property') ||
          meta.getAttribute('itemprop');

        const content = meta.getAttribute('content');

        if (name && content) {
          tags[name] = content;
        }

        return tags;
      },
      {},
    );

    return {
      title:
        document.title || metaTags['og:title'] || metaTags['twitter:title'],
      description:
        metaTags.description ||
        metaTags['og:description'] ||
        metaTags['twitter:description'],
      image:
        metaTags.image || metaTags['og:image'] || metaTags['twitter:image'],
    };
  } catch (error) {
    console.error('Error fetching Open Graph details', error);
  }
};
