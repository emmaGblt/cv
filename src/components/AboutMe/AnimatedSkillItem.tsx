import type { FC, SVGProps } from "react";

type AnimatedSkillItemProps = {
  Icon: FC<SVGProps<SVGSVGElement>>;
};

function AnimatedSkillItem({ Icon }: AnimatedSkillItemProps) {
  // add link to corresponding resource
  // add alt text
  // add hover animation

  return (
    <li className="shrink-0 grow-0 flex-1">
      <a>
        <div className="size-28 holographic-card">
          <Icon className="size-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
        </div>
      </a>
    </li>
  );
}

export default AnimatedSkillItem;
