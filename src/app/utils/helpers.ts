import { Skills } from "./statics";

export const isIncludedList = (str: string, strList: string[]): boolean => {
  return strList.includes(str);
};

export const isListEmpty = (strList: string[]): boolean => {
  return strList.length == 0;
};

export type TLiveProjects = {
  id: string;
  isHighlighted: boolean;
  title: string;
  usefullFor?: string | undefined;
  details: string;
  techStack: Skills;
  url?: string | undefined;
  githubLink: string;
  possibleDelay?: boolean | undefined;
}[];

export const sortByHighlightFirstTitleSecond = (projects: TLiveProjects) => {
  return projects
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
    .sort((a) => {
      return a.isHighlighted === true ? -1 : a.isHighlighted === false ? 1 : 0;
    });
};
