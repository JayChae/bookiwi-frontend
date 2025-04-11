import { TabType } from "../tab-type";

import Bookmarks from "./bookmarks";
import SearchPanel from "./search";
import SettingsPanel from "./setting";
import TableOfContents from "./toc";

interface SidebarPanelsProps {
  activeTab: TabType;
}

function SidebarPanels({ activeTab }: SidebarPanelsProps) {
  return (
    <div className="flex-1 overflow-auto py-6 pr-3">
      {activeTab === "toc" && <TableOfContents />}
      {activeTab === "bookmark" && <Bookmarks />}
      {activeTab === "search" && <SearchPanel />}
      {activeTab === "settings" && <SettingsPanel />}
    </div>
  );
}

export default SidebarPanels;
