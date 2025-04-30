import type { Metadata } from 'next';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import { fontMono, pretendard } from '@/lib/font';
import { cn } from '@/lib/utils';

import { SiteHeader } from '@/components/layouts/site-header';
// TODO: Footer 기입
// import { SiteFooter } from '@/components/layouts/site-footer';
import ChannelTalk from '@/components/ChannelTalk';

export const metadata: Metadata = {
  title: '한울드론 | 화재 감시 드론 & 의약품 배송 드론',
  description:
    '드론을 활용한 실내외 시설 점검과 실시간 관제 기술을 제공합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const channelTalkPluginKey =
    process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY || '';

  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sansSerif antialiased',
          'overflow-y-scroll',
          fontMono.variable,
          pretendard.variable,
        )}
      >
        <SiteHeader />
        {children}
        <Analytics />
        <ChannelTalk pluginKey={channelTalkPluginKey} />
      </body>
    </html>
  );
}
