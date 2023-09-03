"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Skill, Skills, personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { isIncludedList } from "./utils/helpers";

export default function Home() {
  let skillsAddedIsSelectedProperty = mithatsSkills.map((s) => ({
    name: s,
    isSelected: false,
  }));
  let liveProjects = personalProjects.lives;
  const [skills, setSkills] = useState(skillsAddedIsSelectedProperty);
  const [projects, setProjects] = useState(liveProjects);

  //DONE: disable when skill is not belong to the last skills according to choosen ones

  //when user starts to select skill, this will prevent user select js and ts at the same time. beacuse they are not in the same project
  let skillsAfterSelection = projects.reduce((uniques: Skills, project) => {
    project.techStack.map((p) => {
      if (!uniques.includes(p)) {
        uniques.push(p);
      }
    });

    return uniques;
  }, []);
  console.log({ skillsAfterSelection });

  let selectedSkillsNameList = skills
    .filter((s) => s.isSelected == true)
    .map((s) => s.name);

  const toggleSelected = (
    e: React.FormEvent<HTMLButtonElement>,
    name: string
  ) => {
    e.preventDefault();
    setSkills((prevSkills) => {
      return prevSkills.map((s) =>
        s.name == name ? { ...s, isSelected: !s.isSelected } : s
      );
    });
  };

  useEffect(() => {
    if (selectedSkillsNameList.length == 0) {
      setProjects(personalProjects.lives);
    } else {
      setProjects(
        liveProjects.filter((project) =>
          selectedSkillsNameList.every((p) => project.techStack.includes(p))
        )
      );
    }

    console.log(selectedSkillsNameList);
  }, [selectedSkillsNameList.length]);

  return (
    <main>
      <h1>Skills</h1>
      <ul className={styles.skillContainer}>
        {skills.map((s) => (
          <button
            key={s.name}
            disabled={!isIncludedList(s.name, skillsAfterSelection)}
            onClick={(e) => toggleSelected(e, s.name)}
            className={s.isSelected ? styles.skillSelected : styles.skill}
          >
            {s.name}
          </button>
        ))}
      </ul>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div className={styles.project} key={project.title}>
            <h5>{project.title}</h5>
            <p>{project.techStack}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
