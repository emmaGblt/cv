type AnimatedSkillItemProps = {
  svgSrc: string;
  href: string;
  alt: string;
  name: string;
};

function AnimatedSkillItem({
  svgSrc,
  href,
  alt,
  name
}: AnimatedSkillItemProps) {
  // add alt text

  return (
    <li className="flex-1 shrink-0 grow-0">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="holographic-card neo:shadow-outer-md size-24 md:size-32">
          <span className="card-name px-1.5 py-0.5 text-xs font-bold md:px-2.5 md:py-1 md:text-sm">
            {name}
          </span>
          <img
            src={svgSrc}
            alt={alt}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 md:size-16"
          />
        </div>
      </a>
    </li>
  );
}

export default AnimatedSkillItem;
