import { EllipsisVertical } from "lucide-react";

import { Button } from "#/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "#/components/ui/dropdown-menu";

function CardDropdown() {
  const stopPropagation = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    e.stopPropagation();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 z-10 mobile:size-10"
          onClick={stopPropagation}
        >
          <EllipsisVertical className="size-5 mobile:size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={stopPropagation}
        className="mobile:min-w-[180px]"
      >
        <DropdownMenuItem className="mobile:py-3">같이 읽기</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="mobile:py-3">복제하기</DropdownMenuItem>
        <DropdownMenuItem className="mobile:py-3">삭제하기</DropdownMenuItem>
        <DropdownMenuItem className="mobile:py-3">수정하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CardDropdown;
