import Sidebar from "../sidebar";

import AnnotationButton from "./annotation-button";
import HomeButton from "./home-button";
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
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center gap-3 pl-3">
          <HomeButton />
          <Sidebar />
        </div>
        <h1 className="text-lg">{title}</h1>
        <div className="flex items-center gap-4 pr-3">
          <AnnotationButton />
          <Profiles profileImage={profileImage} color={color} />
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;
