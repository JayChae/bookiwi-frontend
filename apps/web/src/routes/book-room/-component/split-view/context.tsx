import { createContext, Dispatch, useContext, useMemo, useState } from "react";

export enum SplitViewState {
  CLOSED,
  OPEN,
  PINNED,
}

interface SplitViewContextType {
  viewState: SplitViewState;
  setViewState: Dispatch<React.SetStateAction<SplitViewState>>;
  isOpen: boolean;
  isPinned: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  pin: () => void;
  unpin: () => void;
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
  const [viewState, setViewState] = useState<SplitViewState>(
    SplitViewState.CLOSED,
  );

  const isOpen =
    viewState === SplitViewState.OPEN || viewState === SplitViewState.PINNED;
  const isPinned = viewState === SplitViewState.PINNED;

  const value = useMemo(() => {
    const open = () => setViewState(SplitViewState.OPEN);
    const close = () => setViewState(SplitViewState.CLOSED);
    const toggle = () =>
      setViewState((prev) =>
        prev === SplitViewState.CLOSED
          ? SplitViewState.OPEN
          : SplitViewState.CLOSED,
      );
    const pin = () => {
      if (isOpen) {
        setViewState(SplitViewState.PINNED);
      }
    };
    const unpin = () => {
      if (isPinned) {
        setViewState(SplitViewState.OPEN);
      }
    };

    return {
      viewState,
      setViewState,
      isOpen,
      isPinned,
      open,
      close,
      toggle,
      pin,
      unpin,
    };
  }, [viewState, isOpen, isPinned]);

  return (
    <SplitViewContext.Provider value={value}>
      {children}
    </SplitViewContext.Provider>
  );
}
