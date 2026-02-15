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
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]';
  const tone =
    kind === 'accent'
      ? 'border-[#7a0f14] bg-[#7a0f14] text-white hover:-translate-y-0.5 hover:border-[#5f0d11] hover:bg-[#5f0d11] hover:shadow-[0_0_24px_-10px_rgba(122,15,20,0.7)]'
      : 'border-black/20 bg-transparent text-[#111315] hover:border-[#7a0f14]/60 hover:text-[#7a0f14]';

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
