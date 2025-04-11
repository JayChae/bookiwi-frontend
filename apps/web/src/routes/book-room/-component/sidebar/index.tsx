import { useState } from "react";

import SidebarNav from "./nav";
import SidebarPanels from "./panels";
import { TabType } from "./tab-type";
import SidebarTrigger from "./trigger";

import { Separator } from "#/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
} from "#/components/ui/sheet";

function Sidebar() {
  const [activeTab, setActiveTab] = useState<TabType>("toc");

  return (
    <Sheet>
      <SidebarTrigger />
      <SheetPortal>
        <SheetOverlay className="bg-transparent" />
        <SheetContent side="left" className="flex flex-row p-0 sm:max-w-md">
          <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <Separator orientation="vertical" />
          <SidebarPanels activeTab={activeTab} />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
}

export default Sidebar;
