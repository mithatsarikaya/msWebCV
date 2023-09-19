import { Skill, Skills } from "@/app/utils/statics";
import styles from "./skillsSection.module.css";
import {
  TLiveProjects,
  isIncludedList,
  isListEmpty,
} from "@/app/utils/helpers";

type SkillsWithIsSelected = {
  name: Skill;
  isSelected: boolean;
}[];

type TSkillsSectionProps = {
  skills: SkillsWithIsSelected;
  setSkills: React.Dispatch<React.SetStateAction<SkillsWithIsSelected>>;
  projects: TLiveProjects;
  selectedSkillsNameList: Skill[];
  handleClearSelectedSkillList: Function;
};

const SkillsSection = ({
  skills,
  setSkills,
  projects,
  selectedSkillsNameList,
  handleClearSelectedSkillList,
}: TSkillsSectionProps) => {
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

  return (
    <>
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
        onClick={(e) => handleClearSelectedSkillList(e)}
      >
        Refresh Skills
      </button>
    </>
  );
};

export default SkillsSection;
