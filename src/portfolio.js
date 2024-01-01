/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Muhammad Kevin",
  title: "Hi all, I'm Kevin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1j88WAN8UlpzxXUad_97zZLoyqdy5-VGg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kvn-media",
  linkedin: "https://www.linkedin.com/in/muhammad-kevin-subagio-236978233/",
  gmail: "kevin.subagio@gmail.com",
  gitlab: "https://git.enigmacamp.com/enigma-20/muhammad-kevin/",
  instagram: "https://www.instagram.com/kisaragi_kvn",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/22397481/kevin",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cyber Asia University",
      logo: require("./assets/images/LOGO-NUSIA-e1671212935614.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2023 - Currently",
      desc: "Understanding and implementation of fundamental data structures.",
      descBullets: [
        "Proficiency in languages such as C++, Python, or Javascript.",
        "Software development methodologies and best practices.",
        "Study of computer organization and architecture principles.",
        "Database design, implementation, and management.",
        "Software development life cycle, requirements analysis, design, testing, and project management.",
        "Basics of cybersecurity, cryptography, and secure software development.",
        "Introduction to AI and machine learning concepts, algorithms, and applications.",
        "Advanced database concepts, big data technologies, and data analytics.",
        "Methods for testing software and ensuring quality."
      ]
    },
    {
      schoolName: "Vocational High School 56 Jakarta",
      logo: require("./assets/images/smk-56.jpg"),
      subHeader: "SMK Mekatronika",
      duration: "February 2018 - March 2021",
      desc: "Fundamentals of electrical circuits, including components like resistors, capacitors, and inductors.",
      descBullets: [
        "Programming and implementation of control systems for mechatronic applications.",
        "Coding skills, often including languages like C++, or Python.",
        "Study of automated systems and robotics technology.",
        "Understanding and application of various sensors for measuring physical quantities.",
        "Integration of sensors into mechatronic systems.",
        "Introduction to CAD software for designing mechanical components.",
        "Basics of fluid power systems used in mechatronics applications."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
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
      role: "IT Support Engineer",
      company: "AIA Indonesia",
      companylogo: require("./assets/images/aia-indonesia.jpg"),
      date: "November 2023 – November 2023",
      desc: "Setup Laptop using image, Data Wipe user resign, Setup Profile Laptop for new hired user.",
      descBullets: [
        "Setup Laptop using image",
        "Data Wipe user resign",
        "Setup Profile Laptop for new hired user",
        "Setup replacement Laptop user exist",
        "Setup replace new phone for user, login intune company portal, backup data"
      ]
    },
    {
      role: "Software Engineer",
      company: "OCBC Bank",
      companylogo: require("./assets/images/ocbc-logo.jpg"),
      date: "November 2022 – November 2023",
      desc: "Successfully doing Migrate SAS to Bigdata Project, ETL Data Source to Data Lake using Informatica and Airflow, Migrate Data Warehouse into Data Lake using Airflow, Migrate Informatica tables using Airflow.",
      descBullets: [
        "Migrate SAS script into Hive QL and Pyspark",
        "ETL Data Source from MS SQL Server, Postgres, Oracle, AS400, MySQL into Data Lake using Informatica and Airflow",
        "Migrate Data Warehouse into Data Lake using Airflow",
        "Migrate Informatica tables using Airflow for changing HDFS path",
        "Understanding flow and Concept of Apache Oozie",
        "Give Solution in duplicate path when generate DAGs file"
      ]
    },
    {
      role: "Research and Development",
      company: "Keviomedia",
      companylogo: require("./assets/images/keviomedia-logo.png"),
      date: "Feb 2021 – Oct 2022",
      desc: "Web Cloud Hosting and Support customer services, Odoo Retail and POS development.",
      descBullets: [
        "Web Cloud Hosting services",
        "Support customer services",
        "Odoo Retail and POS development",
        "Web development services",
        "Android mobile apps development",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Logo-IdGuides-Fit-New.png"),
      projectName: "IdGuides trails",
      projectDesc: "Company profile, Services, Products, and Helpful info",
      footerLink: [
        {
          name: "idGuides trails for people and planet",
          url: "https://idguides.net/v1/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/maccarobts-logo.jpg"),
      projectName: "Maccaro BTS",
      projectDesc: "Company Profile and Products",
      footerLink: [
        {
          name: "Maccaro, Get you feeling Fresh!",
          url: "https://maccarobts.com/"
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
      title: "Quality Assurance",
      subtitle:
        "Get to know QA Proficient and Method Testing.",
      image: require("./assets/images/binar-logo.jpeg"),
      imageAlt: "QA Binar Academy",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1c0QOjYeODuf7hjfCe7Vb5HTffJ2RFIEy/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Data Warehouse for Architecture Database Data Engineer",
      subtitle:
        "Creating data warehouse for architecture database, learn about data modeling, data warehouse platform, infrastructure, data extract transformation and loading (ETL), data quality and cleansing",
      image: require("./assets/images/skillacademy-logo.png"),
      imageAlt: "Skill Academy",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1SQ96ZSPn3Kvotceh0kAGb2kJ4UAmV_GP/view?usp=drive_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+62-858-8342-1924",
  email_address: "kevin.subagio@gmail.com"
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
