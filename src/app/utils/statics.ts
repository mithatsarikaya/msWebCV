type TpersonalProjects = {
  lives: {
    id: string;
    oneLineDescription?: string;
    title: string;
    usefulFor?: string;
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
  | "Astro"
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
      usefulFor: `This web app is for someone who cares about calorie intake. When you cook rice and if it is more than one lunch, you need to calculate how much you left on the pod where you put your cooked rice.`,
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
      usefulFor: `If you want to record your exercise session in order to see your progress, this app is just for you. This is a type of an app that functionality comes before design. (at v2 i spent more time on design)`,
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
      usefulFor:
        "This web app is for someone who cares about calorie intake. When you cook rice and if it is more than one lunch, you need to calculate how much you left on the pod where you put your cooked rice.",
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
      title: "bas.baslanbas.com v2",
      oneLineDescription:
        "UI is far better than first version of it (old.baslanbas.com)",
      usefulFor: `If you want to record your exercise session in order to see your progress, this app is just for you. This is a type of an app that functionality comes before design.`,
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
      url: "https://bas.baslanbas.com/",
      possibleDelay: false,
      pictureSrc: "/projectPngs/blbv2.png",
    },
    {
      id: "5",
      details: "Solving React interview questions that i see online",
      url: "https://react-challenges-pearl.vercel.app/",
      githubLink: "https://github.com/mithatsarikaya/reactChallenges",
      techStack: ["HTML", "CSS", "TypeScript", "Next.js", "React.js"],
      title: "React Challenges",
      oneLineDescription: "Solving React interview questions that i see online",
      pictureSrc: "/projectPngs/reactChallenges.png",
    },
    {
      id: "6",
      details:
        "My personal blog website where i plan to share some code snippets for now",
      url: "https://www.baslanbas.com/",
      githubLink: "private",
      techStack: ["HTML", "CSS", "TypeScript", "Astro"],
      title: "nuuklu Blog",
      oneLineDescription: "Classic personal blog website",
      pictureSrc: "/projectPngs/nuukluBlog.png",
    },
    {
      id: "7",
      details: "Website of a private spring production company",
      url: "https://www.ersayay.com/",
      githubLink: "private",
      techStack: ["HTML", "CSS", "TypeScript", "Next.js"],
      title: "Ersayay Company",
      oneLineDescription: "Spring production company's multilingual website",
      pictureSrc: "/projectPngs/ersayaywebsite.png",
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

type TaboutMe = {
  summary: {
    objective: string;
    me: string;
  };
  workExperience: {
    company: string;
    title: string;
    jobDescription: string;
    startAndEndDate: string;
  };
  education: {
    school: string;
    departmant: string;
    shortInfo?: string;
    startAndEndDate: string;
  }[];
};

export const aboutMeFromCV: TaboutMe = {
  summary: {
    objective: `After resigning from planning engineering in June 2021, I have experienced various topics in computer science, some of which I will detail on this page. During this time, the subject that I spent the most time and interested me the most was web development. I am looking for a front-end developer job.`,
    me: `I am a highly motivated and results-oriented individual with a passion for computer science.I have proficient English skills, both verbally and written.I take a walk everyday to clear my mind and think about life generally. Moreover, I care about my overall health, thus I exercise regularly which will be obvious later in this CV’s ‘personal projects’ section. I am confident that my skills and experience would be a valuable asset to any organization. I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am able to work effectively with others to achieve common goals.
    `,
  },
  education: [
    {
      departmant: "BSc Industrial Engineering",
      school: "Gaziantep University",
      startAndEndDate: "2012 - 2017",
    },
    {
      departmant: "BSc Industrial Engineering",
      school: "Universitatea POLITEHNICA din București/Romania",
      shortInfo: "Erasmus Student",
      startAndEndDate: "02.2016 - 06.2016",
    },
    {
      departmant: "MSc Computer Engineering",
      school: "Iskenderun Technical University",
      startAndEndDate: "2019 - dropped out",
    },
  ],
  workExperience: {
    company: "Tosyalı Toyo",
    startAndEndDate: "05.2018 - 06.2021",
    title: "Planning Engineer",
    jobDescription: `*Management of ~65% of the total production in the facility
    *By analyzing the width information of raw material suppliers; Contribution to production from scrap after Slitting Line production optimization
    *Reducing the number of paint changes in the Paint Line (CCL) by 3 times (27% -> 9%), ensuring production efficiency and reducing costs (paint waste, electricity consumption, natural gas consumption, etc.)
    *Analyzing the paint consumption of the Paint Line, changing the calculation method and calculating the actual cost.
    *Minimizing the transition situations thanks to the daily production and order tracking of the Galvanized Line (CGL), thus ensuring the production efficiency of the line.
    *Reducing the amount of scrap in width/thickness transitions by ensuring the production efficiency of the Tandem Line (PLTCM)`,
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
