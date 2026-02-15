import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  kind?: 'accent' | 'ghost';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, href, kind = 'accent', className = '', ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200';
  const tone =
    kind === 'accent'
      ? 'border-accent bg-accent text-paper hover:bg-accent-soft hover:border-accent-soft'
      : 'border-paper/35 bg-transparent text-paper hover:border-accent hover:text-paper';

  if (href) {
    return (
      <Link href={href} className={`${base} ${tone} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${tone} ${className}`} {...rest}>
      {children}
    </button>
  );
}
