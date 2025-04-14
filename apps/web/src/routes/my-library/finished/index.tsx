import { createFileRoute } from "@tanstack/react-router";

import ComingSoonPage from "#/components/coming-soon-page";

export const Route = createFileRoute("/my-library/finished/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ComingSoonPage />;
}
