import React from "react";
import Link from "next/link";

export const Footer = ({ data }) => {
  return (
    <footer className={`bg-gradient-to-br`}>
      <div className="flex justify-between items-center gap-6 flex-wrap">
        <Link href="/" passHref>
          <a className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap">
            test link
          </a>
        </Link>
      </div>
      <div
        className={`absolute h-1 bg-gradient-to-r from-transparent ${
          data.color === "primary" ? `via-white` : `via-black dark:via-white`
        } to-transparent top-0 left-4 right-4 opacity-5`}
      ></div>
    </footer>
  );
};
