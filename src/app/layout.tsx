import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import { CompoundProvider } from "./context/CompounContext";
import Nav from "./components/nav/Nav";

export const metadata: Metadata = {
  title: "VkLab",
  description: "DRUGS VISUALIZATION AND DISCOVERY",
};

type ChildrenType = { children?: ReactNode | null }

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <body>
        <CompoundProvider>
          <main className="max-w-[1080px] mx-auto">
            <Nav />
              <section className="py-4 min-h-[80vh]">{children}</section>
            <Footer />
          </main>
        </CompoundProvider>
      </body>
    </html>
  );
}
