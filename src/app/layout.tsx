import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afja FMCG | Leading Distribution & Essentials",
  description: "Modern FMCG distribution company specializing in food, household goods, and daily essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
