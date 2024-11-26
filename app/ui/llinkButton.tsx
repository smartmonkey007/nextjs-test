import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function LinkButton({ href, children, className }: LinkButtonProps) {
  return (
    <Link href={href}
      className={clsx(
        'flex w-44 items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base',
        className)} >
      {children}
    </Link >
  );
}