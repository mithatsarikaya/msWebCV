import styles from "./lightdarkmode.module.css";
import Image from "next/image";

const LightDarkMode = () => {
  return (
    <Image
      className={styles.lightdarkmode}
      src="/icons/icons8-light-mode-64.png"
      width={48}
      height={48}
      alt="lightdarkmode"
    />
  );
};

export default LightDarkMode;
