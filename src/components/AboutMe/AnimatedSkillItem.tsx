import type { FC, SVGProps } from "react";

type AnimatedSkillItemProps = {
  Icon: FC<SVGProps<SVGSVGElement>>;
};

function AnimatedSkillItem({ Icon }: AnimatedSkillItemProps) {
  // add link to corresponding resource
  return (
    <li className="shrink-0 grow-0 flex-1">
      <Icon className="size-28" />
    </li>
  );
}

export default AnimatedSkillItem;
