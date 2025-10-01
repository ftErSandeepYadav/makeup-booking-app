import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "✨ GlamBook - Elite Makeup Artist Booking Platform",
  description: "Discover and book the finest makeup artists for weddings, parties, and special occasions. Professional beauty services at your fingertips.",
  keywords: "makeup artist, bridal makeup, party makeup, beauty services, professional makeup",
  openGraph: {
    title: "GlamBook - Elite Makeup Artist Booking",
    description: "Find and book the best makeup artists near you",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-800 antialiased">
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}