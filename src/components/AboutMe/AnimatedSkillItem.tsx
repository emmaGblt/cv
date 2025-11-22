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
  name,
}: AnimatedSkillItemProps) {
  // add alt text

  return (
    <li className="shrink-0 grow-0 flex-1">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="size-32 holographic-card neo:shadow-outer-md">
          <span className="py-1 px-2.5 text-sm font-bold card-name">
            {name}
          </span>
          <img
            src={svgSrc}
            alt={alt}
            className="size-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
      </a>
    </li>
  );
}

export default AnimatedSkillItem;
