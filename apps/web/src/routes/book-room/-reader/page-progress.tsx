import usePageInfo from "./hooks/use-page-info";

function ReaderPageProgress() {
  const { page, total } = usePageInfo();

  return (
    <div className="absolute bottom-0 left-0 z-30 h-10 w-full text-center text-black">
      {page && total ? `${page}/${total}` : "페이지를 계산할 수 없습니다"}
    </div>
  );
}

export { ReaderPageProgress };
