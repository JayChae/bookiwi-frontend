import { BookOpen, Bookmark, Search, Settings } from "lucide-react";
import * as React from "react";

import { TabType } from "./tab-type";

import { cn } from "#/lib/utils";

type NavIconProps = {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  label: string;
};

function NavIconButton({ icon, isActive, onClick, label }: NavIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 rounded-md p-2 transition-colors",
        isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-accent",
      )}
      title={label}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}

interface SidebarNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

function SidebarNav({ activeTab, setActiveTab }: SidebarNavProps) {
  return (
    <nav className="flex w-16 flex-col items-center gap-6 border-r py-6">
      <NavIconButton
        icon={<BookOpen size={24} />}
        isActive={activeTab === "toc"}
        onClick={() => setActiveTab("toc")}
        label="목차"
      />
      <NavIconButton
        icon={<Bookmark size={24} />}
        isActive={activeTab === "bookmark"}
        onClick={() => setActiveTab("bookmark")}
        label="책갈피"
      />
      <NavIconButton
        icon={<Search size={24} />}
        isActive={activeTab === "search"}
        onClick={() => setActiveTab("search")}
        label="검색"
      />
      <NavIconButton
        icon={<Settings size={24} />}
        isActive={activeTab === "settings"}
        onClick={() => setActiveTab("settings")}
        label="설정"
      />
    </nav>
  );
}

export default SidebarNav;
