import { ComponentProps } from "react";

import { useReader } from "./context";

function ReaderPrevPageButton(props: ComponentProps<"button">) {
  const { book } = useReader();
  const { children, ...rest } = props;

  const goToPrevPage = () => {
    if (book && book.rendition) {
      book.rendition.prev();
    }
  };

  return (
    <button type="button" {...rest} onClick={goToPrevPage}>
      {children}
    </button>
  );
}

function ReaderNextPageButton(props: ComponentProps<"button">) {
  const { book } = useReader();
  const { children, ...rest } = props;
  const goToNextPage = () => {
    if (book && book.rendition) {
      book.rendition.next();
    }
  };
  return (
    <button type="button" {...rest} onClick={goToNextPage}>
      {children}
    </button>
  );
}

export { ReaderPrevPageButton, ReaderNextPageButton };
