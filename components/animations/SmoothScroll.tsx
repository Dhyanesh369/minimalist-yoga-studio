"use client";
import Lenis from "lenis";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Force recalculate on route change
    lenis.scrollTo(0, { immediate: true });
    
    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
