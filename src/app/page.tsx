"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Skill, personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";
import { ButtonHTMLAttributes, useEffect, useState } from "react";

export default function Home() {
  let skillsAddedIsSelectedProperty = mithatsSkills.map((s) => ({
    name: s,
    isSelected: false,
  }));
  const [skills, setSkills] = useState(skillsAddedIsSelectedProperty);
  const [projects, setProjects] = useState(personalProjects.lives);

  let selectedSkills = skills
    .filter((s) => s.isSelected == true)
    .map((s) => s.name);

  const toggleSelected = (e: React.FormEvent<HTMLLIElement>, name: string) => {
    setSkills((prevSkills) => {
      return prevSkills.map((s) =>
        s.name == name ? { ...s, isSelected: !s.isSelected } : s
      );
    });
  };

  useEffect(() => {
    if (selectedSkills.length == 0) {
      setProjects(personalProjects.lives);
    } else {
      setProjects((prevProjects) =>
        prevProjects.filter((project) =>
          project.techStack.some((p) => selectedSkills.includes(p))
        )
      );
    }

    console.log(selectedSkills);
  }, [selectedSkills]);

  return (
    <main>
      <h1>Skills</h1>
      <ul className={styles.skillContainer}>
        {skills.map((s) => (
          <li
            onClick={(e) => toggleSelected(e, s.name)}
            key={s.name}
            className={s.isSelected ? styles.skillSelected : styles.skill}
          >
            {s.name}
          </li>
        ))}
      </ul>

      {projects.map((project) => (
        <div key={project.title}>
          <h5>{project.title}</h5>
          <p>{project.techStack}</p>
        </div>
      ))}
    </main>
  );
}
