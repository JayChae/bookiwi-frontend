import { Link } from "@tanstack/react-router";

import Notification from "./notification";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { Separator } from "#/components/ui/separator";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/50">
      <nav className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Bookiwi
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {/* 알림 버튼 */}
          <Notification />
          <Link
            to="/my-page"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Profile"
          >
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
      <Separator />
    </header>
  );
}

export default Header;
