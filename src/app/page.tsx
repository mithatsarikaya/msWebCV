import Image from "next/image";
import styles from "./page.module.css";
import { personalProjects } from "@/app/utils/statics";
import { mithatsSkills } from "@/app/utils/statics";

export default function Home() {
  return <div>{mithatsSkills}</div>;
}
