import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./components/SideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mithat Sarikaya Portfolio",
  description: "Portfolio of a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>

      <body className={`${styles.body} ${inter.className}`}>
        {/* <div className={styles.openNavWhenSmall}>---------</div> */}
        <div className={styles.layoutSideBar}>
          <SideBar />
        </div>
        <div className={styles.panel}>{children}</div>
      </body>
    </html>
  );
}
