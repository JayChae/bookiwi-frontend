import { ReactNode } from "react";

import { useSplitView } from "./context";
import { PRIMARY_VIEW_WIDTH, SECONDARY_VIEW_WIDTH } from "./width";

import { cn } from "#/lib/utils";

interface ViewContainerProps {
  children: ReactNode;
  className?: string;
}

export function PrimaryView({ children, className = "" }: ViewContainerProps) {
  const { splitViewPinned } = useSplitView();

  return (
    <div
      className={cn(
        splitViewPinned ? PRIMARY_VIEW_WIDTH : "w-full",
        "transition-all duration-300 ease-in-out",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SecondaryView({
  children,
  className = "",
}: ViewContainerProps) {
  const { splitViewPinned, splitViewOpen } = useSplitView();

  if (!splitViewOpen) return null;

  return (
    <div
      className={cn(
        "animate-slide-in-right",
        SECONDARY_VIEW_WIDTH,
        "h-full border-l border-gray-200 bg-white shadow-xl",
        splitViewPinned ? "" : "absolute right-0 top-0 z-30",
        className,
      )}
    >
      {children}
    </div>
  );
}
