import Footer from "@/components/footer";
import Meta from "@/components/meta";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-[#FDFCFF]">
      <Meta />
      <Navbar />
      <div className="min-h-screen font-medium">{children}</div>
      <Footer />
    </div>
  );
}
