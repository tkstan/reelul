type TimelineItem = {
  year: string;
  text: string;
};

type TimelineProps = {
  items: TimelineItem[];
  tone?: 'light' | 'dark';
};

export function Timeline({ items, tone = 'light' }: TimelineProps) {
  const isDark = tone === 'dark';

  return (
    <ol className={`space-y-8 border-l pl-6 md:pl-10 ${isDark ? 'border-paper/25' : 'border-line'}`}>
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span
            className={`absolute -left-[2.05rem] top-1 h-3 w-3 border md:-left-[2.6rem] ${
              isDark ? 'border-paper/60 bg-[#0f1b3e]' : 'border-accent bg-paper'
            }`}
          />
          <p className={`mb-2 font-display text-3xl uppercase leading-none tracking-wide ${isDark ? 'text-paper' : 'text-accent'}`}>
            {item.year}
          </p>
          <p className={`max-w-3xl leading-relaxed ${isDark ? 'text-paper/75' : 'text-ink-muted'}`}>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
