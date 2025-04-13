import { MessageSquareQuote } from "lucide-react";

import { useSplitView } from "../split-view";

import { cn } from "#/lib/utils";

function AnnotationButton() {
  const { isOpen, toggle } = useSplitView();

  return (
    <button
      type="button"
      className={cn(
        "relative flex items-center justify-center rounded-md p-2",
        isOpen ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100",
      )}
      onClick={toggle}
      aria-label="Toggle notes and comments"
    >
      <MessageSquareQuote size={28} />
      <span className="absolute bottom-7 left-7 size-3 rounded-full bg-red-500 ring-2 ring-white" />
    </button>
  );
}

export default AnnotationButton;
