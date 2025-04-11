import { BookOpen, Bookmark, Search, Settings } from "lucide-react";
import { ReactNode } from "react";

import { TabType } from "./tab-type";

import { cn } from "#/lib/utils";

type NavIconProps = {
  icon: ReactNode;
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

const navItems: Array<{ icon: ReactNode; type: TabType; label: string }> = [
  { icon: <BookOpen size={24} />, type: "toc", label: "목차" },
  { icon: <Bookmark size={24} />, type: "bookmark", label: "책갈피" },
  { icon: <Search size={24} />, type: "search", label: "검색" },
  { icon: <Settings size={24} />, type: "settings", label: "설정" },
];
function SidebarNav({ activeTab, setActiveTab }: SidebarNavProps) {
  return (
    <nav className="flex w-16 flex-col items-center gap-6 py-6">
      {navItems.map((item) => (
        <NavIconButton
          key={item.type}
          icon={item.icon}
          isActive={activeTab === item.type}
          onClick={() => setActiveTab(item.type)}
          label={item.label}
        />
      ))}
    </nav>
  );
}

export default SidebarNav;
