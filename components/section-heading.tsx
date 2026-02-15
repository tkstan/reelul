import { ReactNode } from 'react';

type Props = {
  kicker: string;
  title: string;
  intro?: ReactNode;
};

export function SectionHeading({ kicker, title, intro }: Props) {
  return (
    <div className="mb-10 max-w-2xl space-y-4">
      <p className="kicker">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {intro ? <p className="text-mist">{intro}</p> : null}
    </div>
  );
}
