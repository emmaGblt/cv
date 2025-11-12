import type { TSeason } from "@/types";
import { createContext } from "react";

export const SeasonContext = createContext<TSeason | null>(null);
