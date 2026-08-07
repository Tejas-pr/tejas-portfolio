import { footerConfig } from "@/config/Footer";
import Container from "./Container";

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          {footerConfig.text}{" "}
          <a
            href={footerConfig.deployedByHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-2 hover:text-black dark:hover:text-white"
          >
            {footerConfig.deployedBy}
          </a>{" "}
          <br /> &copy;{" "}
          {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
