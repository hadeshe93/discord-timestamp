import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Timestamp Converter",
  description: "Automatically convert dates and times to the Discord timestamp format for displaying times in everyone's local timezone.",
  icons: {
    icon: {
      url: '/logo.png'
    },
    shortcut: {
      url: '/logo.png'
    },
    apple: {
      url: '/logo.png'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
