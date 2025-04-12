import { MessageSquareQuote } from "lucide-react";

import Sidebar from "../sidebar";
import { useSplitView } from "../split-view/context";

import Profiles from "./profiles";

import { Separator } from "#/components/ui/separator";
import { cn } from "#/lib/utils";

interface HeaderProps {
  title: string;
  profileImage?: string;
  color: string;
}

function Header({ title, profileImage, color }: HeaderProps) {
  const { splitViewOpen, setSplitViewOpen, setSplitViewPinned } =
    useSplitView();

  const handleSplitView = () => {
    setSplitViewOpen((prev) => !prev);
    setSplitViewPinned((prev) => !prev);
  };

  return (
    <header>
      <div className="flex items-center justify-between p-3">
        <Sidebar />
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-5 pr-3">
          <button
            type="button"
            className={cn(
              "relative flex items-center justify-center rounded-md p-2",
              splitViewOpen ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100",
            )}
            onClick={handleSplitView}
            aria-label="Toggle notes and comments"
          >
            <MessageSquareQuote size={28} />
            <span className="absolute bottom-7 left-7 size-3 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
          <Profiles profileImage={profileImage} color={color} />
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;
