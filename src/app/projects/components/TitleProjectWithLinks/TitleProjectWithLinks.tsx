import Image from "next/image";
import Link from "next/link";
import styles from "./titleProject.module.css";

type TTitleProjectWithLinksProps = {
  projID: string;
  title: string;
  githubLink: string | "private";
  liveUrl?: string;
  locateToProjectDetails: boolean;
};

const TitleProjectWithLinks = ({
  title,
  githubLink,
  liveUrl,
  projID,
  locateToProjectDetails,
}: TTitleProjectWithLinksProps) => {
  return (
    <div className={styles.titleAndIconContainer}>
      {locateToProjectDetails ? (
        <Link href={`/projects/${projID}`}>
          <h1>{title}</h1>
        </Link>
      ) : (
        <h1>{title}</h1>
      )}

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
