/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {FaHtml5, FaCss3, FaGitAlt, FaDocker} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoDjango,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoAws
} from "react-icons/bi";

import {SiNextdotjs, SiMysql, SiRedis, SiSqlite} from "react-icons/si";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddharth Mittal",
  title: "Hi all, I'm Sid",
  subTitle: emoji(
    "I'm a recent graduate in Computer Science and Mathematics, driven by a deep passion for all things programming. I thrive on the challenges of coding and problem-solving, constantly seeking innovative ways to turn ideas into functional software."
  ),
  resumeLink: "https://www.overleaf.com/read/ngtmyppnfywb", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sidd3103",
  linkedin: "https://www.linkedin.com/in/sidd31/",
  gmail: "siddharth.mittal31@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: "",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      icon: FaHtml5
    },
    {
      skillName: "CSS",
      icon: FaCss3
    },
    {
      skillName: "Javascript",
      icon: BiLogoJavascript
    },
    {
      skillName: "Typescript",
      icon: BiLogoTypescript
    },
    {
      skillName: "Python",
      icon: BiLogoPython
    },
    {
      skillName: "C++",
      icon: BiLogoCPlusPlus
    },
    {
      skillName: "Java",
      icon: BiLogoJava
    },
    {
      skillName: "Next.js",
      icon: SiNextdotjs
    },
    {
      skillName: "React.js",
      icon: BiLogoReact
    },
    {
      skillName: "Tailwind CSS",
      icon: BiLogoTailwindCss
    },
    {
      skillName: "NodeJS",
      icon: BiLogoNodejs
    },
    {
      skillName: "Django",
      icon: BiLogoDjango
    },
    {
      skillName: "Git",
      icon: FaGitAlt
    },
    {
      skillName: "Docker",
      icon: FaDocker
    },
    {
      skillName: "MySQL",
      icon: SiMysql
    },
    {
      skillName: "PostgreSQL",
      icon: BiLogoPostgresql
    },
    {
      skillName: "MongoDB",
      icon: BiLogoMongodb
    },
    {
      skillName: "Redis",
      icon: SiRedis
    },
    {
      skillName: "SQLite",
      icon: SiSqlite
    },
    {
      skillName: "Firebase",
      icon: BiLogoFirebase
    },
    {
      skillName: "AWS",
      icon: BiLogoAws
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of British Columbia",
      logo: require("./assets/images/ubcLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Mathematics",
      duration: "January 2018 - May 2023",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "Chubb Insurance",
      companylogo: require("./assets/images/chubbLogo.png"),
      date: "September 2022 – December 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: []
    },
    {
      role: "Software Developer Intern",
      company: "Huawei Technologies",
      companylogo: require("./assets/images/huaweiLogo.png"),
      date: "January 2022 – September 2022"
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Programmer Intern",
      company: "TRIUMF Labs",
      companylogo: require("./assets/images/triumfLogo.png"),
      date: "September 2021 – December 2021"
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/bookworm.gif"),
      projectName: "Bookworm",
      projectDesc:
        "Created a Tinder like app for book enthusiasts using React Native",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/sidd3103/bookworm"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/discord.gif"),
      projectName: "Discord Clone",
      projectDesc: "Created a Discord Clone using Next.js and React",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://discord-clone-production-3e43.up.railway.app/"
        }
      ]
    },
    {
      image: require("./assets/images/canny.gif"),
      projectName: "Canny Detector",
      projectDesc:
        "Implemented the Canny Detector for detecting edges in images",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/sidd3103/CannyDetector"
        }
      ]
    },
    {
      image: require("./assets/images/Sudoku.gif"),
      projectName: "Sudoku",
      projectDesc: "Created a sudoku game using Python",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/sidd3103/Sudoku-Solver"
        }
      ]
    },
    {
      image: require("./assets/images/Connect.gif"),
      projectName: "Connect-4",
      projectDesc: "Created a Connect-4 game using Python",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/sidd3103/Connect-4"
        }
      ]
    },
    {
      image: require("./assets/images/Guesser.gif"),
      projectName: "Digit Guesser",
      projectDesc: "Created a digit-guesser app using Python and Tensorflow",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/sidd3103/Digit-Guesser"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(778)-723-1207",
  email_address: "siddharth.mittal31@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
