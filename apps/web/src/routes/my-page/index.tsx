import { createFileRoute } from "@tanstack/react-router";

import ComingSoonPage from "#/components/coming-soon-page";

export const Route = createFileRoute("/my-page/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ComingSoonPage />;
}
