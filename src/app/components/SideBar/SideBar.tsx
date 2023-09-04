import Link from "next/link";
import styles from "./sidebar.module.css";
import Image from "next/image";

type TInsideRoutes = { title: string; link: string }[];
type TOuterRoutes = { title: string; link: string; iconSrc: string }[];
const SideBar = () => {
  const insideRoutes: TInsideRoutes = [
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "About Me",
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

  return (
    <aside className={styles.aside}>
      <Link style={{ textDecoration: "none" }} href={"/"}>
        <h3>Mithat Sarıkaya</h3>
      </Link>
      <p>Frontend Developer</p>
      <div className={styles.icons}>
        {outerRoutes.map((or) => (
          <Link key={or.title} href={or.link} target="_blank">
            <Image
              className={styles.icon}
              src={or.iconSrc}
              height={32}
              width={32}
              alt={`${or.title} icon`}
            />
          </Link>
        ))}
      </div>

      <nav className={styles.routeContainer}>
        {insideRoutes.map((r) => (
          <Link key={r.title} className={styles.link} href={r.link}>
            {r.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
