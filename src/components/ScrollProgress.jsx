import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const barRef = useScrollProgress();

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" ref={barRef}></div>
    </div>
  );
}
