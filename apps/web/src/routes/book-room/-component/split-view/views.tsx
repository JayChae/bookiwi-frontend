import { ReactNode } from "react";

import { useSplitView } from "./context";
import { PRIMARY_VIEW_WIDTH, SECONDARY_VIEW_WIDTH } from "./width";

import { cn } from "#/lib/utils";

interface ViewContainerProps {
  children: ReactNode;
}

export function PrimaryView({ children }: ViewContainerProps) {
  const { isPinned } = useSplitView();

  return (
    <div
      className={cn(
        "h-full",
        isPinned ? PRIMARY_VIEW_WIDTH : "w-full",
        "transition-all duration-500 ease-in-out",
      )}
    >
      {children}
    </div>
  );
}

export function SecondaryView({ children }: ViewContainerProps) {
  const { isOpen } = useSplitView();

  if (!isOpen) return null;

  return (
    <aside
      className={cn(
        "animate-slide-in-right absolute right-0 top-0 z-30",
        SECONDARY_VIEW_WIDTH,
        "h-full border-l border-gray-200 bg-white shadow-xl p-1",
      )}
    >
      {children}
    </aside>
  );
}
