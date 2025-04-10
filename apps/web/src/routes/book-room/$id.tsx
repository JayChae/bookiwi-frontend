import { createFileRoute } from "@tanstack/react-router";

import Header from "./-component/header";

export const Route = createFileRoute("/book-room/$id")({
  component: BookRoom,
});

function BookRoom() {
  // const { id } = Route.useParams();

  return (
    <main className="flex size-full h-screen w-screen flex-col overflow-y-hidden">
      <Header
        title="Alice's Adventures in Wonderland"
        profileImage="https://github.com/shadcn.png"
        color="green"
      />
    </main>
  );
}
