"use client";
import styles from "./page.module.css";
import { personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";
import { useEffect, useState } from "react";
import { sortByHighlightFirstTitleSecond } from "./utils/helpers";
import { useRouter } from "next/navigation";
import SkillsSection from "./components/SkillsSection/SkillsSection";

export default function Home() {
  const router = useRouter();

  let skillsAddedIsSelectedProperty = mithatsSkills.map((s) => ({
    name: s,
    isSelected: false,
  }));
  let liveProjects = personalProjects.lives.map((project) => ({
    ...project,
    isHighlighted: true,
  }));

  //DONE: sort projects bt isHighlighted property
  const [skills, setSkills] = useState(skillsAddedIsSelectedProperty);
  const [projects, setProjects] = useState(
    sortByHighlightFirstTitleSecond(liveProjects)
  );

  let selectedSkillsNameList = skills
    .filter((s) => s.isSelected == true)
    .map((s) => s.name);

  const handleClearSelectedSkillList = (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setSkills(skillsAddedIsSelectedProperty);
  };

  const handleSendUserToClickedProject = (name: string) => {
    router.push(`/projects/${name}`);
  };

  useEffect(() => {
    if (selectedSkillsNameList.length == 0) {
      setProjects(liveProjects);
    } else {
      setProjects(
        sortByHighlightFirstTitleSecond(
          liveProjects.map((project) => {
            if (
              selectedSkillsNameList.every((s) => project.techStack.includes(s))
            ) {
              return { ...project, isHighlighted: true };
            } else {
              return { ...project, isHighlighted: false };
            }
          })
        )
      );

      //this part deletes project according to skills selected
      // setProjects(
      //   liveProjects.filter((project) =>
      //     selectedSkillsNameList.every((p) => project.techStack.includes(p))
      //   )
      // );
    }
  }, [selectedSkillsNameList.length]);

  return (
    <main>
      <SkillsSection
        skills={skills}
        setSkills={setSkills}
        projects={projects}
        selectedSkillsNameList={selectedSkillsNameList}
        handleClearSelectedSkillList={handleClearSelectedSkillList}
      />

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div
            onClick={() => handleSendUserToClickedProject(project.id)}
            className={
              project.isHighlighted
                ? styles.project
                : `${styles.project} ${styles.projectDisabled}`
              // : `${styles.projectDisabled}`
            }
            key={project.title}
          >
            <h5>{project.title}</h5>
            <div className={styles.techStack}>
              {project.techStack.join(" ")}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
