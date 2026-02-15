import { MediaPlaceholder } from '@/components/media-placeholder';

type Props = { name: string; focus: string; image: string };

export function ExecutiveCard({ name, focus }: Props) {
  return (
    <article className="surface group overflow-hidden transition duration-300 hover:border-accent/40">
      <div className="relative h-72 overflow-hidden">
        <MediaPlaceholder label={name} className="transition duration-500 group-hover:scale-105 group-hover:opacity-85" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-white">{name}</h3>
        <p className="mt-1 text-sm text-mist">{focus}</p>
      </div>
    </article>
  );
}
