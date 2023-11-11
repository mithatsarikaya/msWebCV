"use client";
import styles from "./layout.module.css";
import SideBar from "@/app/components/SideBar/SideBar";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Panel from "./components/Panel/Panel";

export default function Providers({ children }: { children: React.ReactNode }) {
  //TODOne: try to get redux state at body tag

  return (
    <Provider store={store}>
      <SideBar styleFromParent={styles.layoutSideBar} />
      <Panel children={children} styleFromParent={styles.panel} />
      <LightDarkMode />
    </Provider>
  );
}
