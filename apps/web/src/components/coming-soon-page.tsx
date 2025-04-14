import { Link } from "@tanstack/react-router";

function ComingSoonPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
      <h1 className="mb-2 text-3xl font-bold">준비 중입니다</h1>
      <p className="mb-6 text-gray-600">
        현재 이 페이지는 준비 중입니다. 곧 서비스를 이용하실 수 있도록
        노력하겠습니다.
      </p>
      <div className="mb-8 flex animate-pulse space-x-4">
        <div className="size-3 rounded-full bg-gray-300" />
        <div className="size-3 rounded-full bg-gray-300" />
        <div className="size-3 rounded-full bg-gray-300" />
      </div>

      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default ComingSoonPage;
