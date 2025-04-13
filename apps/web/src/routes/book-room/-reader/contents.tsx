import { useEffect, useRef, ComponentPropsWithoutRef } from "react";

import { useReader } from "./context";
import useTouchScreen from "./hooks/use-touch-screen";

function ReaderContents(props: ComponentPropsWithoutRef<"div">) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const { readerRef } = useTouchScreen();
  const { book } = useReader();

  useEffect(() => {
    if (!viewerRef.current || !book) return;

    // Render the book in the viewer
    book.renderTo(viewerRef.current, {
      width: "100%",
      height: "100%",
      allowScriptedContent: true,
    });

    // Display the first page
    book.rendition.display();
  }, [book]);

  useEffect(() => {
    if (!book) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        book.rendition.prev();
      } else if (e.key === "ArrowRight") {
        book.rendition.next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [book]);

  // Function to set refs
  const setRefs = (el: HTMLDivElement | null) => {
    viewerRef.current = el;
    readerRef.current = el;
  };

  return <div ref={setRefs} {...props} />;
}

export { ReaderContents };
