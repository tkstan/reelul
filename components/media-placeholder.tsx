type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`flex h-full w-full items-center justify-center border border-line bg-[linear-gradient(120deg,#f8f4ee_10%,#efe8dd_50%,#f8f4ee_90%)] px-4 text-center font-display text-sm uppercase tracking-[0.18em] text-ink-muted ${className}`}
    >
      {label}
    </div>
  );
}
