import { useEffect, useRef } from "react";

import { useReader } from "../context";

const useTouchScreen = () => {
  const readerRef = useRef<HTMLDivElement>(null);
  const { book } = useReader();

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;

      const readerWidth = readerRef.current?.clientWidth || 0;
      const touchX = e.touches[0].clientX;

      if (touchX < readerWidth / 3) {
        // Left side touched - go to previous page
        if (book?.rendition) {
          book.rendition.prev();
        }
      } else if (touchX > (readerWidth * 2) / 3) {
        // Right side touched - go to next page
        if (book?.rendition) {
          book.rendition.next();
        }
      }
    };

    const readerElement = readerRef.current;
    readerElement?.addEventListener("touchstart", handleTouchStart);

    return () => {
      readerElement?.removeEventListener("touchstart", handleTouchStart);
    };
  }, [book]);

  return { readerRef };
};

export default useTouchScreen;
