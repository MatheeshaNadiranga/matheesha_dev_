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

/* ============================================================
   PROJECT DATA
============================================================ */

export const PROJECTS: Project[] = [
  {
    title: "Industrial Multi-I/O Controller",
    category: "Electronics",
    image:
      "/projects/industrial-controller.jpg",
    description:
      "A modular industrial controller designed around isolated 24 V digital inputs, isolated transistor outputs, 0–10 V analog inputs, 4–20 mA current inputs, RS485 communication, SD card storage, OLED display, USB connectivity, ST-Link programming, push-button control, and dedicated SPI peripherals.",
    tech: [
      "STM32",
      "Altium Designer",
      "RS485",
      "24V Digital I/O",
      "0–10V",
      "4–20mA",
      "OLED",
      "SD Card",
      "USB",
      "ST-Link",
    ],
    link: "#",
  },

  {
    title: "Embedded Oscilloscope",
    category: "Electronics",
    image:
      "/projects/oscilloscope.jpg",
    description:
      "A compact embedded oscilloscope concept using a microcontroller for signal acquisition and a TFT display for firmware-driven waveform visualization. Designed as a practical electronics measurement and debugging platform.",
    tech: [
      "ATmega32",
      "ILI9341",
      "SPI",
      "Embedded C/C++",
      "Signal Acquisition",
      "TFT Display",
    ],
    link: "#",
  },

  {
    title: "Smart MPPT Charger",
    category: "Electronics",
    image:
      "/projects/mppt-charger.jpg",
    description:
      "A smart solar charging system concept focused on maximum power point tracking, power conversion, battery charging, embedded monitoring, and efficient energy management.",
    tech: [
      "MPPT",
      "Power Electronics",
      "Embedded Control",
      "Battery Charging",
      "DC-DC Conversion",
      "Microcontroller",
    ],
    link: "#",
  },

  {
    title: "BLDC Motor Controller",
    category: "Electronics",
    image:
      "/projects/bldc-controller.jpg",
    description:
      "A BLDC motor-control project exploring embedded commutation, PWM generation, feedback, power-stage design, and firmware architecture for efficient motor operation.",
    tech: [
      "BLDC",
      "Motor Control",
      "Embedded Systems",
      "PWM",
      "Power Electronics",
      "Microcontroller",
    ],
    link: "#",
  },

  {
    title: "Low-Cost Wireless Audio Receiver",
    category: "Electronics",
    image:
      "/projects/wireless-audio.jpg",
    description:
      "A compact wireless audio receiver prototype focused on low-cost hardware, wireless audio reception, power management, audio output, PCB development, and product-oriented hardware design.",
    tech: [
      "Wireless Audio",
      "Embedded Systems",
      "Low Power",
      "Audio Electronics",
      "PCB Design",
      "Hardware Prototype",
    ],
    link: "#",
  },

  {
    title: "Mobile Controllable Car",
    category: "Electronics",
    image:
      "/projects/mobile-car.jpg",
    description:
      "An ESP32-based robotic vehicle controlled remotely through a mobile application. The system uses MQTT communication for real-time commands and an ultrasonic sensor for front obstacle detection.",
    tech: [
      "ESP32",
      "MQTT",
      "React Native",
      "IoT",
      "Ultrasonic Sensor",
      "Embedded Systems",
    ],
    link: "#",
  },

  {
    title: "Embedded IoT Controller",
    category: "Electronics",
    image:
      "/projects/iot-controller.jpg",
    description:
      "An embedded IoT controller architecture combining microcontroller firmware, sensor and actuator interfaces, serial communication, and wireless connectivity for connected embedded applications.",
    tech: [
      "ESP32",
      "STM32",
      "UART",
      "SPI",
      "I²C",
      "RS485",
      "IoT",
      "Firmware",
    ],
    link: "#",
  },

  {
    title: "Low-Power Embedded System",
    category: "Electronics",
    image:
      "/projects/low-power.jpg",
    description:
      "An embedded hardware concept focused on power-efficient operation, peripheral management, sleep strategies, battery operation, and efficient system architecture.",
    tech: [
      "Low Power",
      "Embedded C",
      "STM32",
      "ESP32",
      "Power Management",
      "Battery Systems",
    ],
    link: "#",
  },

  {
    title: "Embedded Display Controller",
    category: "Electronics",
    image:
      "/projects/display-controller.jpg",
    description:
      "A microcontroller-based interface integrating TFT and OLED display control, SPI communication, user input, and firmware-driven graphical output.",
    tech: [
      "STM32",
      "ATmega32",
      "OLED",
      "ILI9341",
      "SPI",
      "Embedded Firmware",
    ],
    link: "#",
  }
  
];

/* ============================================================
   DETAILED PROJECTS
============================================================ */

export const DETAILED_PROJECTS: Projects[] =
  PROJECTS.map((project, index) => ({
    id: index + 1,
    title: project.title,
    category:
      project.category === "Electronics"
        ? "Electronics"
        : "Software",
    description: project.description,
    tech: project.tech,
    github: undefined,
    demo: undefined,
    status:
      project.title === "My Portfolio"
        ? "Completed"
        : project.category === "Electronics"
        ? "Prototype"
        : "Completed",
    image: project.image,
    link: project.link,
  }));