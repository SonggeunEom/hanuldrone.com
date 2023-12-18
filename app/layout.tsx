import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '한울드론 | 화재 감시 드론 & 의약품 배송 드론',
  description: '실/내외 시설 점검과 실시간 관제 기술로 세상을 널리 이롭게 합니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
