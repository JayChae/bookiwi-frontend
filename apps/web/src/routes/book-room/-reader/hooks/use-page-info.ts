import { useEffect, useState } from "react";

import { useReader } from "../context";

const usePageInfo = () => {
  const { book } = useReader();
  const [page, setPage] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (!book || !book.rendition) return;

    const updateLocation = () => {
      if (book.rendition.location && book.rendition.location.start.displayed) {
        const { page: currentPage, total: totalPages } =
          book.rendition.location.start.displayed;
        setPage(currentPage);
        setTotal(totalPages);
      }
    };

    // Initial location check
    updateLocation();

    // Listen for location changes
    book.rendition.on("locationChanged", updateLocation);
  }, [book]);

  return { page, total };
};

export default usePageInfo;
