"use client";
import styles from "./page.module.css";
import { Skills, personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";
import { useEffect, useState } from "react";
import {
  isIncludedList,
  isListEmpty,
  sortByHighlightFirstTitleSecond,
} from "./utils/helpers";
import { useRouter } from "next/navigation";

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

  //when user starts to select skill, this will prevent user select js and ts at the same time. beacuse they are not in the same project
  let skillsAfterSelection = projects
    .filter((pro) => pro.isHighlighted)
    .reduce((uniques: Skills, project) => {
      project.techStack.map((p) => {
        if (!uniques.includes(p)) {
          uniques.push(p);
        }
      });

      return uniques;
    }, []);

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
      <h1>Skills</h1>
      <ul className={styles.skillContainer}>
        {skills.map((s) => (
          <button
            key={s.name}
            //DONE: disable when skill is not belong to the last skills according to choosen ones
            disabled={!isIncludedList(s.name, skillsAfterSelection)}
            onClick={(e) => toggleSelected(e, s.name)}
            className={
              s.isSelected ? `${styles.skill} ${styles.selected}` : styles.skill
            }
          >
            {s.name}
          </button>
        ))}
      </ul>
      <button
        disabled={isListEmpty(selectedSkillsNameList)}
        className={styles.refreshSkillsButton}
        onClick={handleClearSelectedSkillList}
      >
        Refresh Skills
      </button>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div
            onClick={() => handleSendUserToClickedProject(project.id)}
            className={
              project.isHighlighted
                ? styles.project
                : `${styles.project} ${styles.projectDisabled}`
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
