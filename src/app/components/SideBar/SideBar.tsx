"use client";
import Link from "next/link";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

type TInsideRoutes = { title: string; link: string }[];
type TOuterRoutes = { title: string; link: string; iconSrc: string }[];
const SideBar = ({ styleFromParent }: { styleFromParent: string }) => {
  let pathname = usePathname();

  const insideRoutes: TInsideRoutes = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Me & CV",
      link: "/aboutme",
    },
  ];

  const outerRoutes: TOuterRoutes = [
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/mithatsarikaya/",
      iconSrc: "/icons/iconmonstr-linkedin-3.svg",
    },
    {
      title: "Github",
      link: "https://github.com/mithatsarikaya",
      iconSrc: "/icons/iconmonstr-github-1.svg",
    },
  ];

  const theme = useSelector((state: RootState) => state.theme.value);

  console.log(theme);

  return (
    <div
      className={
        theme == "dark"
          ? `${styleFromParent} ${styles.darkMode}`
          : styleFromParent
      }
    >
      <aside className={styles.aside}>
        <Link style={{ textDecoration: "none" }} href={"/"}>
          <h3>Mithat Sarıkaya</h3>
        </Link>
        <p className={styles.mithatsTitle}>Frontend Developer</p>
        <div className={styles.icons}>
          {outerRoutes.map((or) => (
            <Link key={or.title} href={or.link} target="_blank">
              <Image
                className={
                  theme == "dark" && or.title == "Github"
                    ? `${styles.icon} ${styles.darkModeGitHubIcon}`
                    : styles.icon
                }
                src={or.iconSrc}
                height={64}
                width={64}
                alt={`${or.title} icon`}
              />
            </Link>
          ))}
        </div>

        <nav className={styles.routeContainer}>
          {insideRoutes.map((r) => (
            <Link
              key={r.title}
              className={
                pathname == r.link
                  ? `${styles.link} ${styles.activeLink}`
                  : styles.link
              }
              href={r.link}
            >
              {r.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
