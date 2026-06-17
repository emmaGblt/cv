type TSKILL_TYPE = "frontend" | "backend" | "devops";

type TSKILL = {
  key: string;
  type: TSKILL_TYPE;
  svgSrc: string;
  href: string;
  altText: string;
  name: string;
};

export type { TSKILL, TSKILL_TYPE };
