import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pocket Plan",
  description: "Pocket plan gives you the control to easily track income, expenses, and bills-all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
