'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';

export function TopNav({ mainMenus }: any) {
  return (
    <div className={cn('hidden gap-6', 'md:flex')}>
      <NavigationMenu>
        <NavigationMenuList>
          {mainMenus.map((mainMenu: any) =>
            mainMenu.submenu ? (
              <div>hi</div>
            ) : (
              <NavigationMenuItem key={mainMenu.title}>
                <Link href={mainMenu.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'h-auto')}
                  >
                    {mainMenu.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
