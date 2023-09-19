import { aboutMeFromCV } from "@/app/utils/statics";
import style from "./aboutme.module.css";
import CVSection from "./components/CVSection/CVSection";
const AboutMe = () => {
  let doneListAtWork = aboutMeFromCV.workExperience.jobDescription.split("\n");

  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
      }}
    >
      <CVSection />

      <article>
        <h1>SUMMARY</h1>
        <h2>Objective</h2>
        <p>{aboutMeFromCV.summary.objective}</p>
        <h2>ME</h2>
        <p>{aboutMeFromCV.summary.me}</p>
      </article>
      <hr />
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
      <hr />
      <article>
        <h1>WORK EXPERIENCE</h1>
        <h2 style={{ display: "inline-block", marginRight: "1rem" }}>
          {aboutMeFromCV.workExperience.company}
        </h2>
        <h3 style={{ display: "inline-block", marginRight: "1rem" }}>
          {aboutMeFromCV.workExperience.title}
        </h3>
        <span style={{ color: "#808080" }}>
          {aboutMeFromCV.workExperience.startAndEndDate}
        </span>
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
