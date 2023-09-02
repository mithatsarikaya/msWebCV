"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";
import { useState } from "react";

export default function Home() {
  const [skills, setSkills] = useState(
    mithatsSkills.map((s) => ({ name: s, isSelected: false }))
  );

  return (
    <main>
      <h1>Skills</h1>
      <ul className={styles.skillContainer}>
        {skills.map((s) => (
          <li className={styles.skill}>{s.name}</li>
        ))}
      </ul>
    </main>
  );
}
