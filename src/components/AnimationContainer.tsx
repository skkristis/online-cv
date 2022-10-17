import { useInView } from "react-intersection-observer";
import "../stylesheets/AnimationContainer.css";

type Props = {
  children: JSX.Element;
  type: string;
  delay?: number;
};
export default function AnimationContainer({
  children,
  type,
  delay = 0,
}: Props) {
  const { ref: elRef, inView: elIsVisible, entry: targetElement } = useInView();

  if (elIsVisible) {
    targetElement?.target.classList.add("animation-visible");
  } else {
    targetElement?.target.classList.remove("animation-visible");
  }

  return (
    <div
      ref={elRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`animation-hidden-${type}`}
    >
      {children}
    </div>
  );
}
