import { createFileRoute, Navigate } from "@tanstack/react-router";

function index() {
  return <Navigate to="/my-library" />;
}

export const Route = createFileRoute("/")({
  component: index,
});
