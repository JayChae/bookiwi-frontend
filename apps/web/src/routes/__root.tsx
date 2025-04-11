import { Outlet, createRootRoute, HeadContent } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "소셜 이북 리더기, 함께 읽는 즐거움",
      },
      {
        title: "Bookiwi",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/images/icon.png",
      },
    ],
    scripts: [],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
