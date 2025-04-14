import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-library/finished/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>다 읽은 책들</div>;
}
