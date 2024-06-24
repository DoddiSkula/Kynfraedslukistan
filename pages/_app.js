import "styles/index.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
