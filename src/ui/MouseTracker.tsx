import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("MouseTracker mounted");
    document.onmousemove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log("mouse moved", e.clientX, e.clientY);
    };
    return () => {
      console.log("MouseTracker unmounted");
      document.onmousemove = null;
    };
  }, []);
  return (
    <p>
      Position de la souris ({position.x};{position.y})
    </p>
  );
};

export default MouseTracker;
