
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-[12rem] lg:text-[16rem] font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                404
              </h1>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Looks like you've ventured into uncharted territory. The page you're looking for 
              doesn't exist or might have been moved to a different location.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Fun Facts */}
          <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              While you're here, did you know?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="space-y-2">
                <div className="text-2xl">💻</div>
                <p>The first website was created in 1991 by Tim Berners-Lee</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🎨</div>
                <p>CSS was introduced in 1996 to separate design from content</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">⚡</div>
                <p>JavaScript was created in just 10 days by Brendan Eich</p>
              </div>
            </div>
          </div>

          {/* Navigation Suggestions */}
          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                to="/projects"
                className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
