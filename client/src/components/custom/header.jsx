import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3 lg:px-12">
        <Link to={"/dashboard"} className="flex items-center gap-2">
          <img
            src="/logo-full.svg"
            alt="Logo"
            className="cursor-pointer"
            width={150}
            height={150}
          />
        </Link>

        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <Link to={"/dashboard"}>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button className="bg-primary text-white hover:opacity-90">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
