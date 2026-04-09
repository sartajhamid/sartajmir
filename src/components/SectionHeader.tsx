interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlightedWord: string;
}

const SectionHeader = ({ subtitle, title, highlightedWord }: SectionHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-0.5 bg-primary" />
        <span className="text-primary text-xs font-mono-code tracking-[0.2em] uppercase font-semibold">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic">
        {title}{" "}
        <span className="text-gradient italic">{highlightedWord}</span>
      </h2>
    </div>
  );
};

export default SectionHeader;
