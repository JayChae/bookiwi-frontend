import { Pin, X } from "lucide-react";
import { ReactNode } from "react";

import { useSplitView } from "./context";
import { SECONDARY_VIEW_WIDTH } from "./width";

import { cn } from "#/lib/utils";

interface SplitViewProps {
  className?: string;
  children?: ReactNode;
}

function SplitViewContainer({ className = "", children }: SplitViewProps) {
  const {
    splitViewOpen,
    setSplitViewOpen,
    splitViewPinned,
    setSplitViewPinned,
  } = useSplitView();

  if (!splitViewOpen) return null;

  const handleCloseSplitView = () => {
    setSplitViewOpen(false);
    setSplitViewPinned(false);
  };

  return (
    <div
      className={cn(
        "flex flex-col",
        SECONDARY_VIEW_WIDTH,
        splitViewPinned
          ? "h-full border-l border-gray-200"
          : "absolute right-0 top-0 z-10 h-full bg-white shadow-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-3">
        <h2 className="text-lg font-semibold">Notes & Comments</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSplitViewPinned(!splitViewPinned)}
            className={cn(
              "rounded-md p-2",
              splitViewPinned
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100",
            )}
            aria-label={splitViewPinned ? "Unpin panel" : "Pin panel"}
          >
            <Pin size={18} />
          </button>
          <button
            type="button"
            onClick={handleCloseSplitView}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Close panel"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Split view content goes here */}
        {children}
      </div>
    </div>
  );
}

export default SplitViewContainer;
