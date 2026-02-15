import { MediaPlaceholder } from '@/components/media-placeholder';
import { Card } from '@/components/ui/card';

type Props = {
  title: string;
  date: string;
  type: string;
  description: string;
  image: string;
};

export function EventCard({ title, date, type, description }: Props) {
  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1">
      <MediaPlaceholder label={title} className="h-52 border-x-0 border-t-0" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="inline-flex border border-accent px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {date}
          </p>
          <p className="text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted">{type}</p>
        </div>
        <h3 className="font-display text-3xl uppercase leading-[0.9] text-ink">
          <span className="underline-accent">{title}</span>
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </Card>
  );
}
