import { aboutMeFromCV } from "@/app/utils/statics";
import Link from "next/link";
import Image from "next/image";
import style from "./aboutme.module.css";
const AboutMe = () => {
  return (
    <div style={{ display: "grid", gap: "2rem", fontFamily: "monospace" }}>
      <Link
        className={style.pdfLink}
        href={`/cv/mithatSarıkayaCV28082023.pdf`}
        target="_blank"
      >
        <Image
          src={`/icons/icons8-pdf-60.png`}
          height={64}
          width={64}
          alt={`cv pdf icon`}
        />
      </Link>
      <article>
        <h1>SUMMARY</h1>
        <h2>Objective</h2>
        <p>{aboutMeFromCV.summary.objective}</p>
        <h2>ME</h2>
        <p>{aboutMeFromCV.summary.me}</p>
      </article>
      <article>
        <h1>EDUCATION</h1>
        {aboutMeFromCV.education.map((edu) => (
          <div style={{ marginBottom: "1rem" }} key={edu.school}>
            {/* <h2>{`${edu.school} ${edu.startAndEndDate}`}</h2> */}
            <h2 style={{ display: "inline-block", marginRight: "1rem" }}>
              {edu.school}
            </h2>
            <span style={{ color: "#808080" }}>{edu.startAndEndDate}</span>
            <p>{edu.departmant}</p>
            <p style={{ fontWeight: "500" }}>{edu.shortInfo}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default AboutMe;
