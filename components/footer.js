import { WEBSITE_NAME } from "lib/constants";
import Image from "next/image";
import Logo from "public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="body-font py-6 flex items-center justify-center bg-gray-100 text-center border-t shadow-inner mt-14">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex items-center justify-center gap-y-4 gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-violet-100">
            <Image src={Logo} alt="logo" className="w-6 h-6"></Image>
          </div>

          <p className="text-violet-800">
            {WEBSITE_NAME} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
