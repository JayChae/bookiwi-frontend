import { createFileRoute } from "@tanstack/react-router";

import Header from "./-components/header";
import ImportBookButton from "./-components/import-book-button";
import Library from "./-components/library";
import LinkInput from "./-components/link-input";

import bookRooms from "#/DB/book-room";

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
      <main className="size-full bg-white p-6">
        <div className="mb-7 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            내 서재
            <data className="text-xl text-muted-foreground">
              {`(${bookRooms.length})`}
            </data>
          </h1>
          <div className="flex items-center gap-3">
            <LinkInput />
            <ImportBookButton />
          </div>
        </div>

        <Library bookRooms={bookRooms} />
      </main>
    </div>
  );
}
