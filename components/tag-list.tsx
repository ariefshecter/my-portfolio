interface TagListProps {
  items: string[];
  label?: string;
  className?: string;
}

export function TagList({ items, label, className = "" }: TagListProps) {
  return (
    <ul
      aria-label={label}
      className={`flex flex-wrap gap-x-2 gap-y-2 ${className}`.trim()}
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-editorial border border-ink-100 bg-paper-muted px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
