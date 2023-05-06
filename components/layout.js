import Footer from "components/footer";
import Meta from "components/meta";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Navbar />
      <div className="min-h-screen pt-20 sm:pt-24 pb-12">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
