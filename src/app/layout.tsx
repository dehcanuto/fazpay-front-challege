import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { SessionRoot } from "@/components/organisms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FazPay - É digital, é para todos!",
  description: "Solução completa e simples como você sempre quis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionRoot>
          {children}
        </SessionRoot>
      </body>
    </html>
  );
}
