type LabelProps = {
  children: string;
  className?: string;
};

export function Label({ children, className = '' }: LabelProps) {
  return <p className={`section-label ${className}`}>{children}</p>;
}
