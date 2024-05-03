import type { Metadata } from "next";
import { title } from "./base";
import Providers from "@/redux/provider";
import "./globals.css";

export const metadata: Metadata = { title: "Shiny" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={title.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
