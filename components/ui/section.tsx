import { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Label } from '@/components/ui/label';

type SectionProps = {
  label?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ label, title, intro, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
          {label ? <Label>{label}</Label> : null}
          <h2 className="display-title text-4xl leading-[0.95] text-ink md:text-6xl">{title}</h2>
          {intro ? <p className="text-base leading-relaxed text-ink-muted md:text-lg">{intro}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
