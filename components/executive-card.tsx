import { MediaPlaceholder } from '@/components/media-placeholder';
import { Card } from '@/components/ui/card';

type Props = { name: string; focus: string; image: string };

export function ExecutiveCard({ name, focus }: Props) {
  return (
    <Card className="group overflow-hidden rounded-3xl bg-[#0d1629] transition duration-300 hover:-translate-y-1 hover:border-accent/55">
      <MediaPlaceholder label={name} className="h-72 rounded-none border-x-0 border-t-0 transition duration-300 group-hover:opacity-80" />
      <div className="space-y-2 p-6">
        <h3 className="font-display text-3xl uppercase leading-[0.95] text-paper">{name}</h3>
        <p className="text-xs uppercase tracking-[0.1em] text-paper/65">{focus}</p>
      </div>
    </Card>
  );
}
