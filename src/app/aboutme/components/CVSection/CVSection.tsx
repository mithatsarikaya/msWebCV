import style from "./cvSection.module.css";
import Link from "next/link";
import Image from "next/image";

const CVSection = () => {
  return (
    <Link
      className={style.pdfLink}
      href={`/cv/mithatSarıkayaCV28082023.pdf`}
      target="_blank"
    >
      <label style={{ cursor: "pointer" }}>CV:</label>
      <Image
        className={style.pdfIcon}
        src={`/icons/icons8-pdf-60.png`}
        height={64}
        width={64}
        alt={`cv pdf icon`}
      />
    </Link>
  );
};

export default CVSection;
