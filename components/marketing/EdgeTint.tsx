"use client";

import { useEffect, useRef } from "react";

/**
 * Safari op de iPhone legt onderaan, achter de adresbalk, een waas in de achtergrondkleur van de pagina. Boven een donker
 * vlak (de foto, het groene blok) werd dat een witte veeg. Een smal vast strookje onderaan neemt steeds de kleur aan van
 * wat eronder ligt; Safari kleurt de waas daarnaar. Het strookje zelf valt weg tegen dezelfde kleur.
 */
export function EdgeTint() {
  const strip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const paint = () => {
      frame = 0;
      const el = strip.current;
      if (!el) return;
      // Wat er onder het strookje ligt: het strookje zelf overslaan.
      let node: Element | null | undefined = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight - 1).find((n) => n !== el);
      while (node) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== "transparent" && !bg.endsWith(", 0)")) {
          el.style.backgroundColor = bg;
          return;
        }
        node = node.parentElement;
      }
      el.style.backgroundColor = "";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Safari vindt dit strookje alleen als het echt "aanraakbaar" is en een paar pixels hoog: geen pointer-events-none.
  // Het vult de strook van de thuisbalk, waar de adresbalk toch overheen ligt.
  return (
    <div
      ref={strip}
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-40 h-[calc(env(safe-area-inset-bottom,0px)+6px)] bg-background"
    />
  );
}
