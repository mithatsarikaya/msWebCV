import { aboutMeFromCV } from "@/app/utils/statics";

const AboutMe = () => {
  return (
    <div>
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
            <p>{edu.shortInfo}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default AboutMe;
