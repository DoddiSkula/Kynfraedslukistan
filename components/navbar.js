import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const NavItem = ({ label, route }) => {
    return (
      <Link
        href={route}
        className={`hover:bg-violet-50 hover:text-violet-600 rounded-full px-5 py-3 font-medium ${
          currentRoute === route
            ? "bg-violet-50 text-violet-600 font-semibold"
            : "text-gray-400"
        }`}
        aria-current="page"
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-4 left-0 right-0 m-auto w-fit z-50 bg-white border rounded-full p-1 flex items-center shadow-md">
      <div className="relative flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block">
            <div className="flex space-x-1">
              <NavItem label={"Forsíða"} route={"/"} />
              <NavItem label={"Kennsluefni"} route={"/kennsluefni"} />
              <NavItem label={"Verkefni"} route={"/verkefni"} />
              <NavItem label={"Fræðsla"} route={"/hlekkir"} />
              <NavItem label={"Um vefinn"} route={"/um-vefinn"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
