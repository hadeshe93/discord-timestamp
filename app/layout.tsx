import type { Metadata } from "next";
// import Script from 'next/script'
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1L55R0XKHF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-1L55R0XKHF');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Google tag (gtag.js) */}
      </body>
    </html>
  );
}
