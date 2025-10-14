import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsThreeOutlineVerticalIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export type mobileActionType = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
};

export type footerItemType = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
};

export default function DashboardHeader({
  title,
  description,
  action,
  mobileAction,
  footerShow,
  footerItems,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
  mobileAction?: mobileActionType[];
  footerShow?: boolean;
  footerItems?: footerItemType[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);

  // Auto-scroll to active item when component mounts or footerItems change
  useEffect(() => {
    if (
      footerShow &&
      footerItems &&
      scrollContainerRef.current &&
      activeItemRef.current
    ) {
      const container = scrollContainerRef.current;
      const activeItem = activeItemRef.current;

      // Small delay to ensure DOM is fully rendered
      const timeoutId = setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const activeItemRect = activeItem.getBoundingClientRect();

        // Calculate if the active item is out of view
        const isItemOutOfView =
          activeItemRect.left < containerRect.left ||
          activeItemRect.right > containerRect.right;

        if (isItemOutOfView) {
          // Calculate scroll position to center the active item
          const containerScrollLeft = container.scrollLeft;
          const itemOffsetLeft = activeItem.offsetLeft;
          const containerWidth = container.clientWidth;
          const itemWidth = activeItem.offsetWidth;

          // Center the active item in the container
          const targetScrollLeft =
            itemOffsetLeft - containerWidth / 2 + itemWidth / 2;

          container.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: 'smooth',
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [footerShow, footerItems]);

  return (
    <div className="border shadow-md border-border rounded-md bg-card flex flex-col mb-8 md:mb-10">
      <div className="flex items-center justify-between gap-2 p-6 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="hidden md:flex items-center gap-2">{action}</div>
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-8 h-8 p-0">
                <DotsThreeOutlineVerticalIcon className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {mobileAction?.map((item) => (
                <DropdownMenuLabel key={item.label}>
                  <Link
                    className="flex rounded items-center gap-2 cursor-pointer hover:bg-accent"
                    href={item.href ?? '#'}
                    {...(item.target ? { target: item.target } : {})}
                    {...(item.rel ? { rel: item.rel } : {})}
                    {...(item.onClick ? { onClick: item.onClick } : {})}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </DropdownMenuLabel>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {footerShow && (
        <div className="border-t border-border bg-card/50 backdrop-blur-sm w-full">
          <div
            ref={scrollContainerRef}
            className="px-6 pt-2 overflow-x-auto overflow-y-hidden"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent',
            }}
          >
            <div className="flex flex-row gap-4 items-center w-max min-w-full">
              {footerItems?.map((item, index) => {
                const base =
                  "relative cursor-pointer font-semibold pb-2 transition-colors duration-200 ease-out whitespace-nowrap flex-shrink-0 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[4px] before:w-full before:bg-primary before:transition-transform before:duration-300 before:origin-left before:rounded-t-sm ";
                const activeCls = 'text-primary before:scale-x-100 ';
                const inactiveCls =
                  'text-foreground/50 hover:text-foreground/90 before:scale-x-0 hover:before:scale-x-100 ';

                return (
                  <Link
                    key={item.label}
                    ref={item.active ? activeItemRef : null}
                    className={base + (item.active ? activeCls : inactiveCls)}
                    href={item.href ?? '#'}
                    {...(item.target ? { target: item.target } : {})}
                    {...(item.rel ? { rel: item.rel } : {})}
                    {...(item.onClick ? { onClick: item.onClick } : {})}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
