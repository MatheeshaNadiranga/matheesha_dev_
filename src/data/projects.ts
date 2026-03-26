export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Projects {
  id?: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: string;
  image?: string;
  link?: string;
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
    tech: ["React", "Tailwind CSS", "Three.js", "Typescript"],
    link: "#",
  },
  {
    title: "Mobile Controllable Car",
    category: "Embedded System",
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A mobile-controlled robotic car built using ESP32, React Native, and the MQTT protocol. The React Native mobile app sends control commands (forward, backward, left, right) to the ESP32 through an MQTT broker, allowing real-time remote control of the vehicle. An ultrasonic sensor is integrated to detect obstacles in front of the car and enhance safety. This project demonstrates IoT communication between embedded hardware and a mobile application using a lightweight publish–subscribe architecture.",
    tech: ["React Native", "MQTT", "ESP32"],
    link: "#",
  },
  {
    title: "Vehicle Management System",
    category: "Full Stack",
    image:
      "https://static.vecteezy.com/system/resources/previews/003/335/579/large_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg",
    description:
      "A comprehensive web application for managing high-end vehicle stock. Built with a React frontend and Java Spring Boot backend, the system features advanced filtering, dynamic spare part linking, and automated image handling. Key highlights include custom database constraints to ensure data integrity and a responsive, dark-themed dashboard for administrative control.",
    tech: ["React", "Springboot", "MySQL"],
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
  {
    id: 3,
    title: PROJECTS[2].title,
    category: "Electronics",
    description: PROJECTS[2].description,
    tech: PROJECTS[2].tech,
    github: PROJECTS[2].link,
    demo: "#",
    status: "Completed",
  },
  {
    id: 4,
    title: PROJECTS[3].title,
    category: "Software",
    description: PROJECTS[3].description,
    tech: PROJECTS[3].tech,
    github: PROJECTS[3].link,
    demo: "#",
    status: "Completed",
  },
];
