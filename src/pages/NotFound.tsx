
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-fade-in">
          <h1 className="text-8xl font-bold text-event mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Page Not Found</p>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="button-hover-effect">
            <Link to="/" className="flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
