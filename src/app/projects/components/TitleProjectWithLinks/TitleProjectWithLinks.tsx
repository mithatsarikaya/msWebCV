import Image from "next/image";
import Link from "next/link";
import styles from "./titleProject.module.css";

type TTitleProjectWithLinksProps = {
  projID: string;
  title: string;
  githubLink: string | "private";
  liveUrl?: string;
};

const TitleProjectWithLinks = ({
  title,
  githubLink,
  liveUrl,
  projID,
}: TTitleProjectWithLinksProps) => {
  return (
    <div className={styles.titleAndIconContainer}>
      <Link href={`/projects/${projID}`}>
        <h1>{title}</h1>
      </Link>
      {githubLink != "private" && (
        <Link href={githubLink} target="_blank">
          <Image
            className={styles.titleIcon}
            alt="gitHubLink"
            src={"/icons/externalLink.svg"}
            width={48}
            height={48}
          />
        </Link>
      )}
      {liveUrl && (
        <Link href={liveUrl} target="_blank">
          <Image
            className={styles.titleIcon}
            alt="gitHubLink"
            src={"/icons/icons8-www-48.png"}
            width={48}
            height={48}
          />
        </Link>
      )}
    </div>
  );
};

export default TitleProjectWithLinks;
