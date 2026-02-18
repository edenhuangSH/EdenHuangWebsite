interface SectionHeaderProps {
  label: string;
  description?: string;
}

export default function SectionHeader({ label, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium mb-2">
        {label}
      </p>
      {description && (
        <p className="text-stone-500 text-sm leading-relaxed max-w-lg">
          {description}
        </p>
      )}
      <div className="mt-4 w-8 h-px bg-stone-200" />
    </div>
  );
}
