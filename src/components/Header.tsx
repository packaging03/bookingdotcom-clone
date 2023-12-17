/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Booking.com</span>
          <img
            className="h-12 w-auto"
            src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
            alt=""
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
