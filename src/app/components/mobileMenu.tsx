'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ListIcon } from '@phosphor-icons/react';
import Link from 'next/link';

type MobileMenuProps = {
  items: { label: string; href?: string }[];
  activeIndex?: number;
};

export default function MobileMenu({
  items,
  activeIndex = -1,
}: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center justify-center px-1 py-1 md:px-4 md:py-4 xl:hidden cursor-pointer"
        >
          <ListIcon size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] p-0" showClose={false}>
        <nav className="flex flex-col">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const base =
              "relative flex items-center h-12 px-4 font-medium cursor-pointer transition-colors duration-200 ease-out before:content-[''] before:absolute before:left-[-.6px] before:bottom-0 before:top-0 before:w-[4px] before:h-full before:bg-primary before:transition-transform before:duration-300 before:origin-top";
            const activeCls = ' text-primary before:scale-y-100';
            const inactiveCls =
              ' text-foreground hover:text-primary before:scale-y-0 hover:before:scale-y-100';
            return (
              <Link
                key={item.label}
                href={item.href || '#'}
                className={base + (isActive ? activeCls : inactiveCls)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
