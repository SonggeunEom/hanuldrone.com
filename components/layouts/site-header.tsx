import { Icons } from '@/components/icons';
import { TopNav } from '@/components/layouts/top-nav';

import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.companyLogo className="h-40 w-40" aria-hidden="true" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>
        <TopNav mainMenus={siteConfig.mainMenus} />
      </div>
    </header>
  );
}
