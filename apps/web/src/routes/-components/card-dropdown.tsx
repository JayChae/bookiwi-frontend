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
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.stopPropagation();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 z-10"
          onClick={stopPropagation}
        >
          <EllipsisVertical className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent onClick={stopPropagation}>
        <DropdownMenuItem>같이 읽기</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>복제하기</DropdownMenuItem>
        <DropdownMenuItem>삭제하기</DropdownMenuItem>
        <DropdownMenuItem>수정하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CardDropdown;
