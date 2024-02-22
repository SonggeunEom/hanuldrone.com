import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { PostCard } from '@/components/post-card';

export default async function Blog() {
  const data = await extractMetaTags(
    'https://www.siminilbo.co.kr/news/newsview.php?ncode=1160267458084537',
  );
  //  const data = await extractMetaTags(
  //    'https://blog.naver.com/firehouse79/223326506356',
  //  );
  console.log('🚀 ~ data:', data);

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
          />
          <h1 className="text-xl font-bold text-stone-700 lg:text-4xl">
            뉴스 & 블로그
          </h1>
        </div>
        <div className="w-full text-lg text-stone-600 lg:text-xl">
          한울드론의 새로운 소식을 알려드려요.
        </div>
      </div>
      <main className="container flex justify-center">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid h-12 w-full grid-cols-2 rounded-xl">
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
          <TabsContent value="news" className="grid grid-cols-3">
            <PostCard
              url="https://www.google.com"
              thumbnail={data.image}
              title={data.title}
              summary={data.description}
              date={new Date()}
              writer={'엄송근'}
            />
          </TabsContent>
          <TabsContent value="blog">
            <Card>
              <CardHeader>
                <CardTitle>blog</CardTitle>
                <CardDescription>
                  Change your blog here. After saving, you be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
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
