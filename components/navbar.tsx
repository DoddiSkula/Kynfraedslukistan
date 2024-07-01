import { WEBSITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItem = ({ label, route }) => {
    const isSelected = currentRoute === route;

    return (
      <Link
        href={route}
        aria-current="page"
        onClick={() => setDrawerOpen(false)}
      >
        <Button
          variant={isSelected ? "secondary" : "ghost"}
          className={cn({ "text-zinc-500 hover:text-purple-800": !isSelected })}
        >
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 sm:top-0 left-0 right-0 m-auto z-50 flex flex-col sm:items-center sm:justify-center">
      <div
        className={classNames(
          "hidden sm:flex overflow-hidden h-14 w-full gap-2 items-center justify-center transition-all border-b",
          {
            "shadow-2xl shadow-black/5 bg-white ": scrollPosition > 10,
          }
        )}
      >
        <NavItem label={"Forsíða"} route={"/"} />
        <NavItem label={"Fræðsluefni"} route={"/fraedsla"} />
        <NavItem label={"Verkefni"} route={"/verkefni"} />
        <NavItem label={"Um vefinn"} route={"/um-vefinn"} />
      </div>

      <div
        className={classNames(
          "bg-white px-5 h-16 w-full border-b flex items-center justify-between sm:hidden",
          { "border-none": drawerOpen, "shadow-lg": scrollPosition > 10 }
        )}
      >
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={Logo} alt="logo" className="w-7 h-7"></Image>
          <p className="text-gray-700 font-semibold text-lg">{WEBSITE_NAME}</p>
        </Link>

        <button
          type="button"
          onClick={() => setDrawerOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md w-12 h-12 p-2 text-violet-700 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-300"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {drawerOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {drawerOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex shadow-xl flex-col shad bg-white border-b space-y-1 px-2 pb-3 pt-2">
            <NavItem label={"Forsíða"} route={"/"} />
            <NavItem label={"Fræðsla"} route={"/fraedsla"} />
            <NavItem label={"Verkefni"} route={"/verkefni"} />
            <NavItem label={"Um vefinn"} route={"/um-vefinn"} />
          </div>
        </div>
      )}
    </nav>
  );
}
