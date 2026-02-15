import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <article className={`border border-line bg-paper shadow-soft ${className}`}>{children}</article>;
}
