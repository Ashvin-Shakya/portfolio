import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${ringX}px`;
        cursorRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      cursorRef.current?.classList.add("cursor-hover");
      dotRef.current?.classList.add("dot-hover");
    };

    const handleLeave = () => {
      cursorRef.current?.classList.remove("cursor-hover");
      dotRef.current?.classList.remove("dot-hover");
    };

    window.addEventListener("mousemove", moveMouse);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);

      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-dot" />
    </>
  );
};

export default Cursor;