import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { FadeInAndUpsideProps } from "./type";

export function FadeInAndSlide({
  children,
  defaultOpacity = 0.8,
  slide = 40,
  duration = 500,
  delay = 100,
}: FadeInAndUpsideProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : defaultOpacity,
    transform: inView ? "translateY(0px)" : `translateY(${slide}px)`,
    config: { duration },
    delay,
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      {children}
    </animated.div>
  );
}
