import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
