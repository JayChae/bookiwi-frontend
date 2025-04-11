import { Search } from "lucide-react";

function SearchPanel() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">검색</h3>
      <div className="relative">
        <Search
          size={18}
          className="absolute left-2 top-2.5 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="책 내용 검색..."
          className="w-full rounded-md border border-input py-2 pl-8"
        />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        검색 결과가 여기에 표시됩니다.
      </div>
    </div>
  );
}

export default SearchPanel;
