import Footer from "@/components/footer";
import Meta from "@/components/meta";
import Navbar from "./navbar";

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
