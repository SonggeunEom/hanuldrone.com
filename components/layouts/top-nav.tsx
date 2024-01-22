'use client';

import React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';

export function TopNav({ mainMenus }: any) {
  return (
    <div className={cn('hidden gap-6', 'md:flex')}>
      <NavigationMenu>
        <NavigationMenuList>
          {mainMenus.map((mainMenu: any) =>
            mainMenu.submenus ? (
              <NavigationMenuItem key={mainMenu.title}>
                <NavigationMenuTrigger className="h-auto capitalize">
                  {mainMenu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      'grid w-[150px] gap-3 p-4',
                      'md:w-[350px] md:grid-cols-2 lg:w-[450px]',
                    )}
                  >
                    {mainMenu.submenus.map((submenu: any) => (
                      <SubmenuItem
                        key={submenu.title}
                        title={submenu.title}
                        href={submenu.href}
                      >
                        {submenu.description}
                      </SubmenuItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
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

const SubmenuItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
SubmenuItem.displayName = 'SubmenuItem';
