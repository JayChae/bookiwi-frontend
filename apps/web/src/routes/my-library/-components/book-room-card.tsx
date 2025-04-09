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
    <Link from="/" to="/book-room/$id" params={{ id }}>
      <Card className="w-64">
        <CardHeader className="relative">
          <CardDropdown />
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
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
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">{lastActivityAt}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default memo(BookRoomCard);
