import { WEBSITE_NAME } from "@/lib/constants";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="body-font py-6 flex items-center justify-center text-center border-t mt-14">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex items-center justify-center gap-y-4 gap-3">
          <Image src={Logo} alt="logo" className="w-5 h-5"></Image>
          <p className="text-gray-700">
            {WEBSITE_NAME} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
