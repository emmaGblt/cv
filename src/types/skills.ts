type SKILL_TYPE = "frontend" | "backend" | "devops";

type SKILL = {
  key: string;
  type: SKILL_TYPE;
  svgSrc: string;
  href: string;
  altText: string;
  name: string;
};

export type { SKILL, SKILL_TYPE };
