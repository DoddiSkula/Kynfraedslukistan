import Footer from "@/components/footer";
import Meta from "@/components/meta";
import Navbar from "./navbar";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
