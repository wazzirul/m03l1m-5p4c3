'use client';

import Link from 'next/link';

type HeaderNavProps = {
  items: { label: string; href?: string }[];
  activeIndex?: number; // index of active item
};

export default function HeaderNav({ items, activeIndex = -1 }: HeaderNavProps) {
  return (
    <div className="hidden xl:flex items-center gap-5 order-2 ml-6">
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        const base =
          "relative h-[64px] px-3 py-4 cursor-pointer transition-colors duration-200 ease-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-full before:bg-primary-foreground before:transition-transform before:duration-300 before:origin-left font-medium";
        const activeCls = ' text-primary-foreground before:scale-x-100';
        const inactiveCls =
          ' text-primary-foreground/70 hover:text-primary-foreground before:scale-x-0 hover:before:scale-x-100';
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
    </div>
  );
}
