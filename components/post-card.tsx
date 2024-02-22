import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type PostCardProps = {
  url: string;
  thumbnail: string;
  title: string;
  summary: string;
  date: Date;
  writer: string;
};

export function PostCard({
  url,
  thumbnail,
  title,
  summary,
  date,
  writer,
}: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <Link href={url}>
          <Image src={thumbnail} alt={thumbnail} width={400} height={200} />
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardDescription className="line-clamp-2">{summary}</CardDescription>
        {date.toString().slice(0, 14)} / {writer}
      </CardContent>
      <CardFooter>
        <Button>자세히 보기</Button>
      </CardFooter>
    </Card>
  );
}
