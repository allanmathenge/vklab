import type { Metadata } from "next";
import "./globals.css";
import { CompoundProvider } from "./context/CompounProvider";
import { ReactElement } from "react";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "VkLab",
  description: "DRUGS VISUALIZATION AND DISCOVERY",
};

type ChildrenType = { children?: ReactElement | ReactElement[] }

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <CompoundProvider>
          {children}
        </CompoundProvider>
        <Footer />
      </body>
    </html>
  );
}
