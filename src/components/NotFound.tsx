import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        No results found. Try searching something else.
      </p>
      <Link to="/">
        <Button className="gradient-bg shadow-glow hover:shadow-hover transition-all">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
