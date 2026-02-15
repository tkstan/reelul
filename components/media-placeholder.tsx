type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#151a28] via-[#101625] to-[#1b2645] text-center text-xs font-medium uppercase tracking-[0.18em] text-white/55 ${className}`}
    >
      {label}
    </div>
  );
}
