import { createContext, useContext, useMemo, useState } from "react";

interface SplitViewContextType {
  splitViewOpen: boolean;
  setSplitViewOpen: (open: boolean) => void;
  splitViewPinned: boolean;
  setSplitViewPinned: (pinned: boolean) => void;
}

const SplitViewContext = createContext<SplitViewContextType | undefined>(
  undefined,
);

export const useSplitView = () => {
  const context = useContext(SplitViewContext);
  if (context === undefined) {
    throw new Error("useSplitView must be used within a SplitViewProvider");
  }
  return context;
};

export function SplitViewProvider({ children }: { children: React.ReactNode }) {
  const [splitViewOpen, setSplitViewOpen] = useState(false);
  const [splitViewPinned, setSplitViewPinned] = useState(false);

  const value = useMemo(
    () => ({
      splitViewOpen,
      setSplitViewOpen,
      splitViewPinned,
      setSplitViewPinned,
    }),
    [splitViewOpen, setSplitViewOpen, splitViewPinned, setSplitViewPinned],
  );

  return (
    <SplitViewContext.Provider value={value}>
      {children}
    </SplitViewContext.Provider>
  );
}
