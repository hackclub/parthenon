import type { Metadata } from "next";
import { EB_Garamond, Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "700"],
});

const inter = Ubuntu({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const windsol = localFont({
  src: "./Windsol-Regular.ttf",
  variable: "--font-windsol",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Parthenon",
  description:
    "The world's largest hackathon for high school aged girls and nonbinary teens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${windsol.className} ${ebGaramond.variable} ${inter.variable} font-bold antialiased bg-[#3B5435]`}
      >
        {children}
      </body>
    </html>
  );
}
