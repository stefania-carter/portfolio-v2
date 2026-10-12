import { useCursor } from "../hooks/useCursor";

export default function Cursor() {
  useCursor();

  return (
    <>
      <div className="cursor" id="cursor" aria-hidden="true">
        <div className="cursor-dot"></div>
      </div>
      <canvas className="cursor-canvas" id="cursorCanvas" aria-hidden="true" />
    </>
  );
}
