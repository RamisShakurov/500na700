import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import styles from './page.module.css'
import clsx from "clsx";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "500na700",
    description: "Новости от студии дизайна и разработки 500na700",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon"
              href="/favicon.ico"
              type="image/x-icon"/>
    </head>
    <body className={clsx(inter.variable, styles.body)}>
        <Header/>
        {children}
    </body>
    </html>
  );
}
