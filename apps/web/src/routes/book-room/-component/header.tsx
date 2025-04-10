import { Menu, MessageSquareQuote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
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
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
        >
          <Menu size={28} />
        </button>
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-5 pr-3">
          <button
            type="button"
            className="relative flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          >
            <MessageSquareQuote size={28} />
            <span className="absolute bottom-7 left-7 size-3 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
          <div className="relative cursor-pointer rounded-md p-2 hover:bg-gray-100">
            <Avatar className="size-9 ">
              <AvatarImage src={profileImage} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span
              className="absolute left-8 top-8 size-3 rounded-full ring-2 ring-white"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;
