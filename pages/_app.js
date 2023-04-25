import "../styles/index.css";
import { Inter } from "next/font/google";

const font = Inter({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <div>
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
