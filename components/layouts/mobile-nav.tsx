'use client';

import { useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export function MobileNav({ mainMenus }: any) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'mr-2 px-0 text-base',
            'hover:bg-transparent md:hidden',
            'focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
          )}
        >
          <Icons.menuIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Mobile Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="pl-0 pr-1">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pr-6">
          <div className="space-y-4 pl-7 pr-1">
            {mainMenus.map((mainMenu: any, index: number) =>
              mainMenu.submenus ? (
                <Accordion
                  type="multiple"
                  defaultValue={mainMenus.map(
                    (mainMenu: any) => mainMenu.title,
                  )}
                  className="w-full"
                >
                  <AccordionItem value={mainMenu.title} key={index}>
                    <AccordionTrigger className="text-lg capitalize">
                      {mainMenu.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {mainMenu.submenus.map(
                          (submenu: any, index: number) => (
                            <MobileSubmenuItem
                              key={index}
                              href={String(submenu.href)}
                              segment={String(segment)}
                              setIsOpen={setIsOpen}
                              disabled={submenu.disabled}
                            >
                              {submenu.title}
                            </MobileSubmenuItem>
                          ),
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div>
                  <MobileSubmenuItem
                    key={index}
                    href={String(mainMenu.href)}
                    segment={String(segment)}
                    setIsOpen={setIsOpen}
                    disabled={mainMenu.disabled}
                  >
                    {mainMenu.title}
                  </MobileSubmenuItem>
                </div>
              ),
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileSubmenuItemProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileSubmenuItem({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileSubmenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        href.includes(segment) && 'text-foreground',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
