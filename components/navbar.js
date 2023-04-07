/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "./container";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const NavItem = ({ label, route }) => {
    return (
      <Link
        href={route}
        className={`hover:bg-primary hover:bg-opacity-5 hover:text-primary rounded-md px-5 py-3 text-sm font-medium ${
          currentRoute === route
            ? "bg-primary text-primary bg-opacity-5"
            : "text-gray-400"
        }`}
        aria-current="page"
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="bg-sky-50 border-b border-gray-200 sticky top-0 z-10">
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" aria-current="page">
                <img
                  className="block w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  height={32}
                  width={32}
                />

                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  height={32}
                  width={32}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-2">
                <NavItem label={"Kennsluefni"} route={"/kennsluefni"} />
                <NavItem label={"Verkefni"} route={"/verkefni"} />
                <NavItem label={"Hlekkir"} route={"/hlekkir"} />
                <NavItem label={"Um vefinn"} route={"/um-vefinn"} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Kennsluefni
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Verkefni
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Um vefinn
          </a>
        </div>
      </div>
    </nav>
  );
}
