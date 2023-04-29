import Footer from "components/footer";
import Meta from "components/meta";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Navbar />
      <div className="min-h-screen py-28">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
