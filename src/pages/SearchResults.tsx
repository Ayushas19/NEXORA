import { useSearchParams } from "react-router-dom";
import NotFound from "@/components/NotFound";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // Always show NotFound for this implementation
  return <NotFound />;
};

export default SearchResults;
