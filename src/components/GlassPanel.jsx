export function GlassPanel({ children, className = '' }) {
  return (
    <div
      className={`border border-[var(--border)] bg-[var(--panel)] shadow-glow backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
