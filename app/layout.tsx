import type { Metadata } from "next";
import "./globals.css";

import { Nunito_Sans } from "next/font/google";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Healthy recipe website",
    template: "%s | Healthy recipe website",
  },
  description:
    "A simple and delicious recipe website to discover, cook, and enjoy healthy meals every day.",
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--nunito-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-100 antialiased ${nunito.variable} ${nunitoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
