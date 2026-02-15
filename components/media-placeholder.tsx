type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`flex h-full w-full items-center justify-center rounded-2xl border border-line bg-[linear-gradient(120deg,#15223e_10%,#0c162d_50%,#15223e_90%)] px-4 text-center font-display text-sm uppercase tracking-[0.18em] text-paper/60 ${className}`}
    >
      {label}
    </div>
  );
}
