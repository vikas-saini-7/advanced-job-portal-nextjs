import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[60px] flex items-center border-b-2 border-gray-500/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-primary">JOBBER</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/browse">Browse</Link>
            <Link href="/applications">Applications</Link>
          </nav>
        </div>
        <button className="bg-primary py-2 px-6 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out">
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
