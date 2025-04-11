import { Bookmark } from "lucide-react";

function BookmarksPanel() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">책갈피</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Bookmark size={16} className="mt-1 text-primary" />
          <div>
            <p className="font-medium">Chapter 1</p>
            <p className="text-sm text-muted-foreground">
              Important scene with protagonist
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Bookmark size={16} className="mt-1 text-primary" />
          <div>
            <p className="font-medium">Chapter 3</p>
            <p className="text-sm text-muted-foreground">
              Key dialogue between characters
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BookmarksPanel;
