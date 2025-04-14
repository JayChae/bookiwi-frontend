import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";

function LinkInput() {
  return (
    <form className="flex w-72 items-center gap-2 mobile:w-full mobile:flex-1">
      <Input type="url" placeholder="공유 링크를 입력하세요" className="" />
      <Button type="submit">추가</Button>
    </form>
  );
}

export default LinkInput;
