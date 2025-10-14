import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/globals.css';
import '@/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'rhk Properties LLC - Luxury Real Estate Dubai',
  description: 'Your trusted partner in luxury real estate across the UAE. Delivering exceptional properties and unmatched service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


