import { createFileRoute } from "@tanstack/react-router";

import Header from "./-components/header";

function MyLibrary() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <h1>내 서재</h1>
      </main>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: MyLibrary,
});
