import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <article className={`border border-line bg-[#0c1424] shadow-soft ${className}`}>{children}</article>;
}
