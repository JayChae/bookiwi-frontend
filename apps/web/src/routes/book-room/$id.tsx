import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book-room/$id")({
  component: BookRoom,
});

function BookRoom() {
  const { id } = Route.useParams();

  return (
    <div className="container py-8">
      <h1 className="mb-4 text-2xl font-bold">Book Room {id}</h1>
      <p>Book room detail content will be displayed here.</p>
    </div>
  );
}
