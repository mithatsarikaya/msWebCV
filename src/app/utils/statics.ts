type TpersonalProjects = {
  lives: {
    id: string;
    oneLineDescription?: string;
    title: string;
    usefullFor?: string;
    details: string;
    techStack: Skills;
    url?: string;
    githubLink: string | "private";
    possibleDelay?: boolean;
    pictureSrc?: string;
  }[];
  smallRepos: {
    desc: string;
    repos: {
      id: string;
      name: string;
      url?: string;
      githubLink: string;
    }[];
  };
};

export type Skill =
  | "JavaScript"
  | "TypeScript"
  | "React.js"
  | "Node.js"
  | "HTML"
  | "CSS"
  | "TailwindCss"
  | "EJS"
  | "NextAuth.js"
  | "JWT"
  | "JOSE"
  | "Express.js"
  | "Next.js"
  | "Vite.js"
  | "MongoDb"
  | "Linux"
  | "Bash";

export type Skills = Skill[];

export const personalProjects: TpersonalProjects = {
  lives: [
    {
      id: "0",
      title: "check the pod v1",
      oneLineDescription:
        "If you cook for more than one meal, then this app will help you to take specific food from the food pod ",
      usefullFor: `This web app is for someone who cares about calorie intake. When you cook rice and if it is more than one lunch, you need to calculate how much you left on the pod where you put your cooked rice.`,
      details: `This was my first project. Even if it is publicly accessible, the only way to register is to ask me. This app is for only me and my brother.`,
      techStack: [
        "JavaScript",
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDb",
        "HTML",
        "CSS",
      ],
      githubLink: "https://github.com/mithatsarikaya/checkthePod",
      url: " https://checkthepod.onrender.com/pod",
      possibleDelay: true,
      pictureSrc: "/projectPngs/checkthepodv1.png",
    },
    {
      id: "1",
      title: "old.baslanbas.com v1",
      oneLineDescription: "Web app for recording exercise sessions",
      usefullFor: `If you want to record your exercise session in order to see your progress, this app is just for you. This is a type of an app that functionality comes before design. (at v2 i spent more time on design)`,
      details: `(I own the domain name) You can register via your email and password. If you forget your password you can get a mail which has the link in order to reset your password. There are two actions in this app. First one is to choose your exercises from a list that has 873 unique exercises with the related information. You can filter exercises by choosing muscles or a search box. Second one is to create your exercise sessions with the exercises you chose before.`,
      techStack: [
        "EJS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDb",
        "HTML",
        "CSS",
        "JWT",
      ],
      githubLink: "private",
      url: "https://old.baslanbas.com/",
      possibleDelay: true,
      pictureSrc: "/projectPngs/blbv1.png",
    },
    {
      id: "2",
      title: "check the pod v2",
      oneLineDescription:
        "Better UI and better functionality of check the pod v1",
      usefullFor: "same reason as v1 of it.",
      details: `Unlike v1 of this app, now users can register, create their own pod. While the creator of the pod can delete the pod or add other users, users of the pod can only put or take food from the pod. Implemented routing in this project using React Router, allowing users to navigate between different pages of the application`,
      techStack: [
        "Vite.js",
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDb",
        "HTML",
        "CSS",
        "JWT",
      ],
      githubLink: "https://github.com/mithatsarikaya/checkThePodMern",
      url: "https://check-the-pod-mern.vercel.app/",
      possibleDelay: true,
      pictureSrc: "/projectPngs/checkthepodv2.png",
    },
    {
      id: "3",
      title: "mini twitter clone",
      oneLineDescription: "Register, tweet, favorite ; mini twitter clone",
      details: "You can register, send tweets and favorite tweets",
      techStack: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Node.js",
        "MongoDb",
        "NextAuth.js",
        "TailwindCss",
        "HTML",
      ],
      githubLink: "https://github.com/mithatsarikaya/twitterCloneNextjs",
      url: "https://twitter-for-nuuklu.vercel.app/",
      possibleDelay: false,
      pictureSrc: "/projectPngs/minitwitterclone.png",
    },
    {
      id: "4",
      title: "www.baslanbas.com v2",
      oneLineDescription:
        "UI is far better than first version of it (old.baslanbas.com)",
      usefullFor: `same as v1`,
      details: `Unlike v1, UI is better. Implementing routing in this project using App Router in Next.js, allowing users to navigate between different pages of the application.`,
      techStack: [
        "Next.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "MongoDb",
        "TailwindCss",
        "HTML",
        "JOSE",
      ],
      githubLink: "private",
      url: "https://www.baslanbas.com/",
      possibleDelay: false,
      pictureSrc: "/projectPngs/blbv2.png",
    },
  ],
  smallRepos: {
    desc: `This repos was created to understand the difference between react.js’ state based and vanilla.js' event based logic. All of them written with react.js and vanilla.js`,
    repos: [
      {
        id: "0",
        name: "Tenzies Game",
        githubLink: "https://github.com/mithatsarikaya/tenziesGame",
        url: "https://tenzies-game-nine.vercel.app/",
      },
      {
        id: "1",
        name: "Note App",
        githubLink: "https://github.com/mithatsarikaya/noteApp",
      },
      {
        id: "2",
        name: "To Do App",
        githubLink: "https://github.com/mithatsarikaya/toDoApp",
      },
      {
        id: "3",
        name: "Meme Generator",
        githubLink: "https://github.com/mithatsarikaya/memeGenerator/",
      },
    ],
  },
};

export const mithatsSkills = personalProjects.lives.reduce(
  (allSkillList: Skills, currentSkillList) => {
    currentSkillList.techStack.map((t) => {
      if (!allSkillList.includes(t)) {
        allSkillList.push(t);
      }
    });

    return allSkillList;
  },
  []
);

export const getProjectFromID = (id: string) => {
  return personalProjects.lives.find((p) => p.id == id);
};

// type ProgrammingLanguages = "JavaScript" | "TypeScript";
// type RuntimeEnvironments = "Node.js";
// type FrontEndLibraries = "React.js";
// type ReactFrameworks = "Next.js" | "Vite.js";
// type BackEndFrameworks = "Express.js";
// type CssFrameworks = "Tailwind Css";
// type AuthMethods = "NextAuth.js" | "JWT" | "JOSE";
// type Databases = "MongoDB";
