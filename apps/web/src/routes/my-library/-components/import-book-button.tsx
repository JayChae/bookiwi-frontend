import { UploadIcon } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "#/components/ui/button";

function ImportBookButton() {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;

    try {
      setLoading(true);
      // Here you would handle the EPUB file import
      // For example, sending it to a backend or processing it locally

      // Reset the file input to allow selecting the same file again
      e.target.value = "";
    } catch (error) {
      // error 처리
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleImportClick}
        disabled={loading}
        className="flex items-center gap-2 mobile:w-full mobile:justify-center"
        variant="secondary"
      >
        <UploadIcon size={16} />
        <span className="tablet:hidden">EPUB 파일 가져오기</span>
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".epub"
        onChange={handleFileChange}
        className="hidden"
        disabled={loading}
      />
    </>
  );
}

export default ImportBookButton;
