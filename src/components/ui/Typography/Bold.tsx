import type { PropsWithChildren } from "react";

function Bold({ children }: PropsWithChildren) {
  return <strong className="font-bold">{children}</strong>;
}

export default Bold;
