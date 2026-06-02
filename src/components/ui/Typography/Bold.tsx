import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

function Bold({ children }: Props) {
  return <strong className="font-bold">{children}</strong>;
}

export default Bold;
