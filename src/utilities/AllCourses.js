import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import image1 from "../assets/industry_projects_clp_1.png"
import image2 from "../assets/industry_projects_clp_2.png"
export const allCourses = [
  {
    courseName: "Frontend Development/ Web3",
    id: "frontend",
    jobtitle: "Frontend Developer",
    cardComponent: {
      content: [
        {
          icon: <PiCertificateFill />,
          text: "Tech Facilitators Certificate",
        },
        {
          icon: <MdOutlineLiveTv />,
          text: "30 Hrs Live Classes",
        },
        {
          icon: <BsCalendar2CheckFill />,
          text: "Weekend Classes",
        },
      ],
      instructor: "",
      duration: "",
      liveClassesHr: "",
      summary:
        "Build impressive websites using HTML5, CSS3, Google APIs and many more",
      displayImg: "",
      classDay: "",
      contentImg: {
        liveclasses: "",
        insturctor: "",
        duration: "",
      },
    },
    displayComponent: {
        no_of_learners: 1000,
        rating: "4.7",
        no_of_ratings: 500,
        why_enroll: [
            {
                text: "Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb, Yahoo! Mail and many more use React to build their User Interface to improve user experience",
                image: ""
            },
            {
                text: "React Native supports cross-platform development (iOS and Android), and it can reduce the development effort by 50% without compromising quality or productivity",
                image: ""
            },
            {
                text: "The average salary for \"React Developer\" ranges from $100,816 per year to $110,711 per year, based on the role (Front End Developer/Full Stack Developer) - Indeed.com",
                image: ""
            },
        ],
        related_courses: [
            {
                name: "Front-end Engineer",
                image1: "",
                image2: ""
            },
            {
                name: "React Developer",
                image1: "",
                image2: ""
            },
            {
                name: "Front-end Developer",
                image1: "",
                image2: ""
            }
        ],
        training_benefits: "React development stands out as the future of web creation, offering unparalleled versatility and simplicity. According to a Statista study, React JS reigns as the most sought-after web framework in 2022, with 40.41% of global software developers opting for it in their web application development. This trend isn't unexpected, given the steady rise in demand for React developers in recent years. Mastering React not only expands job opportunities and enhances pay prospects but also connects you with a vast and supportive community.",
        tools_covered: [],
        skills_covered: ["React Components", "React React State Management", "React Event Handling", "Routing in React", "React Application Testing", "React Native"],
        curriculum: [
            {
                title: "Introduction to Web Development and React",
                topic_list: [
                    "Building Blocks of Web Application Development",
                    "Single-page and Multi-page Applications",
                    "Different Client-side Technologies",
                    "MVC Architecture",
                    "Introduction to React",
                    "Installation of React",
                    "JSX and its use case",
                    "DOM",
                    "Virtual DOM and Its Working",
                    "ECMAScript",
                    "Difference between ES5 and ES6",
                    "NPM Modules",
                ],
                no_of_topics: "12",
            },
            {
                title: "Components and Styling the Application Layout",
                topic_list: [
                    "React Elements",
                    "Render Function",
                    "Components",
                    "Class Component",
                    "Component Constructor",
                    "Functional Components",
                    "Multiple Components",
                    "Props",
                    "Props with Class based Component",
                    "Props with Function based Component",
                    "States",
                    "Component Lifecycle",
                    "React Events",
                    "React Forms",
                    "Different Form Concepts",
                    "Styling in React",
                    "Inline Styling",
                    "CSS Stylesheet",
                    "Building Music Shop Application using React Components",
                ],
                no_of_topics: "19",
            },
            {
                title: "Handling Navigation with Routes",
                topic_list: [
                    "Routing",
                    "React-router",
                    "Features of React-router",
                    "Configuration of routing using React-router",
                    "Navigation using Links",
                    "404 page (Not found Page)",
                    "URL Parameters",
                    "Nested Routes",
                    "Implementing styles using NavLink",
                    "Application Programming Interface",
                    "Build a REST API using JSON-server",
                    "API consumption in React application using Fetch method",
                    "Build a dynamic Music Store application using Routing and API connectivity",
                ],
                no_of_topics: "13",
            },
            {
                title: "React State Management using Redux",
                topic_list: [
                    "Need of Redux",
                    "What is Redux?",
                    "Redux Architecture",
                    "Redux Action",
                    "Redux Reducers",
                    "Redux Store",
                    "Principles of Redux",
                    "Pros of Redux",
                    "NPM Packages required to work with Redux",
                    "More about React-Redux package",
                ],
                no_of_topics: "10",
            },
            {
                title: "Asynchronous Programming with Saga Middleware",
                topic_list: [
                    "Need of Async operations",
                    "Async Workflow",
                    "Action Creators",
                    "How to write Action Creators?",
                    "Handling Async Actions via Reducers",
                    "Middleware",
                    "Redux-Saga",
                    "Generators in Redux-Saga",
                    "Saga Methods()",
                    "Major Sections of Redux-Saga",
                    "Building a Product List application using Redux-Saga Middleware",
                    "Debugging application using Redux Devtools",
                ],
                no_of_topics: "12",
            },
        ],
        course_description: [
            {
                title: "About Course",
                content: "React is a JavaScript library that enables the creation of responsive and efficient user interfaces for both web and mobile applications. By enrolling in Edureka’s React JS course, you can develop applications that are consistent in behavior, cross-platform, and easy to test and deploy. React JS also allows you to construct complex UIs using small, self-contained pieces of code known as \"components.\" React is capable of server-side rendering with Node and can power native apps using React Native."
            },
            {
                title: "What are the pre-requisites for this best React js course?",
                content: "Fundamentals of programming and object-oriented concepts like HTML + CSS + JavaScript Knowledge (You don't need to be an expert but should be familiar with the basics of these topics)."
            },
            {
                title: "React JS Course Syllabus",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
        ],
        projects: [
            {
                image: image1,
                industry: "Entertainment",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
            {
                image: image2,
                industry: "IT",
                content: "Build a React Native Food Application and make use of Redux to perform state management. In this application you must filter the food items and display them on screen."
            }
        ]
        
    }
  },
  {
    id: "backend",
    courseName: "Backend Development",
    cardComponent: {
      content: [
        {
          icon: <PiCertificateFill />,
          text: "Tech Facilitators Certificate",
        },
        {
          icon: <MdOutlineLiveTv />,
          text: "60 Hrs Live Classes",
        },
        {
          icon: <BsCalendar2CheckFill />,
          text: "Weekend Classes",
        },
      ],
      instructor: "",
      duration: "",
      liveClassesHr: "",
      summary: "",
      displayImg: "",
      classDay: "",
    },
    displayComponent: {
        no_of_learners: 1000,
        rating: "4.7",
        no_of_ratings: 500,
        why_enroll: [
            {
                text: "Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb, Yahoo! Mail and many more use React to build their User Interface to improve user experience",
                image: ""
            },
            {
                text: "React Native supports cross-platform development (iOS and Android), and it can reduce the development effort by 50% without compromising quality or productivity",
                image: ""
            },
            {
                text: "The average salary for \"React Developer\" ranges from $100,816 per year to $110,711 per year, based on the role (Front End Developer/Full Stack Developer) - Indeed.com",
                image: ""
            },
        ],
        related_courses: [
            {
                name: "Front-end Engineer",
                image1: "",
                image2: ""
            },
            {
                name: "React Developer",
                image1: "",
                image2: ""
            },
            {
                name: "Front-end Developer",
                image1: "",
                image2: ""
            }
        ],
        training_benefits: "React development stands out as the future of web creation, offering unparalleled versatility and simplicity. According to a Statista study, React JS reigns as the most sought-after web framework in 2022, with 40.41% of global software developers opting for it in their web application development. This trend isn't unexpected, given the steady rise in demand for React developers in recent years. Mastering React not only expands job opportunities and enhances pay prospects but also connects you with a vast and supportive community.",
        tools_covered: [],
        skills_covered: ["React Components", "React React State Management", "React Event Handling", "Routing in React", "React Application Testing", "React Native"],
        curriculum: [
            {
                title: "Introduction to Web Development and React",
                topic_list: [
                    "Building Blocks of Web Application Development",
                    "Single-page and Multi-page Applications",
                    "Different Client-side Technologies",
                    "MVC Architecture",
                    "Introduction to React",
                    "Installation of React",
                    "JSX and its use case",
                    "DOM",
                    "Virtual DOM and Its Working",
                    "ECMAScript",
                    "Difference between ES5 and ES6",
                    "NPM Modules",
                ],
                no_of_topics: "12",
            },
            {
                title: "Components and Styling the Application Layout",
                topic_list: [
                    "React Elements",
                    "Render Function",
                    "Components",
                    "Class Component",
                    "Component Constructor",
                    "Functional Components",
                    "Multiple Components",
                    "Props",
                    "Props with Class based Component",
                    "Props with Function based Component",
                    "States",
                    "Component Lifecycle",
                    "React Events",
                    "React Forms",
                    "Different Form Concepts",
                    "Styling in React",
                    "Inline Styling",
                    "CSS Stylesheet",
                    "Building Music Shop Application using React Components",
                ],
                no_of_topics: "19",
            },
            {
                title: "Handling Navigation with Routes",
                topic_list: [
                    "Routing",
                    "React-router",
                    "Features of React-router",
                    "Configuration of routing using React-router",
                    "Navigation using Links",
                    "404 page (Not found Page)",
                    "URL Parameters",
                    "Nested Routes",
                    "Implementing styles using NavLink",
                    "Application Programming Interface",
                    "Build a REST API using JSON-server",
                    "API consumption in React application using Fetch method",
                    "Build a dynamic Music Store application using Routing and API connectivity",
                ],
                no_of_topics: "13",
            },
            {
                title: "React State Management using Redux",
                topic_list: [
                    "Need of Redux",
                    "What is Redux?",
                    "Redux Architecture",
                    "Redux Action",
                    "Redux Reducers",
                    "Redux Store",
                    "Principles of Redux",
                    "Pros of Redux",
                    "NPM Packages required to work with Redux",
                    "More about React-Redux package",
                ],
                no_of_topics: "10",
            },
            {
                title: "Asynchronous Programming with Saga Middleware",
                topic_list: [
                    "Need of Async operations",
                    "Async Workflow",
                    "Action Creators",
                    "How to write Action Creators?",
                    "Handling Async Actions via Reducers",
                    "Middleware",
                    "Redux-Saga",
                    "Generators in Redux-Saga",
                    "Saga Methods()",
                    "Major Sections of Redux-Saga",
                    "Building a Product List application using Redux-Saga Middleware",
                    "Debugging application using Redux Devtools",
                ],
                no_of_topics: "12",
            },
        ],
        course_description: [
            {
                title: "About Course",
                content: "React is a JavaScript library that enables the creation of responsive and efficient user interfaces for both web and mobile applications. By enrolling in Edureka’s React JS course, you can develop applications that are consistent in behavior, cross-platform, and easy to test and deploy. React JS also allows you to construct complex UIs using small, self-contained pieces of code known as \"components.\" React is capable of server-side rendering with Node and can power native apps using React Native."
            },
            {
                title: "What are the pre-requisites for this best React js course?",
                content: "Fundamentals of programming and object-oriented concepts like HTML + CSS + JavaScript Knowledge (You don't need to be an expert but should be familiar with the basics of these topics)."
            },
            {
                title: "React JS Course Syllabus",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
        ],
        projects: [
            {
                image: image1,
                industry: "Entertainment",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
            {
                image: image2,
                industry: "IT",
                content: "Build a React Native Food Application and make use of Redux to perform state management. In this application you must filter the food items and display them on screen."
            }
        ]
        
    }
  },
  {
    courseName: "Cyber Security and Ethical Hacking Complete Course",
    id: "cyber",
    cardComponent: {
      content: [
        {
          icon: <PiCertificateFill />,
          text: "Tech Facilitators Certificate",
        },
        {
          icon: <MdOutlineLiveTv />,
          text: "60 Hrs Live Classes",
        },
        {
          icon: <BsCalendar2CheckFill />,
          text: "Weekend Classes",
        },
      ],
      instructor: "",
      duration: "",
      summary:
        "Includes Cryptography, Information, Security, Ethical Hacking, and more",
      displayImg: "",
    },
    displayComponent: {
        no_of_learners: 175,
        rating: "4.7",
        no_of_ratings: 53,
        why_enroll: [
            {
                text: "The number of unfilled cyber security jobs is expected to reach 3.5 million in 2025",
                image: ""
            },
            {
                text: "Global cyber security industry is estimated to cross $248.26 billion by 2023 – forbes.com",
                image: ""
            },
            {
                text: "Average salary of Cyber security Professional varies from $84,000 – $110,000 - Indeed.com",
                image: ""
            },
        ],
        related_courses: [
            {
                name: "Chief Information Security Officer",
                image1: "",
                image2: ""
            },
            {
                name: "System Security Architect",
                image1: "",
                image2: ""
            },
            {
                name: "Security Administrator",
                image1: "",
                image2: ""
            }
        ],
        training_benefits: "A certified cybersecurity expert garners trust from renowned Fortune 500 companies like IBM, Microsoft, Cisco, and others. NASSCOM reports that India demands 77,000 ethical hackers annually, yet the job market can only satisfy 15,000. This high demand underscores ethical hacking as an exceptionally coveted and promising profession presently.",
        tools_covered: ["Vulnerability analysis", "Reconnaissance and information gathering", "Web Application Security", "Penetration Testing", "Network Security", "IDS, FIrewalls, and Honeypots"],
        skills_covered: ["React Components", "React React State Management", "React Event Handling", "Routing in React", "React Application Testing", "React Native"],
        curriculum: [
            {
                title: "Introduction to Web Development and React",
                topic_list: [
                    "Building Blocks of Web Application Development",
                    "Single-page and Multi-page Applications",
                    "Different Client-side Technologies",
                    "MVC Architecture",
                    "Introduction to React",
                    "Installation of React",
                    "JSX and its use case",
                    "DOM",
                    "Virtual DOM and Its Working",
                    "ECMAScript",
                    "Difference between ES5 and ES6",
                    "NPM Modules",
                ],
                no_of_topics: "12",
            },
            {
                title: "Components and Styling the Application Layout",
                topic_list: [
                    "React Elements",
                    "Render Function",
                    "Components",
                    "Class Component",
                    "Component Constructor",
                    "Functional Components",
                    "Multiple Components",
                    "Props",
                    "Props with Class based Component",
                    "Props with Function based Component",
                    "States",
                    "Component Lifecycle",
                    "React Events",
                    "React Forms",
                    "Different Form Concepts",
                    "Styling in React",
                    "Inline Styling",
                    "CSS Stylesheet",
                    "Building Music Shop Application using React Components",
                ],
                no_of_topics: "19",
            },
            {
                title: "Handling Navigation with Routes",
                topic_list: [
                    "Routing",
                    "React-router",
                    "Features of React-router",
                    "Configuration of routing using React-router",
                    "Navigation using Links",
                    "404 page (Not found Page)",
                    "URL Parameters",
                    "Nested Routes",
                    "Implementing styles using NavLink",
                    "Application Programming Interface",
                    "Build a REST API using JSON-server",
                    "API consumption in React application using Fetch method",
                    "Build a dynamic Music Store application using Routing and API connectivity",
                ],
                no_of_topics: "13",
            },
            {
                title: "React State Management using Redux",
                topic_list: [
                    "Need of Redux",
                    "What is Redux?",
                    "Redux Architecture",
                    "Redux Action",
                    "Redux Reducers",
                    "Redux Store",
                    "Principles of Redux",
                    "Pros of Redux",
                    "NPM Packages required to work with Redux",
                    "More about React-Redux package",
                ],
                no_of_topics: "10",
            },
            {
                title: "Asynchronous Programming with Saga Middleware",
                topic_list: [
                    "Need of Async operations",
                    "Async Workflow",
                    "Action Creators",
                    "How to write Action Creators?",
                    "Handling Async Actions via Reducers",
                    "Middleware",
                    "Redux-Saga",
                    "Generators in Redux-Saga",
                    "Saga Methods()",
                    "Major Sections of Redux-Saga",
                    "Building a Product List application using Redux-Saga Middleware",
                    "Debugging application using Redux Devtools",
                ],
                no_of_topics: "12",
            },
        ],
        course_description: [
            {
                title: "About Course",
                content: "React is a JavaScript library that enables the creation of responsive and efficient user interfaces for both web and mobile applications. By enrolling in Edureka’s React JS course, you can develop applications that are consistent in behavior, cross-platform, and easy to test and deploy. React JS also allows you to construct complex UIs using small, self-contained pieces of code known as \"components.\" React is capable of server-side rendering with Node and can power native apps using React Native."
            },
            {
                title: "What are the pre-requisites for this best React js course?",
                content: "Fundamentals of programming and object-oriented concepts like HTML + CSS + JavaScript Knowledge (You don't need to be an expert but should be familiar with the basics of these topics)."
            },
            {
                title: "React JS Course Syllabus",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
        ],
        projects: [
            {
                image: image1,
                industry: "Entertainment",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
            {
                image: image2,
                industry: "IT",
                content: "Build a React Native Food Application and make use of Redux to perform state management. In this application you must filter the food items and display them on screen."
            }
        ]
        
    }
  },
  {
    courseName: "React.js Training Course",
    jobtitle: "React Developer",
    id: "react",
    cardComponent: {
      content: [
        {
          icon: <PiCertificateFill />,
          text: "Tech Facilitators Certificate",
        },
        {
          icon: <MdOutlineLiveTv />,
          text: "60 Hrs Live Classes",
        },
        {
          icon: <BsCalendar2CheckFill />,
          text: "Weekend Classes",
        },
      ],
      instructor: "",
      duration: "",
      summary:
        "Includes Cryptography, Information, Security, Ethical Hacking, and more",
      displayImg: "",
    },
    displayComponent: {
        no_of_learners: 1000,
        rating: "4.7",
        no_of_ratings: 500,
        why_enroll: [
            {
                text: "Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb, Yahoo! Mail and many more use React to build their User Interface to improve user experience",
                image: ""
            },
            {
                text: "React Native supports cross-platform development (iOS and Android), and it can reduce the development effort by 50% without compromising quality or productivity",
                image: ""
            },
            {
                text: "The average salary for \"React Developer\" ranges from $100,816 per year to $110,711 per year, based on the role (Front End Developer/Full Stack Developer) - Indeed.com",
                image: ""
            },
        ],
        related_courses: [
            {
                name: "Front-end Engineer",
                image1: "",
                image2: ""
            },
            {
                name: "React Developer",
                image1: "",
                image2: ""
            },
            {
                name: "Front-end Developer",
                image1: "",
                image2: ""
            }
        ],
        training_benefits: "React development stands out as the future of web creation, offering unparalleled versatility and simplicity. According to a Statista study, React JS reigns as the most sought-after web framework in 2022, with 40.41% of global software developers opting for it in their web application development. This trend isn't unexpected, given the steady rise in demand for React developers in recent years. Mastering React not only expands job opportunities and enhances pay prospects but also connects you with a vast and supportive community.",
        tools_covered: [],
        skills_covered: ["React Components", "React React State Management", "React Event Handling", "Routing in React", "React Application Testing", "React Native"],
        curriculum: [
            {
                title: "Introduction to Web Development and React",
                topic_list: [
                    "Building Blocks of Web Application Development",
                    "Single-page and Multi-page Applications",
                    "Different Client-side Technologies",
                    "MVC Architecture",
                    "Introduction to React",
                    "Installation of React",
                    "JSX and its use case",
                    "DOM",
                    "Virtual DOM and Its Working",
                    "ECMAScript",
                    "Difference between ES5 and ES6",
                    "NPM Modules",
                ],
                no_of_topics: "12",
            },
            {
                title: "Components and Styling the Application Layout",
                topic_list: [
                    "React Elements",
                    "Render Function",
                    "Components",
                    "Class Component",
                    "Component Constructor",
                    "Functional Components",
                    "Multiple Components",
                    "Props",
                    "Props with Class based Component",
                    "Props with Function based Component",
                    "States",
                    "Component Lifecycle",
                    "React Events",
                    "React Forms",
                    "Different Form Concepts",
                    "Styling in React",
                    "Inline Styling",
                    "CSS Stylesheet",
                    "Building Music Shop Application using React Components",
                ],
                no_of_topics: "19",
            },
            {
                title: "Handling Navigation with Routes",
                topic_list: [
                    "Routing",
                    "React-router",
                    "Features of React-router",
                    "Configuration of routing using React-router",
                    "Navigation using Links",
                    "404 page (Not found Page)",
                    "URL Parameters",
                    "Nested Routes",
                    "Implementing styles using NavLink",
                    "Application Programming Interface",
                    "Build a REST API using JSON-server",
                    "API consumption in React application using Fetch method",
                    "Build a dynamic Music Store application using Routing and API connectivity",
                ],
                no_of_topics: "13",
            },
            {
                title: "React State Management using Redux",
                topic_list: [
                    "Need of Redux",
                    "What is Redux?",
                    "Redux Architecture",
                    "Redux Action",
                    "Redux Reducers",
                    "Redux Store",
                    "Principles of Redux",
                    "Pros of Redux",
                    "NPM Packages required to work with Redux",
                    "More about React-Redux package",
                ],
                no_of_topics: "10",
            },
            {
                title: "Asynchronous Programming with Saga Middleware",
                topic_list: [
                    "Need of Async operations",
                    "Async Workflow",
                    "Action Creators",
                    "How to write Action Creators?",
                    "Handling Async Actions via Reducers",
                    "Middleware",
                    "Redux-Saga",
                    "Generators in Redux-Saga",
                    "Saga Methods()",
                    "Major Sections of Redux-Saga",
                    "Building a Product List application using Redux-Saga Middleware",
                    "Debugging application using Redux Devtools",
                ],
                no_of_topics: "12",
            },
        ],
        course_description: [
            {
                title: "About Course",
                content: "React is a JavaScript library that enables the creation of responsive and efficient user interfaces for both web and mobile applications. By enrolling in Edureka’s React JS course, you can develop applications that are consistent in behavior, cross-platform, and easy to test and deploy. React JS also allows you to construct complex UIs using small, self-contained pieces of code known as \"components.\" React is capable of server-side rendering with Node and can power native apps using React Native."
            },
            {
                title: "What are the pre-requisites for this best React js course?",
                content: "Fundamentals of programming and object-oriented concepts like HTML + CSS + JavaScript Knowledge (You don't need to be an expert but should be familiar with the basics of these topics)."
            },
            {
                title: "React JS Course Syllabus",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
        ],
        projects: [
            {
                image: image1,
                industry: "Entertainment",
                content: "The React JS syllabus begins with the basics, such as JSX and React components, state, props, and more. Once these fundamentals are covered, we will move on to more advanced concepts such as passing data between components, component composition, unit testing, styling, and other valuable utilities."
            },
            {
                image: image2,
                industry: "IT",
                content: "Build a React Native Food Application and make use of Redux to perform state management. In this application you must filter the food items and display them on screen."
            }
        ]
        
    }
  },
];