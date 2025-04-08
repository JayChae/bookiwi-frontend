import { Link } from "@tanstack/react-router";

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
        <div>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Profile"
          >
            <Avatar className="size-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </nav>
      <Separator />
    </header>
  );
}

export default Header;
