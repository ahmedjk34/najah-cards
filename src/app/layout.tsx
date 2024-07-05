import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najah Cards - Your Ultimate Flashcard Learning Platform",
  description:
    "Najah Cards is a comprehensive flashcard application designed to help you learn and retain information across various subjects. Create, manage, and test yourself with custom flashcards, track your progress, and collaborate with others for an engaging learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
