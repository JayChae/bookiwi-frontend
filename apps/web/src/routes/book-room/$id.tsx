import { createFileRoute } from "@tanstack/react-router";

import AnnotationContainer from "./-component/annotation/container";
import Header from "./-component/header";
import Reader from "./-component/reader";
import {
  SplitViewProvider,
  useSplitView,
} from "./-component/split-view/context";
import SplitViewContainer from "./-component/split-view/split-view-container";
import { PRIMARY_VIEW_WIDTH } from "./-component/split-view/width";
import { ReaderProvider } from "./-reader";

import bookRooms from "#/DB/book-room";
import { cn } from "#/lib/utils";

interface BookRoomData {
  id: string;
  name: string;
  description: string;
  image: string;
  lastActivityAt: string;
}

export const Route = createFileRoute("/book-room/$id")({
  loader: async ({ params }) => {
    // 실제로는 ID를 기반으로 책 정보를 API에서 가져오는 코드
    const bookRoom = bookRooms.find(
      (room: BookRoomData) => room.id === params.id,
    );
    return { bookRoom };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `Book Room | ${loaderData.bookRoom?.name}`,
      },
    ],
  }),
  component: BookRoom,
});

function BookRoomContent() {
  const { splitViewPinned } = useSplitView();
  const { bookRoom } = Route.useLoaderData();
  const bookTitle = bookRoom?.name || "Alice's Adventures in Wonderland";

  return (
    <main className="flex size-full h-screen w-screen flex-col overflow-hidden">
      <Header
        title={bookTitle}
        profileImage="https://github.com/shadcn.png"
        color="green"
      />
      <div className="relative flex flex-1 overflow-hidden">
        <div
          className={cn(
            splitViewPinned ? PRIMARY_VIEW_WIDTH : "w-full",
            "transition-all duration-300",
          )}
        >
          <Reader />
        </div>
        <SplitViewContainer>
          <AnnotationContainer>
            <p>추가 예정</p>
          </AnnotationContainer>
        </SplitViewContainer>
      </div>
    </main>
  );
}

function BookRoom() {
  return (
    <ReaderProvider>
      <SplitViewProvider>
        <BookRoomContent />
      </SplitViewProvider>
    </ReaderProvider>
  );
}
