import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import Header from "./-components/header";
import ImportBookButton from "./-components/import-book-button";
import Library from "./-components/library";
import LinkInput from "./-components/link-input";

import bookRooms from "#/DB/book-room";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/my-library/")({
  head: () => ({
    meta: [
      {
        title: "Bookiwi | 내 서재",
      },
    ],
  }),
  component: MyLibrary,
});

function MyLibrary() {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <main className="size-full bg-white p-6 mobile:p-4">
        <div className="mb-7 flex items-center justify-between mobile:mb-5 mobile:flex-col mobile:items-start mobile:gap-4">
          <h1 className="text-2xl font-bold mobile:text-xl tablet:text-xl">
            내 서재
            <data className="text-xl text-muted-foreground mobile:text-lg">
              {`(${bookRooms.length})`}
            </data>
          </h1>

          <div className="flex items-center gap-3 mobile:w-full mobile:flex-col mobile:gap-2">
            <LinkInput />
            <ImportBookButton />
            <Link to="/my-library/finished" className="mobile:w-full">
              <Button variant="outline" className="mobile:w-full">
                완독한 책
                <ArrowRight className="size-4 tablet:hidden" />
              </Button>
            </Link>
          </div>
        </div>
        <Library bookRooms={bookRooms} />
      </main>
    </div>
  );
}
