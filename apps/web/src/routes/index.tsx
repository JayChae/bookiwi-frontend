import { createFileRoute } from "@tanstack/react-router";

import Header from "./-components/header";
import LinkInput from "./-components/link-input";

function MyLibrary() {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <main className="size-full bg-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            내 서재
            <data className="text-xl text-muted-foreground">(3)</data>
          </h1>
          <LinkInput />
        </div>
      </main>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: MyLibrary,
});
