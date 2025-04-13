import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

function HomeButton() {
  return (
    <Link to="/my-library" className="rounded-md p-2 hover:bg-gray-100">
      <Home size={22} />
    </Link>
  );
}

export default HomeButton;
