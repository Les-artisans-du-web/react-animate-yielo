import { ReactNode } from "react";

export interface FadeInAndUpsideProps {
  children: ReactNode;
  defaultOpacity?: number;
  slide?: number;
  delay?: number;
  duration?: number;
}
