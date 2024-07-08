import { cn } from "@/lib/utils";
import "@/styles/index.css";
import { Montserrat as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
