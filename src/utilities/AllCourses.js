import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

export const allCourses = [
    {
        courseName: "Frontend Development/ Web3",
        content: [
            {
                icon: <PiCertificateFill />, 
                text: "Tech Facilitators Certificate"
            },
            {
                icon: <MdOutlineLiveTv />, 
                text: "30 Hrs Live Classes"
            },
            {
                icon: <BsCalendar2CheckFill />, 
                text: "Weekend Classes"
            },
        ],
        id: "frontend",
        instructor: "",
        duration: "",
        liveClassesHr: "",
        summary: "Build impressive websites using HTML5, CSS3, Google APIs and many more",
        displayImg: "",
        classDay: "",
        contentImg: {
            liveclasses: "",
            insturctor: "",
            duration: ""
        }
    },
    {
        courseName: "Backend Development",
        content: [
            {
                icon: <PiCertificateFill />, 
                text: "Tech Facilitators Certificate"
            },
            {
                icon: <MdOutlineLiveTv />, 
                text: "60 Hrs Live Classes"
            },
            {
                icon: <BsCalendar2CheckFill />, 
                text: "Weekend Classes"
            },
        ],
        instructor: "",
        duration: "",
        liveClassesHr: "",
        summary: "",
        displayImg: "",
        classDay: "",
    },
    {
        courseName: "Cyber Security and Ethical Hacking Complete Course",
        content: [
            {
                icon: <PiCertificateFill />, 
                text: "Tech Facilitators Certificate"
            },
            {
                icon: <MdOutlineLiveTv />, 
                text: "60 Hrs Live Classes"
            },
            {
                icon: <BsCalendar2CheckFill />, 
                text: "Weekend Classes"
            },
        ],
        instructor: "",
        duration: "",
        summary: "Includes Cryptography, Information, Security, Ethical Hacking, and more",
        displayImg: "",
    },
]