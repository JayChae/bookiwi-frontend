import { EllipsisVertical } from "lucide-react";

import { Button } from "#/components/ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "#/components/ui/card";

function Library() {
  return (
    <section className="flex flex-wrap gap-4">
      <Card className="w-64">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
          >
            <EllipsisVertical className="size-5" />
            <span className="sr-only">Options</span>
          </Button>
          <CardTitle className="text-lg">Book Title</CardTitle>
          <CardDescription>Author Name</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Book cover image */}
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
            <img
              src="/placeholder-book-cover.jpg"
              alt="Book cover"
              className="size-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/300x400/e2e8f0/64748b?text=No+Cover";
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Added on May 15, 2023</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Library;
