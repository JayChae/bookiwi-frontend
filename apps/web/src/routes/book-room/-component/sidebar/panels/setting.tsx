import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "#/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { Separator } from "#/components/ui/separator";
import { Switch } from "#/components/ui/switch";

function SettingsPanel() {
  const [fontFamily, setFontFamily] = useState("original");
  const [singlePage, setSinglePage] = useState(true);
  const [fontSize, setFontSize] = useState<"default" | number>("default");
  const [paragraphSpacing, setParagraphSpacing] = useState<"default" | number>(
    "default",
  );

  const handleFontSizeChange = (action: "increase" | "decrease" | "reset") => {
    if (action === "reset") {
      setFontSize("default");
      return;
    }

    const currentSize = fontSize === "default" ? 16 : fontSize;
    if (action === "increase") {
      setFontSize(currentSize + 1);
    } else {
      setFontSize(Math.max(8, currentSize - 1));
    }
  };

  const handleParagraphSpacingChange = (
    action: "increase" | "decrease" | "reset",
  ) => {
    if (action === "reset") {
      setParagraphSpacing("default");
      return;
    }

    const currentSpacing =
      paragraphSpacing === "default" ? 1.5 : paragraphSpacing;
    if (action === "increase") {
      setParagraphSpacing(Number((currentSpacing + 0.1).toFixed(1)));
    } else {
      setParagraphSpacing(Number(Math.max(1, currentSpacing - 0.1).toFixed(1)));
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">설정</h3>
      <div className="space-y-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">한 페이지로 보기</span>
            <Switch
              id="theme-switch"
              checked={singlePage}
              onCheckedChange={setSinglePage}
            />
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">글꼴</span>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger>
                <SelectValue placeholder="원본" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pretandard">pretandard</SelectItem>
                <SelectItem value="original">원본</SelectItem>
                <SelectItem value="human">휴먼명조</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">글자 크기</span>
              <div className="flex items-center gap-1 overflow-hidden rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none"
                  onClick={() => handleFontSizeChange("decrease")}
                >
                  <MinusIcon className="size-4" />
                </Button>
                <div className="min-w-14 px-2 text-center text-sm">
                  {fontSize === "default" ? "원본" : fontSize}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none"
                  onClick={() => handleFontSizeChange("increase")}
                >
                  <PlusIcon className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none border-l"
                  onClick={() => handleFontSizeChange("reset")}
                  title="원본으로"
                >
                  <RotateCcwIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">문단 간격</span>
              <div className="flex items-center gap-1 overflow-hidden rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none"
                  onClick={() => handleParagraphSpacingChange("decrease")}
                >
                  <MinusIcon className="size-4" />
                </Button>
                <div className="min-w-14 px-2 text-center text-sm">
                  {paragraphSpacing === "default" ? "원본" : paragraphSpacing}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none"
                  onClick={() => handleParagraphSpacingChange("increase")}
                >
                  <PlusIcon className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none border-l"
                  onClick={() => handleParagraphSpacingChange("reset")}
                  title="원본으로"
                >
                  <RotateCcwIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
