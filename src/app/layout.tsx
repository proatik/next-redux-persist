import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next | Redux | Persist",
  description: "An experiment on persisting the redux state on locale storage",
};

// redux provider.
import ReduxProvider from "@/providers/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
