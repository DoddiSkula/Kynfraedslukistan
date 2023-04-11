import "../styles/index.css";
// pages/_app.js
import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
