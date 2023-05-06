import Container from "./container";
import { WEBSITE_NAME } from "lib/constants";

export default function Footer() {
  return (
    <footer className="body-font h-16 flex items-center justify-center bg-violet-100 text-center">
      <Container>
        <div>
          <p className="text-violet-700">
            {WEBSITE_NAME} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
