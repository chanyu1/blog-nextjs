import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "VICTORY's Blog",
    template: "VICTORY's Blog | %s",
  },
  description: 'VICTORY!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body
        className="flex flex-col w-full max-w-screen-2xl mx-auto"
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
