import { useEffect, useRef, ComponentPropsWithoutRef } from "react";

import { useReader } from "./context";

function ReaderContents(props: ComponentPropsWithoutRef<"div">) {
  const viewerRef = useRef<HTMLDivElement>(null);
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

  return <div ref={viewerRef} {...props} />;
}

export { ReaderContents };
