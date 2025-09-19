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
  username: "Jay Paun",
  title: "Hi, I'm Jay",
  subTitle: emoji(
    "AI Researcher and Software Engineer specializing in end-to-end pipeline design and implementation, AI/ML development, and full-stack engineering. Passionate about building scalable systems and delivering complete solutions from concept to deployment."
  ),
  resumeLink: "/Jay_resume_sept.pdf", // Place resume at public/Jay_resume_sept.pdf to preview in browser
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jay2704",
  linkedin: "https://www.linkedin.com/in/jay-paun-baa8ab217/",
  gmail: "jay.maryland2023@gmail.com",
  leetcode: "https://leetcode.com/u/ITS_HAMMER_TIME/",
  codeforces: "https://codeforces.com/profile/DecodeR2704",
  gitlab: "", // Add your GitLab if you have one
  facebook: "", // Add your Facebook if you want to display it
  medium: "", // Add your Medium if you have one
  stackoverflow: "", // Add your Stack Overflow if you have one
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "AI RESEARCHER & SOFTWARE ENGINEER WITH COMPREHENSIVE TECH EXPERTISE",
  skills: [
    emoji(
      "⚡ Programming Languages: Python, JavaScript, Java, HTML, CSS, Shell Scripting"
    ),
    emoji("⚡ Frameworks & Version Control: Flask, React.js, Node.js, PyTorch, TensorFlow, Redux, OpenCV, Express.js, GitHub, Git"),
    emoji(
      "⚡ Databases: MySQL, MongoDB, PostgreSQL"
    ),
    emoji(
      "⚡ DevOps & APIs: AWS (EC2, S3, Lambda, SageMaker), Docker, Jenkins, REST, Git, Prometheus, Grafana"
    ),
    emoji(
      "⚡ Methodologies & Tools: SDLC, Agile/Scrum, OOP, Data Structures & Algorithms, Tableau, Jupyter Notebook, JIRA"
    ),
    emoji(
      "⚡ Domain Expertise: Full-Stack Development, Computer Vision, Large-Language Models, Deep Learning, Machine Learning, Neural Networks, Human–Robot Interaction"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland, Baltimore County (UMBC)",
      logo: require("./assets/images/umbc.png"),
      subHeader: "M.S. in Computer Science",
      duration: "Aug 2023 - May 2025",
      desc: "Pursuing Master's degree in Computer Science with focus on AI/ML research and multimodal systems.",
      descBullets: [
        "Specializing in Artificial Intelligence and Machine Learning",
        "Research focus on multimodal lie-detection systems"
      ]
    },
    {
      schoolName: "B.M.S. College of Engineering (B.M.S.C.E)",
      logo: require("./assets/images/bms.png"),
      subHeader: "B.E. in Information Science",
      duration: "Aug 2018 - May 2022",
      desc: "Bachelor's degree in Information Science with strong foundation in computer science fundamentals.",
      descBullets: [
        "Strong foundation in software engineering and data structures",
        "Hands-on experience with various programming languages and frameworks"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" // Lower emphasis on frontend
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "A.I. Researcher",
      company: "University of Maryland, Baltimore County (UMBC)",
      companylogo: require("./assets/images/umbc.png"),
      date: "May 2024 – Present · Baltimore, MD",
      desc:
        "Developing multimodal lie-detection systems combining EEG and visual data; engineering scalable data pipelines for preprocessing and augmentation; work under peer review.",
      descBullets: [
        "Improved classification accuracy up to 89% across diverse subjects",
        "Expanded training data by 4x, enhancing model generalization"
      ]
    },
    {
      role: "Software Engineer",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/HPE.jpg"),
      date: "Feb 2023 – Jul 2023 · Bangalore, India",
      desc:
        "Automated and optimized cloud infrastructure workflows on AWS using Ansible and Jenkins, improving performance and deployment speed.",
      descBullets: [
        "Reduced manual intervention by ~40% and increased deployment speed by ~25%",
        "Optimized AWS (EC2, S3, DynamoDB), reducing latency ~30% under peak loads"
      ]
    },
    {
      role: "Software Engineer",
      company: "IBM India",
      companylogo: require("./assets/images/IBM.png"),
      date: "Mar 2022 – Sep 2022 · Bangalore, India",
      desc:
        "Built a log assessment utility with error sequence detection, automated reporting, and support for 1000+ log files; improved debugging workflows for enterprise apps.",
      descBullets: [
        "Accelerated root cause analysis by ~20%",
        "Implemented keyword-based filtering and stack trace isolation"
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
  title: "Featured Projects",
  subtitle: "AI/ML AND FULL-STACK PROJECTS SHOWCASING END-TO-END DEVELOPMENT",
  projects: [
    {
      image: require("./assets/images/cloud.webp"),
      projectName: "Fine-Tuning LLaMA 2 with QLoRA",
      projectDesc: "Applied QLoRA techniques to fine-tune LLaMA 2–7B with 4-bit quantization, reducing GPU memory consumption by 60% while preserving 95% task-specific accuracy. Optimized training workflow to accelerate iteration cycles by 40%.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jay2704/distributed_file_system"
        }
      ]
    },
    {
      image: require("./assets/images/distrbuted.png"),
      projectName: "Distributed File System",
      projectDesc: "Developed a distributed file system that handles node failures and balances request load, improving reliability and access efficiency by 30%. Packaged in Docker and managed via Kubernetes for streamlined deployment.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jay2704/pybot_NLP"
        }
      ]
    },
    {
      image: require("./assets/images/pybot.webp"),
      projectName: "PyBot – Machine Learning Chatbot",
      projectDesc: "Built a chatbot using ML and NLP techniques, improving intent recognition accuracy by 25% and boosting user engagement. Deployed in containerized environments using Docker for consistent performance across platforms.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jay2704"
        }
      ]
    },
    {
      image: require("./assets/images/brain.jpg"),
      projectName: "Brain Tumor Detection Web App",
      projectDesc: "Created a web-based MRI classification system with ML and DL models like CNNs and transformers, reaching 94% accuracy in tumor detection. Enhanced inference speed by 35% for real-time diagnostics via user-friendly web interface.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jay-2704/CMSC_668_brain_tumor_detection"
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
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (667) 433-1441",
  email_address: "jay.maryland2023@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
