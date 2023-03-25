import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Navbar from "./navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
