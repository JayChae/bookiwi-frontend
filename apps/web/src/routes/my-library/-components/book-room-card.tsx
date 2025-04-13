import { Link } from "@tanstack/react-router";
import { memo } from "react";

import CardDropdown from "./card-dropdown";

import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "#/components/ui/card";

interface BookRoomProps {
  id: string;
  name: string;
  description: string;
  image: string;
  lastActivityAt: string;
}

function BookRoomCard({
  id,
  name,
  description,
  image,
  lastActivityAt,
}: BookRoomProps) {
  const fallbackImageUrl =
    "https://placehold.co/300x400/e2e8f0/64748b?text=No+Cover";

  return (
    <Link
      from="/"
      to="/book-room/$id"
      params={{ id }}
      className="mobile:w-full"
    >
      <Card className="w-64 mobile:w-full">
        <CardHeader className="relative mobile:p-3">
          <CardDropdown />
          <CardTitle className="text-lg mobile:text-base">{name}</CardTitle>
          <CardDescription className="mobile:text-xs">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mobile:p-3 mobile:pt-0">
          {/* Book cover image */}
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
            <img
              src={image || fallbackImageUrl}
              alt="Book cover"
              className="size-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = fallbackImageUrl;
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mobile:p-3 mobile:pt-1">
          <p className="text-sm text-muted-foreground mobile:text-xs">
            {lastActivityAt}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default memo(BookRoomCard);
