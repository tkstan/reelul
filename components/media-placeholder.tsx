'use client';

import { useState } from 'react';

type MediaPlaceholderProps = {
  label: string;
  src?: string;
  className?: string;
};

export function MediaPlaceholder({ label, src, className = '' }: MediaPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={label}
        className={`h-full w-full rounded-2xl border border-line object-cover ${className}`}
        onError={() => setHasError(true)}
      />
    );
  }

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
