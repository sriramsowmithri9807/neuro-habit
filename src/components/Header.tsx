
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-neural-600 animate-pulse-soft" />
              <div className="absolute inset-0 bg-neural-500 rounded-full blur-lg opacity-20 animate-pulse-soft"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              NeuroHabits
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-neural-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-neural-600 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-neural-600 transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-neural-600">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-neural-600 to-habit-600 hover:from-neural-700 hover:to-habit-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-neural-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-600 hover:text-neural-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-neural-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-neural-600 to-habit-600 text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
