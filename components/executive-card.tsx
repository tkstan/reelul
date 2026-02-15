import { MediaPlaceholder } from '@/components/media-placeholder';
import { Card } from '@/components/ui/card';

type Props = { name: string; focus: string; image: string };

export function ExecutiveCard({ name, focus }: Props) {
  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1">
      <MediaPlaceholder label={name} className="h-72 border-x-0 border-t-0 transition duration-300 group-hover:opacity-80" />
      <div className="space-y-2 p-6">
        <h3 className="font-display text-3xl uppercase leading-[0.95] text-ink">{name}</h3>
        <p className="text-xs uppercase tracking-[0.1em] text-ink-muted">{focus}</p>
      </div>
    </Card>
  );
}
