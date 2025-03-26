import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Packet Analyzer", href: "#packet-analyzer" },
    { name: "Test Automation", href: "#test-automation" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2">
              TT
            </div>
            <span className="text-xl font-bold gradient-text">TechTez</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-800 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
            <nav className="flex flex-col mt-10 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="mt-6 w-full">
                <a href="#contact" onClick={closeMenu}>
                  Get in Touch
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;
