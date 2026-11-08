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
      "https://s.alicdn.com/@sc04/kf/Ha280f266971c49c98ee90378ee5178c5l.jpg",
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
    link: "https://smartbuy.alibaba.com/buyingguides/stm32-plc",
  },

  {
    title: "Embedded Oscilloscope",
    category: "Electronics",
    image: "https://ss1.xrea.com/harahore.g2.xrea.com/STM32/DLO-138-SPI.JPG",
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
    link: "https://ss1.xrea.com/harahore.g2.xrea.com/STM32/DLO-138-SPI.html",
  },

  {
    title: "Smart MPPT Charger",
    category: "Electronics",
    image: "https://open.pe/wp-content/uploads/2023/03/image-63.png",
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
    link: "https://open.pe/2023/03/23/libresolar-mppt-2420-lc-and-mppt-2420-hc/",
  },

  {
    title: "BLDC Motor Controller",
    category: "Electronics",
    image:
      "https://www.bldcelectricmotor.com/photo/ps32531650-hall_effect_12_volt_motor_controller_circuit_board_jyqd_v7_3e2.jpg",
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
    link: "https://www.bldcelectricmotor.com/sale-13540799-hall-effect-12-volt-motor-controller-bldc-motor-driver-circuit-board_jyqd-v7-3e2.html",
  },

  {
    title: "Low-Cost Wireless Audio Receiver",
    category: "Electronics",
    image:
      "https://www.botnroll.com/15540-large_default/esp32-audio-kit-wifi-bluetooth-development-board-with-esp32-a1s.jpg",
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
    link: "https://www.botnroll.com/en/esp32/4055-esp32-audio-kit-wifi-bluetooth-development-board-with-esp32-a1s.html",
  },

  {
    title: "Mobile Controllable Car",
    category: "Electronics",
    image:
      "https://down-ph.img.susercontent.com/file/cn-11134207-7ras8-m96qo247i75e4c",
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
    link: "https://shopee.ph/TSCINBUNY-ESP32-Wifi-Smart-Robot-Toy-Kits-For-Arduino-Robot-Car-ESP32-Cam-C-C-Programming-Artificial-Intelligent-Robot-STEM-Starter-Kits-with-Codes-and-Instructions-i.1032051891.27385489867",
  },

  {
    title: "Embedded IoT Controller",
    category: "Electronics",
    image: "https://j.lnwfile.com/_/j/_raw/a3/lj/6s.png",
    description:
      "An embedded IoT controller architecture combining microcontroller firmware, sensor and actuator interfaces, serial communication, and wireless connectivity for connected embedded applications.",
    tech: ["ESP32", "STM32", "UART", "SPI", "I²C", "RS485", "IoT", "Firmware"],
    link: "https://www.sumtechstores.com/product/621/iot-controller-board",
  },

  {
    title: "Low-Power Embedded System",
    category: "Electronics",
    image:
      "https://hackster.imgix.net/uploads/attachments/225020/1YT8sQ1nlSRswRw7Rp1I.uploads/tmp/b1bcd1e3-2fee-48d9-847c-2fe9aa9a8bf6/tmp_image_0?auto=compress%2Cformat&fit=min&h=675&w=900",
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
    link: "https://www.hackster.io/sfrwmaker/make-your-own-remote-temperature-humidity-sensor-464f63",
  },

  {
    title: "Embedded Display Controller",
    category: "Electronics",
    image:
      "https://robocraze.com/cdn/shop/files/3_674760ca-9b7b-43a9-a671-1012d2f45bda.png?v=1715948260&width=1445",
    description:
      "A microcontroller-based interface integrating TFT and OLED display control, SPI communication, user input, and firmware-driven graphical output.",
    tech: ["STM32", "ATmega32", "OLED", "ILI9341", "SPI", "Embedded Firmware"],
    link: "https://robocraze.com/products/elecrow-2-4-inch-hmi-touch-display-240-320-ttl-serial-screen",
  },
];

/* ============================================================
   DETAILED PROJECTS
============================================================ */

export const DETAILED_PROJECTS: Projects[] = PROJECTS.map((project, index) => ({
  id: index + 1,
  title: project.title,
  category: project.category === "Electronics" ? "Electronics" : "Software",
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
