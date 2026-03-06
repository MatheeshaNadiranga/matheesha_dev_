export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Projects {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  status: string;
}
export const PROJECTS: Project[] = [
  {
    title: "Expenses Tracker",
    category: "Full Stack",
    image:
      "https://media.gettyimages.com/id/1513515363/video/program-coding.jpg?s=640x640&k=20&c=usywTgJcpE8XYWuI9xz7jyZDDSRLUDC2Zoj604vQkOk=",
    description:
      "A sleek, intuitive expense manager that helps users take control of their finances. Features a responsive React web dashboard and a React Native mobile app for tracking spending on the go.",
    tech: ["React", "Express JS", "React Native"],
    link: "#",
  },
  {
    title: "My Portfolio",
    category: "Web Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiiUlZsjpYkgQhaGS1lKrCPzWrp4ME8CLmA&s",
    description:
      "A high-performance personal showcase featuring interactive 3D graphics and modern styling. Focused on clean code, responsive design, and smooth user interactions.",
    tech: ["React", "Tailwind CSS", "Three.js"],
    link: "#",
  },
];

export const DETAILED_PROJECTS: Projects[] = [
  {
    id: 1,
    title: PROJECTS[0].title,
    category: "Software",
    description: PROJECTS[0].description,
    tech: PROJECTS[0].tech,
    github: PROJECTS[0].link,
    demo: "#",
    status: "In Progress",
  },
  {
    id: 2,
    title: PROJECTS[1].title,
    category: "Software",
    description: PROJECTS[1].description,
    tech: PROJECTS[1].tech,
    github: PROJECTS[1].link,
    demo: "#",
    status: "Completed",
  },
];
