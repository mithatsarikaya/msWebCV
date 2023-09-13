import { aboutMeFromCV } from "@/app/utils/statics";
import Link from "next/link";
import Image from "next/image";
import style from "./aboutme.module.css";
const AboutMe = () => {
  let doneListAtWork = aboutMeFromCV.workExperience.jobDescription.split("\n");

  return (
    <div
      style={{
        display: "grid",
        // textAlign: "center",
        gap: "2rem",
      }}
    >
      <Link
        className={style.pdfLink}
        href={`/cv/mithatSarıkayaCV28082023.pdf`}
        target="_blank"
      >
        <label>CV:</label>
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
      <article>
        <h1>WORK EXPERIENCE</h1>
        <h2 style={{ display: "inline-block" }}>
          {aboutMeFromCV.workExperience.company}
        </h2>
        <h3 style={{ display: "inline-block" }}>
          {aboutMeFromCV.workExperience.title}
        </h3>
        <ul>
          {doneListAtWork.map((sent, idx) => (
            <li key={idx}>{sent}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default AboutMe;
