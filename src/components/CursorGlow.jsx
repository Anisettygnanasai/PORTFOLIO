import {
  useEffect,
  useState,
} from "react";

const CursorGlow = () => {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",

        transform: `translate(${
          position.x - 150
        }px, ${
          position.y - 150
        }px)`,

        transition:
          "transform 0.08s linear",
      }}
    />
  );
};

export default CursorGlow;