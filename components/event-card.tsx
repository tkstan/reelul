import { MediaPlaceholder } from '@/components/media-placeholder';

type Props = {
  title: string;
  date: string;
  type: string;
  description: string;
  image: string;
};

export function EventCard({ title, date, type, description }: Props) {
  return (
    <article className="surface group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <MediaPlaceholder label={title} className="h-52 transition duration-500 group-hover:scale-105" />
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-mist">{date} · {type}</p>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-mist">{description}</p>
      </div>
    </article>
  );
}
