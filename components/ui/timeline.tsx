type TimelineItem = {
  year: string;
  text: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="space-y-8 border-l border-line pl-6 md:pl-10">
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span className="absolute -left-[2.05rem] top-1 h-3 w-3 border border-accent bg-paper md:-left-[2.6rem]" />
          <p className="mb-2 font-display text-3xl uppercase leading-none tracking-wide text-accent">{item.year}</p>
          <p className="max-w-3xl leading-relaxed text-ink-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
