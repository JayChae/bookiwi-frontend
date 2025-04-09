import { createFileRoute } from "@tanstack/react-router";

import Header from "./-components/header";
import Library from "./-components/library";
import LinkInput from "./-components/link-input";

import bookRooms from "#/DB/book-room";

function MyLibrary() {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <main className="size-full bg-white p-4">
        <div className="mb-7 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            내 서재
            <data className="text-xl text-muted-foreground">
              {`(${bookRooms.length})`}
            </data>
          </h1>
          <LinkInput />
        </div>

        <Library bookRooms={bookRooms} />
      </main>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: MyLibrary,
});
