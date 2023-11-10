"use client";
import styles from "./layout.module.css";
import SideBar from "@/app/components/SideBar/SideBar";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/features/thememode/thememodeSlice";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Providers({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme);
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // // if (!mounted) {
  // //   return <>{children}</>;
  // // }

  // console.log({ mounted });

  //TODO: try to get redux state at body tag

  return (
    <Provider store={store}>
      <body className={`${styles.body} ${inter.className}`}>
        <div className={styles.layoutSideBar}>
          <SideBar />
        </div>
        <div className={styles.panel}>{children}</div>
        <LightDarkMode />
      </body>
    </Provider>
  );
}
