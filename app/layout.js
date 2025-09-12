import { Inter } from 'next/font/google'; // Modern, clean font
import { Red_Hat_Display } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "Kreisson - Construction & Engineering Lawyers",
  description: "Practical Advice. Commercial Outcomes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${redHatDisplay.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}