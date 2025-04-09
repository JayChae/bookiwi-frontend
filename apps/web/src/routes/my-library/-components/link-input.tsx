import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";

function LinkInput() {
  return (
    <form className="flex w-80 items-center gap-2">
      <Input type="url" placeholder="공유 링크를 입력하세요" />
      <Button type="submit">추가</Button>
    </form>
  );
}

export default LinkInput;
