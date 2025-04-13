import Sidebar from "../sidebar";

import AnnotationButton from "./annotation-button";
import Profiles from "./profiles";

import { Separator } from "#/components/ui/separator";

interface HeaderProps {
  title: string;
  profileImage?: string;
  color: string;
}

function Header({ title, profileImage, color }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between p-3">
        <Sidebar />
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-5 pr-3">
          <AnnotationButton />
          <Profiles profileImage={profileImage} color={color} />
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;
