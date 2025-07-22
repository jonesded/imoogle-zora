'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sidebar sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 dark:bg-dark-1 light:bg-light-1 p-6 pt-28 text-white dark:text-white light:text-gray-900 max-sm:hidden lg:w-[264px] transition-colors duration-300">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'sidebar-item flex gap-4 items-center p-4 rounded-lg justify-start transition-colors duration-200',
                {
                  'bg-blue-1': isActive,
                  'hover:bg-dark-3 dark:hover:bg-dark-3 light:hover:bg-light-3': !isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className="filter dark:filter-none light:brightness-0 light:contrast-100"
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
