import { useDispatch, useSelector } from "react-redux";
import styles from "./lightdarkmode.module.css";
import Image from "next/image";
import {
  getTheme,
  toggleTheme,
} from "@/store/features/thememode/thememodeSlice";

const LightDarkMode = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  let lightModeIconUrl = "/icons/icons8-light-mode-64.png";
  let darkModeIconUrl = "/icons/icons8-dark-mode-64.png";
  return (
    <Image
      className={styles.lightdarkmode}
      src={theme == "dark" ? lightModeIconUrl : darkModeIconUrl}
      width={48}
      height={48}
      alt="lightdarkmode"
      onClick={() => dispatch(toggleTheme())}
    />
  );
};

export default LightDarkMode;
