import BookRoomCard from "./book-room-card";

interface BookRoom {
  id: string;
  name: string;
  description: string;
  image: string;
  lastActivityAt: string;
}

function Library({ bookRooms }: { bookRooms: BookRoom[] }) {
  return (
    <section className="flex flex-wrap gap-10 mobile:grid mobile:grid-cols-2 mobile:gap-4">
      {bookRooms.map((bookRoom) => (
        <BookRoomCard
          key={bookRoom.id}
          id={bookRoom.id}
          name={bookRoom.name}
          description={bookRoom.description}
          image={bookRoom.image}
          lastActivityAt={bookRoom.lastActivityAt}
        />
      ))}
    </section>
  );
}

export default Library;
