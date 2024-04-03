import type { Metadata } from 'next';
// import Script from 'next/script'
import { Inter } from 'next/font/google';
import IconMail from '@/components/IconMail';
import IconGithub from '@/components/IconGithub';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord Timestamp Generator',
  description:
    "Automatically convert dates and times to the Discord timestamp format for displaying times in everyone's local timezone.",
  icons: {
    icon: {
      url: '/favicon.png',
    },
    shortcut: {
      url: '/favicon.png',
    },
    apple: {
      url: '/favicon.png',
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
        <footer className="mt-6 mb-6 text-center">
          <a href="mailto: support@discordtimestampsgenerator.com">
            <IconMail className="text-lg manual-link" />
          </a>
          {/* <a href="https://github.com/hadeshe93/discord-timestamp" className='ml-10'>
            <IconGithub className="text-lg manual-link" />
          </a> */}
        </footer>
      </body>
    </html>
  );
}
