// Assets Imports
// import p1_vid1 from '../assets/videos/demo1.mp4';
import p1_img1 from '../assets/images/IsaacLab_training.jpg';
// import p1_img2 from '../assets/images/robot2.jpg';
import p5_img1 from '../assets/images/Wifi_car2.jpg';
import p5_img2 from '../assets/images/Wifi_car1.jpg';
import p7_img1 from '../assets/images/dual_b2.jpg';
import p7_img2 from '../assets/images/dual_b1.jpg';
import p2_img1 from '../assets/images/Lidar_d2.jpg';
import p2_img2 from '../assets/images/Lidar_d1.jpg';
import p8_img1 from '../assets/images/breath1.jpg';
import p8_img2 from '../assets/images/breath2.jpg';
import p8_img3 from '../assets/images/breath3.jpg';
import p6_img1 from '../assets/images/smartV1.jpg';
import p6_img2 from '../assets/images/smartV2.jpg';
import p6_img3 from '../assets/images/smartV3.jpg';
import p9_img1 from '../assets/images/tolltax1.jpg';
import p9_img2 from '../assets/images/tolltax2.jpg';
import p11_img1 from '../assets/images/gpsT1.jpg';
import p11_img2 from '../assets/images/gpsT2.jpg';
import p12_img1 from '../assets/images/plantM1.jpg';
import p12_img2 from '../assets/images/plantM2.jpg';
import p3_img1 from '../assets/images/lineF1.jpg';
import p13_img2 from '../assets/images/HomeA2.jpg';
import p13_img1 from '../assets/images/HomeA1.jpg';
import p14_img1 from '../assets/images/2dNavigation.jpg';
// import p14_img2 from '../assets/images/robot2.jpg';
import p15_img1 from '../assets/images/AkerM1.jpg';
import p15_img2 from '../assets/images/3d Navigation.jpg';
import p16_img1 from '../assets/images/3D-Lidar-mapping.jpg';
import p16_img2 from '../assets/images/3dMapping1.jpg';
import p17_img1 from '../assets/images/RoboticArmSim.jpg';
// import p17_img2 from '../assets/images/robot2.jpg';
import p18_img1 from '../assets/images/BipedR.jpg';
// import p18_img2 from '../assets/images/robot2.jpg';
import p19_img1 from '../assets/images/gesture_hand1.jpg';
// import p19_img2 from '../assets/images/robot2.jpg';
import p20_img1 from '../assets/images/gesture_imu.jpg';
// import p20_img2 from '../assets/images/robot2.jpg';
import p21_img1 from '../assets/images/RoboticA.jpg';
// import p21_img2 from '../assets/images/robot2.jpg';

import p22_img1 from '../assets/images/QDDA1.jpg';
import p22_img2 from '../assets/images/QDDA2.jpg';
import p23_img1 from '../assets/images/PreH.jpg';
import p23_img2 from '../assets/images/PreH2.jpg';
import p24_img1 from '../assets/images/Sim2Real.jpg';

export const PORTFOLIO_DATA = {
  profile: {
    name: "Satyendra",
    title: "Robotics & AI Engineer",
    bio: "Robotics and embedded systems engineer building complete robotic products from simulation and electronics to firmware, vision, motion control, SDKs, and real-world deployment.",
    details: [
      "Developing high-speed Delta robot systems for conveyor-based vision-guided pick and place.",
      "Experienced in ROS 2, autonomous navigation, SLAM, manipulation, and simulation-to-real workflows.",
      "Hands-on with embedded firmware, AC servo systems, sensors, PCB design, control panels, and industrial communication.",
      "Building complete robot control SDKs and deploying robotics workloads on NVIDIA Jetson platforms."
    ],
    socials: { linkedin: "#", github: "#" }
  },
  skills: [
    { category: "Core", items: ["Python (OOP)", "C++", "C"] },
    { category: "Simulation", items: ["Isaac Sim", "Isaac Lab", "Ignition Gazebo","Pybullet"] },
    { category: "Robotics", items: ["ROS 2 (Humble/Jazzy)", "Nav2", "RTAB-MAP", "MoveIt 2"] },
    { category: "Tools", items: ["Git", "Linux", "Solidwork"] },
    { category: "AI & CV", items: ["PyTorch", "YOLOv8", "OpenCV", "MediaPipe", "Reinforcement Learning"] }
  ],
  experience: [
    {
      company: "WeVois Labs Pvt. Ltd.",
      role: "Robotics Engineer",
      period: "February 2026 – Present",
      tasks: [
        "Delta Robot Ownership: Leading the electronics, embedded control, vision, SDK, and system integration for a high-speed conveyor-based pick-and-place robot.",
        "Prototype to Servo Migration: Built the initial stepper motor/driver prototype, evaluated its load limitations, and migrated the system to AC servo motors, servo drives, and gearboxes for higher torque, speed, and closed-loop reliability.",
        "Electronics & Panel Integration: Designed and assembled the control electronics, power and signal wiring, interface PCB, protection circuits, and complete control panel; performed hardware bring-up and troubleshooting.",
        "Firmware & Motion Control: Developed Teensy 4.1 firmware with Delta inverse kinematics, synchronized multi-axis pulse generation, absolute-position handling, motion profiles, workspace limits, fault recovery, and safety sequencing.",
        "Servo Communication: Integrated absolute encoder feedback and RS-485/Modbus communication for position verification, diagnostics, alarm reset, and commissioning of AC servo drives.",
        "Vision & Conveyor Tracking: Integrated camera-based object detection, camera-to-robot calibration, conveyor tracking, sensors, and precisely timed solenoid-vacuum control for moving-object pick and place.",
        "Robot SDK: Developed a PC-side SDK for motion commands, calibration, parameter read/write, monitoring, and complete robot operation.",
        "IoT/RFID Prototype: Built an embedded RFID reader prototype that captures tag data and transmits records to a remote server over the internet."
      ]
    },
    {
      company: "Highflow Industries (NextStep Robotics)",
      role: "Robotics Engineer",
      period: "December 2024 – February 2026",
      tasks: [
        "Advanced Manipulation: 14+ months of expertise in Robotic Arm simulation, transitioning from PyBullet's physics-based environments to high-fidelity NVIDIA Isaac Sim workflows.",
        "Isaac Sim Expert: Developing complex manipulation scenes using RMPflow and MoveIt 2 for multi-DOF arms, focusing on obstacle avoidance and optimal trajectory planning.",
        "Autonomous Navigation: Building end-to-end navigation stacks for AMRs using Nav2, integrating 3D LiDAR and RGB-D cameras for dynamic obstacle negotiation.",
        "3D SLAM & Localization: Implementing RTAB-Map with ICP-based odometry on 3D LiDAR data, fine-tuning loop closure and graph optimization to eliminate localization drift.",
        "Simulation-to-Real (S2R): Validating robot URDFs and controller stability in Isaac Sim before deployment on Jetson Orin Nano, ensuring consistent TF Tree performance.",
        "Kinematics & Control: Developing custom Forward and Inverse Kinematics (IK) solvers and integrating force-feedback gripper logic for delicate pick-and-place tasks.",
        "System Optimization: Architecting ROS 2 nodes and launch configurations on Edge devices, managing real-time data flow between sensors (LiDAR/Camera) and the navigation stack."
      ]
    },

    {
      company: "XPRT Enforcement Pvt. Ltd.",
      role: "Embedded System Engineer",
      period: "August 2022 – February 2023",
      tasks: ["End-to-End Product Development: Designed and prototyped IoT-based embedded systems, including circuit design, PCB layouting, and hands-on SMD component assembly.",
        "Traffic Enforcement Systems: Contributed to 'Speedo Soft'—an AI-driven device for detecting triple-riding, helmet-less driving, and seatbelt violations using ANPR (Automatic Number Plate Recognition).",
        "Sensor Integration: Developed firmware for advanced systems including Dual-Battery Intelligent Power Management, Radar-based speed detection, and breath analyzer modules.",
        "Hardware R&D: Managed the complete hardware lifecycle from schematic capture to physical PCB printing and rigorous validation of electronic modules.",
        "Smart Vehicle Telematics: Integrated GPS and Radar data modules for real-time vehicle tracking and violation logging in smart traffic environments.",
        "System Architecture: Documented comprehensive technical reports and architecture for scalable IoT deployments in municipal traffic management."]
    },
      {
      company: "Experio Traffiko System Pvt. Ltd.",
      role: "Embedded Systems & IoT Engineer", 
      period: "November 2020 – October 2021",
      tasks: [
        "End-to-End Product Development: Designed and prototyped IoT-based embedded systems, including circuit design, PCB layouting, and hands-on SMD component assembly.",
        "Traffic Enforcement Systems: Contributed to 'Speedo Soft'—an AI-driven device for detecting triple-riding, helmet-less driving, and seatbelt violations using ANPR (Automatic Number Plate Recognition).",
        "Sensor Integration: Developed firmware for advanced systems including Dual-Battery Intelligent Power Management, Radar-based speed detection, and breath analyzer modules.",
        "Hardware R&D: Managed the complete hardware lifecycle from schematic capture to physical PCB printing and rigorous validation of electronic modules.",
        "Smart Vehicle Telematics: Integrated GPS and Radar data modules for real-time vehicle tracking and violation logging in smart traffic environments.",
        "System Architecture: Documented comprehensive technical reports and architecture for scalable IoT deployments in municipal traffic management."
      ]
    },
  ],
  training: [
    {
      company: "Softpro India Computer Technologies",
      course: "Internet of Things (Professional Certification)",
      period: "July 2024",
      tasks: [
        "IoT Stack & Architecture: Mastered the 4-layer IoT architecture, focusing on the integration of Perception, Network, Support, and Application layers.",
        "Cloud Connectivity & Protocols: Implemented real-time data streaming to cloud platforms (like ThingSpeak or Firebase) using MQTT and HTTP protocols for remote monitoring.",
        "Sensor Fusion & Data Acquisition: Configured multi-sensor arrays (DHT, Ultrasonic, IR) for precise data collection and noise filtering at the edge.",
        "Embedded Programming: Developed low-power firmware for ESP32 and Arduino boards, enabling wireless communication (Wi-Fi/Bluetooth) for smart-home automation use cases.",
        "System Prototyping: Gained hands-on experience in building end-to-end IoT pipelines, from hardware sensor interfacing to real-time dashboard visualization.",
        "Technical Documentation: Created comprehensive system design reports and circuit schematics for scalable IoT node deployments."
      ]
    },
    {
      company: "ITI Limited, Mankapur (A Govt. of India Enterprise)",
      course: "Advanced Embedded Systems & Real-Time OS (RTOS)",
      period: "July 2019",
      tasks: [
        "RTOS Fundamentals: Studied the architecture of Real-Time Operating Systems, focusing on task scheduling, interrupt handling, and multi-threading for time-critical applications.",
        "Microcontroller Mastery: Gained hands-on experience in interfacing 8051 and AVR microcontrollers with peripherals like LCDs, Keypads, and ADC/DAC modules.",
        "Embedded C Programming: Developed firmware using Embedded C, implementing optimized memory management and hardware abstraction layers (HAL).",
        "System Integration: Conducted debugging and testing of embedded circuits to ensure reliable communication between hardware components and the OS kernel.",
        "Industrial Standards: Observed the large-scale manufacturing and assembly processes of telecommunication equipment, understanding industrial-grade quality control.",
        "Protocol Implementation: Practiced low-level serial communication protocols including UART, I2C, and SPI for efficient data transfer between sensors and MCUs."
      ]
    },
    {
      company: "Softpro India Computer Technologies",
      course: "Advanced Internet of Things (IoT) & Embedded AI",
      period: "Jan 2020",
      tasks: [
        "Comprehensive IoT Architecture: Studied the end-to-end flow of IoT systems, from edge devices and gateways to cloud-based data processing layers.",
        "Hardware Expertise (ESP series): Developed firmware for ESP8266 and ESP32 to implement Wi-Fi based data logging and real-time remote actuator control.",
        "Single Board Computing (Raspberry Pi): Configured Raspberry Pi environments for high-level tasks, including local web servers and data aggregation using Linux-based systems.",
        "Python Programming for IoT: Mastered Python for automating data acquisition, processing sensor streams, and building communication scripts via MQTT and HTTP protocols.",
        "Cloud & Connectivity: Integrated edge devices with cloud platforms for real-time visualization, utilizing both REST APIs and pub/sub messaging models.",
        "Sensor Fusion & Integration: Interfaced a variety of digital and analog sensors (DHT, Ultrasonic, PIR) with microcontrollers to build responsive smart-city and home automation prototypes.",
        "Contribution: Designed the logic for autonomous data reporting, performed hardware-software debugging, and optimized Python scripts for low-latency execution."
      ]
    },
    {
      company: "ITI Limited, Mankapur (A Govt. of India Enterprise)",
      course: "Advanced Embedded Systems & Real-Time OS (RTOS)",
      period: "July 2019",
      tasks: [
        "RTOS Fundamentals: Studied the architecture of Real-Time Operating Systems, focusing on task scheduling, interrupt handling, and multi-threading for time-critical applications.",
        "Microcontroller Mastery: Gained hands-on experience in interfacing 8051 and AVR microcontrollers with peripherals like LCDs, Keypads, and ADC/DAC modules.",
        "Embedded C Programming: Developed firmware using Embedded C, implementing optimized memory management and hardware abstraction layers (HAL).",
        "System Integration: Conducted debugging and testing of embedded circuits to ensure reliable communication between hardware components and the OS kernel.",
        "Industrial Standards: Observed the large-scale manufacturing and assembly processes of telecommunication equipment, understanding industrial-grade quality control.",
        "Protocol Implementation: Practiced low-level serial communication protocols including UART, I2C, and SPI for efficient data transfer between sensors and MCUs."
      ]
    },
  ],
  education: [
    { degree: "B.Tech in Electronics & Communication Engineering", institution: "AKTU", period: "2021 – 2024" },
    { degree: "Diploma in Electronics Engineering", institution: "MMIT Sant Kabir Nagar", period: "2018 – 2020" }
  ],
  projects: [
    {
      id: 25,
      title: "High-Speed Delta Robot: Vision-Guided Conveyor Pick & Place",
      category: "Industrial Robotics",
      tag: "Motion Control & System Integration",
      img: null,
      images: [],
      videoData: [
        {
          url: "https://www.youtube.com/embed/Xve4OhukGK0",
          title: "Delta Robot Demonstration",
          type: "YouTube Demo",
          desc: "Temporary demonstration link. This can be replaced with the final Delta robot video later."
        }
      ],
      detailedDesc: [
        "Developed an initial functional prototype using stepper motors and drivers, then evaluated payload limitations and migrated the system to AC servo motors, servo drives, and gearboxes.",
        "Owned the electronics architecture, control-panel assembly, power and signal wiring, interface PCB design/assembly, driver configuration, and system bring-up.",
        "Developed complete Teensy 4.1 firmware with custom Delta inverse kinematics, synchronized three-axis motion, absolute positioning, trajectory profiles, workspace safety limits, and fault handling.",
        "Integrated absolute encoder feedback and RS-485/Modbus communication for diagnostics, position verification, alarm reset, and servo commissioning.",
        "Integrated camera-based object detection, camera-to-robot calibration, conveyor tracking, sensor inputs, and precisely timed solenoid-vacuum control.",
        "Developed a PC-side robot SDK for motion control, calibration, parameter read/write, monitoring, and repeatable autonomous operation.",
        "Contribution: Delivered the complete electronics, embedded firmware, control integration, camera interface, and SDK while collaborating with the mechanical design team."
      ],
      techStack: ["Teensy 4.1", "C++", "Delta Kinematics", "AC Servo Motors", "RS-485/Modbus", "Absolute Encoders", "OpenCV/YOLO", "Conveyor Tracking", "Robot SDK"]
    },
    { 
      id: 1, 
      title: "RL-Based Robotic Arm Training & Inference", 
      category: "AI & Simulation", 
      tag: "Reinforcement Learning", 
      img: p1_img1, 
      images: [p1_img1,],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/upPv2WdfEm4", 
          title: "Isaac Sim Arm Simulation", 
          type: "Simulation", 
          desc: "Testing robotic arm joint movements and trajectory planning within the NVIDIA Isaac Sim environment." 
        },
       { 
          url: "https://www.youtube.com/embed/rc3EDOIQOiY", 
          title: "Massively Parallel Training", 
          type: "Reinforcement Learning", 
          desc: "Training multiple robotic arm agents simultaneously using NVIDIA Isaac Gym to accelerate policy convergence." 
        },
        { 
          url: "https://www.youtube.com/embed/KXtaNST_glo",
          type: "Testing", 
          desc: "Validating the trained neural network model in a high-fidelity simulation environment." 
        }
      ],
      detailedDesc: [
        "Leveraged NVIDIA Isaac Sim and Isaac Gym for massively parallel Reinforcement Learning (RL) training of a robotic arm.",
        "Implemented the Proximal Policy Optimization (PPO) algorithm to train the agent for complex manipulation tasks like reaching and precise object grasping.",
        "Configured a high-dimensional observation space including joint positions, velocities, and end-effector distance to the target.",
        "Performed Model Inference Testing by deploying the trained .pt/.onnx weights back into the simulation to validate success rates and behavior robustness.",
        "Utilized the Isaac Sim-to-ROS 2 bridge to test the trained policy's compatibility with standard robotics communication protocols.",
        "Contribution: Designed the reward function logic, managed the training environment setup, and optimized hyperparameters for faster convergence."
      ],
      techStack: ["NVIDIA Isaac Sim", "Isaac Gym", "PyTorch", "Reinforcement Learning (PPO)", "Python", "ROS 2"]
    },
  

    { 
      id: 23, 
      title: "Humanoid Robotic Hand: Predefined Task Automation", 
      category: "Robotics Manipulation", 
      tag: "Mechatronics", 
      img: p23_img1, 
      images: [p23_img1,p23_img2,],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/R8y31M2cbRU",
          title: "Hand Task Execution", 
          type: "Hardware", 
          desc: "Demonstrating predefined tasks like grasping, waving, and object holding using a humanoid robotic hand." 
        },
        { 
          url: "https://www.youtube.com/embed/cxwXiCVVMF8",
          title: "Elbow testing", 
          type: "Hardware", 
          desc: "Demonstrating predefined tasks elbow motor testing." 
        },
        { 
          url: "https://www.youtube.com/embed/IxUBE8Fkoac",
          title: "Hand finger testing", 
          type: "Hardware", 
          desc: "Demonstrating finger movement." 
        }
      ],
      detailedDesc: [
        "Developed and programmed a multi-DOF (Degree of Freedom) humanoid robotic hand to execute a library of predefined tasks.",
        "Mapped complex human gestures into discrete motor positions to perform tasks such as firm grasping, delicate object handling, and basic sign language.",
        "Implemented a State Machine logic to transition smoothly between different predefined routines (e.g., Neutral to Grasp to Release).",
        "Optimized the finger synchronization using PWM-based servo control to ensure fluid and natural movement patterns.",
        "Conducted load-bearing tests to determine the maximum grip strength and stability of the hand during long-duration hold tasks.",
        "Contribution: Designed the task-based control firmware, calibrated joint limits for safe operation, and optimized the power-to-torque distribution."
      ],
      techStack: ["C++", "Arduino/ESP32", "PWM Control", "Kinematics", "Servo Control Systems"]
    },
    { 
      id: 22, 
      title: "QDD Actuator: Design, Development & Testing", 
      category: "Hardware Engineering", 
      tag: "Actuation & Mechatronics", 
      img: p22_img1, 
      images: [p22_img1, p22_img2],
      videoData: [
        {
          url: "https://www.youtube.com/embed/QCXooBABelQ",
          title: "QDD Actuator Demonstration",
          type: "YouTube Demo",
          desc: "YouTube demonstration link for the actuator project."
        }
      ],
      detailedDesc: [
        "Engineered a high-performance Quasi-Direct Drive (QDD) actuator from scratch, optimized for high-torque and high-bandwidth robotic applications.",
        "Designed a low-reduction planetary gear system (e.g., 6:1 or 10:1) in SolidWorks to maximize back-drivability and impact resistance.",
        "Selected and integrated a high-torque BLDC motor with a high-resolution magnetic encoder for precise closed-loop position and torque control.",
        "Conducted rigorous testing for thermal management, peak torque output, and back-lash minimization to ensure reliability under dynamic loads.",
        "Implemented FOC (Field Oriented Control) using an ODrive or custom motor controller for smooth and efficient motor commutation.",
        "Contribution: Managed mechanical CAD design, gear tolerance analysis, motor driver configuration, and static/dynamic load testing."
      ],
      techStack: ["SolidWorks", "BLDC Motors", "Planetary Gears", "FOC (Field Oriented Control)", "Static & Dynamic Testing"]
    },

    { 
      id: 21, 
      title: "Autonomous Vision-Based Pick & Place Robot Arm", 
      category: "Robotics & AI", 
      tag: "Computer Vision", 
      img: p21_img1, 
      images: [p21_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/Xve4OhukGK0", 
          title: "Real-World Autonomous Task", 
          type: "Hardware", 
          desc: "Demonstrating fully autonomous object detection, localization, and pick-and-place execution using a real robotic arm." 
        }
      ],
      detailedDesc: [
        "Developed an end-to-end autonomous pipeline for a physical robotic arm to detect, pick, and place objects without manual intervention.",
        "Integrated an Eye-to-Hand/Eye-in-Hand camera setup using OpenCV and YOLO to detect object classes and calculate their 2D/3D centroids.",
        "Implemented Coordinate Transformation logic to convert image-pixel coordinates into the robot's world frame (Camera-to-Robot Calibration).",
        "Utilized Inverse Kinematics (IK) to drive the end-effector to the precise object location with sub-millimeter accuracy.",
        "Automated the grasping logic with feedback-based gripper control to ensure stable object handling during transport.",
        "Contribution: Designed the vision-robot interface, performed workspace calibration, and optimized the motion planning for high-speed cycle times."
      ],
      techStack: ["Python", "OpenCV", "YOLOv8", "Inverse Kinematics", "PySerial/ROS", "Robotic Arm (Hardware)"]
    },


    { 
      id: 20, 
      title: "Hybrid Gesture Control: IMU & Vision Integration", 
      category: "Wearable Tech", 
      tag: "Sensor Fusion", 
      img: p20_img1, 
      images: [p20_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/S3SXXUCHBi0",
          title: "Real-time Hybrid Control", 
          type: "Hardware & Sim", 
          desc: "Controlling a virtual and physical hand using IMU for forearm rotation and Vision for finger tracking." 
        }
      ],
      detailedDesc: [
        "Developed a hybrid control system combining IMU sensors and Computer Vision for high-fidelity hand and arm tracking.",
        "Integrated an MPU6050/BNO055 IMU sensor to track forearm twist (roll/pitch/yaw) and orientation using Madgwick/Kalman filters.",
        "Utilized MediaPipe/OpenCV to track individual finger movements and joint flexions in real-time.",
        "Synchronized the physical sensor data with a 3D digital twin in simulation (PyBullet/Isaac Sim) for low-latency mirroring.",
        "Implemented a communication bridge (Serial/WiFi) to transmit sensor data from hardware to the simulation environment.",
        "Contribution: Developed the sensor fusion algorithm, calibrated the IMU for drift compensation, and mapped hybrid data to a robotic hand model."
      ],
      techStack: ["MPU6050/BNO055", "Arduino/ESP32", "Python", "MediaPipe", "PyBullet", "Sensor Fusion"]
    },



      { 
        id: 19, 
        title: "AI Gesture Control & Finger Movement Recognition", 
        category: "Computer Vision", 
        tag: "Human-Computer Interaction", 
        img: p19_img1, 
        images: [p19_img1],
        videoData: [
          { 
            url: "https://www.youtube.com/embed/cpDpGdSvcbQ", 
            title: "Hand Gesture Recognition Demo", 
            type: "Computer Vision", 
            desc: "Real-time finger movement tracking and gesture recognition using MediaPipe and OpenCV." 
          }
        ],
        detailedDesc: [
          "Developed an AI-driven system to recognize and track human hand gestures and individual finger movements in real-time.",
          "Integrated MediaPipe Hand Landmarker to detect 21 unique 3D hand landmarks for high-precision tracking.",
          "Implemented custom logic to translate specific finger orientations and gestures into system commands (e.g., volume control, mouse navigation).",
          "Optimized the processing pipeline using OpenCV to ensure low-latency performance on standard webcams.",
          "Contribution: Developed the gesture classification algorithm, optimized real-time video processing, and mapped landmarks to functional commands.",
          "Use Case: Applicable in touchless interfaces, sign language translation, and virtual reality (VR) controls."
        ],
        techStack: ["Python", "OpenCV", "MediaPipe", "NumPy", "Human-Computer Interaction (HCI)"]
      },

    { 
      id: 18, 
      title: "Bipedal Robot Walking Simulation & Control", 
      category: "Robotics", 
      tag: "Legged Locomotion", 
      img: p18_img1, 
      images: [p18_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/fFPTa2rVziM",
          title: "Bipedal Locomotion Demo", 
          type: "Simulation", 
          desc: "Bipedal walking gait execution in PyBullet environment using advanced control algorithms." 
        },

        { 
          url: "https://www.youtube.com/embed/a9nJAC-Pd8g",
          title: "Bipedal Walking Demo", 
          type: "Simulation", 
          desc: "Bipedal walking gait execution in PyBullet environment using advanced control algorithms." 
        }
      ],
      detailedDesc: [
        "Developed a high-fidelity simulation of a Bipedal Robot in PyBullet to achieve stable and human-like walking gaits.",
        "Implemented Model Predictive Control (MPC) to predict future states and optimize ground reaction forces for balance.",
        "Designed a custom Gait Generator to manage the swing and stance phases of the legs, ensuring rhythmic and stable locomotion.",
        "Utilized PID Controllers for precise joint-level position and torque control, compensating for dynamic disturbances.",
        "Integrated Inverse Kinematics (IK) to calculate required joint angles based on the desired center of mass (CoM) trajectory.",
        "Contribution: Developed the full control pipeline, tuned gait parameters for stability, and performed physics-based validation in PyBullet."
      ],
      techStack: ["PyBullet", "Python", "MPC", "PID Control", "Inverse Kinematics", "Gait Generation"]
    },

       { 
      id: 17, 
      title: "Robotic Arm Pick and Place Simulation", 
      category: "Robotics", 
      tag: "Manipulation & Control", 
      img: p17_img1,
      images: [p17_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/wZVnouL3a3U", 
          title: "Pick and Place Demo", 
          type: "Simulation", 
          desc: "End-to-end pick and place task execution in PyBullet using a multi-DOF robotic arm." 
        },
        { 
          url: "https://www.youtube.com/embed/M6f9EsrdS_4", 
          title: "Pick and Place Demo", 
          type: "Simulation", 
          desc: "End-to-end pick and place task execution in PyBullet using a multi-DOF robotic arm." 
        },
      ],
      detailedDesc: [
        "Developed a high-fidelity simulation of a multi-degree-of-freedom (DOF) robotic arm to perform autonomous pick and place operations.",
        "Implemented Inverse Kinematics (IK) to accurately calculate joint angles for reaching target coordinates in 3D space.",
        "Designed a robust trajectory planning algorithm to ensure smooth and collision-free movement between the home, pick, and place positions.",
        "Integrated gripper control logic for secure object manipulation, including force sensing and contact dynamics simulation.",
        "Conducted performance analysis within the PyBullet physics engine to optimize cycle time and positional accuracy.",
        "Contribution: Developed the motion control scripts, configured the URDF model of the arm, and implemented the coordinate-based task logic."
      ],
      techStack: ["PyBullet", "Python", "Inverse Kinematics", "Trajectory Planning", "URDF Modeling", "Motion Control"]
    },

    { 
      id: 24, 
      title: "PyBullet Sim-to-Real: Robotic Arm Deployment", 
      category: "Robotics R&D", 
      tag: "Sim-to-Real", 
      img: p24_img1, 
      images: [p24_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/-0cYiFXGzWA", 
          title: "PyBullet Sim-to-Real Pipeline", 
          type: "Research & Development", 
          desc: "Synchronizing a PyBullet simulated robotic arm with real-world hardware using ROS 2 and PySerial." 
        },
         { 
          url: "https://www.youtube.com/embed/9oYOzs6hHoI", 
          title: "PyBullet Sim-to-Real Pipeline", 
          type: "Research & Development", 
          desc: "Synchronizing a PyBullet simulated robotic arm with real-world hardware using ROS 2 and PySerial." 
        }
      ],
      detailedDesc: [
        "Architected a complete Sim-to-Real pipeline, ensuring seamless transfer of control policies from PyBullet physics engine to physical robotic hardware.",
        "Developed a digital twin synchronization system where the physical arm mirrors the simulated model's joint states with minimal latency.",
        "Integrated Domain Randomization techniques in PyBullet to make the control algorithms robust against real-world friction and motor torque variations.",
        "Implemented a Python-based middleware using PySerial and ROS 2 to translate simulated joint trajectories into real-time motor commands.",
        "Executed rigorous validation by comparing real-world end-effector trajectories against simulated ground truth data for sub-millimeter precision.",
        "Contribution: Designed the communication bridge, handled coordinate frame transformations (TF), and tuned PID gains to match physical hardware dynamics."
      ],
      techStack: ["PyBullet", "Python", "ROS 2 Humble", "Serial Communication", "Digital Twin", "PID Tuning"]
    },

    { 
      id: 16, 
      title: "Scratch-Built Autonomous AMR: 3D Mapping", 
      category: "Robotics", 
      tag: "Full-Stack Robotics", 
      img: p16_img1, 
      images: [p16_img1, p16_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/VtB6pR2EQ9o", 
          title: "Isaac Sim 3D Mapping", 
          type: "Simulation", 
          desc: "Full system testing in Isaac Sim showing 3D point-cloud generation and 2D occupancy grid mapping." 
        },
        { 
          url: "https://www.youtube.com/embed/I2cqL9m8MpA", 
          title: "RTAB-Map SLAM Demo", 
          type: "SLAM Stack", 
          desc: "Real-time 3D SLAM using RTAB-Map with 3D LiDAR for loop closure and localization." 
        },
        { 
          url: "https://www.youtube.com/embed/nhs-GGnqtOg", 
          title: "Solidwork to Isaac Sim Demo", 
          type: "Designing", 
          desc: "Designing and simulation." 
        }
      ],
      detailedDesc: [
        "End-to-end development of a Differential Drive AMR, designed from scratch starting from conceptual sketches to a complete 3D CAD model in SolidWorks.",
        "Integrated a 3D LiDAR sensor to perform Simultaneous Localization and Mapping (SLAM), generating both high-fidelity 3D Point-Cloud maps and 2D Occupancy Grids.",
        "Leveraged RTAB-Map (Real-Time Appearance-Based Mapping) for robust 3D mapping, enabling the robot to handle large-scale environments with precise loop closure.",
        "Engineered the robot's physical architecture in SolidWorks, ensuring optimal weight distribution and sensor placement for stable differential drive kinematics.",
        "Conducted extensive simulation and stress testing within NVIDIA Isaac Sim to validate the URDF model, sensor fusion logic, and navigation algorithms before deployment.",
        "Contribution: Managed the entire lifecycle—Mechanical Design (SolidWorks), Simulation (Isaac Sim), and Software Stack (ROS 2, RTAB-Map, Nav2)."
      ],
      techStack: ["SolidWorks", "NVIDIA Isaac Sim", "ROS 2 Humble", "RTAB-Map", "3D LiDAR", "Differential Drive", "URDF Modeling"]
    },

      
    { 
      id: 15, 
      title: "3D Navigation for Ackermann Mobile Robot", 
      category: "Robotics", 
      tag: "Isaac Sim & ROS 2", 
      img: p15_img1, 
      images: [p15_img1, p15_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/ta2KY15Wa2E",
          title: "Isaac Sim 3D Simulation", 
          type: "Simulation", 
          desc: "Simulating an Ackermann steering robot in a 3D environment using Isaac Sim with Depth Camera and LiDAR." 
        },
        // { 
        //   url: "https://www.youtube.com/embed/lsNRD4dlSf4", 
        //   title: "RTAB-Map & Nav2 Stack", 
        //   type: "ROS 2 Stack", 
        //   desc: "Real-time 3D SLAM using RTAB-Map and path tracking with Regulated Pure Pursuit Controller." 
        // }
      ],
      detailedDesc: [
        "Developed a robust 3D navigation pipeline for an Ackermann-steering mobile robot within the NVIDIA Isaac Sim environment.",
        "Integrated a 3D Depth Camera and 2D LiDAR for multi-sensor data fusion, enabling high-fidelity 3D environment mapping.",
        "Utilized RTAB-Map (Real-Time Appearance-Based Mapping) for 3D SLAM, providing accurate localization and loop closure detection.",
        "Implemented the Regulated Pure Pursuit Controller (RPPC) within the Nav2 framework to handle the unique steering constraints of the Ackermann kinematics.",
        "Visualized real-time PointCloud data, 3D costmaps, and path trajectories using Rviz2 for system monitoring and debugging.",
        "Contribution: Configured sensor fusion logic, tuned RPPC parameters for smooth steering, and integrated RTAB-Map with the ROS 2 Navigation stack."
      ],
      techStack: ["NVIDIA Isaac Sim", "ROS 2 Humble", "Nav2", "RTAB-Map", "3D Depth Camera", "2D LiDAR", "Ackermann Steering"]
    },
    { 
      id: 14, 
      title: "2D Navigation for Autonomous Mobile Robot", 
      category: "Robotics", 
      tag: "Isaac Sim & ROS 2", 
      img: p14_img1, 
      images: [p14_img1],
      videoData: [
        // { 
        //   url: "https://www.youtube.com/embed/pNOSRNXqBpU", 
        //   title: "Isaac Sim Simulation Demo", 
        //   type: "Simulation", 
        //   desc: "Simulating a mobile robot in a photorealistic environment using NVIDIA Isaac Sim with LiDAR integration." 
        // },
        { 
          url: "https://www.youtube.com/embed/6U82FyS4Jc4",
          title: "Nav2 & Rviz2 Visualization", 
          type: "ROS 2 Stack", 
          desc: "Real-time path planning and costmap generation visualized in Rviz2 using the Nav2 framework." 
        }
      ],
      detailedDesc: [
        "Developed a comprehensive 2D navigation stack for an Autonomous Mobile Robot (AMR) within the NVIDIA Isaac Sim environment.",
        "Integrated a 2D LiDAR sensor for accurate SLAM (Simultaneous Localization and Mapping) to generate high-resolution occupancy grid maps.",
        "Implemented the ROS 2 Navigation Stack (Nav2) to handle global and local path planning, obstacle avoidance, and recovery behaviors.",
        "Utilized Rviz2 for real-time visualization of the robot's sensor data, transform tree (TF), and planned trajectories.",
        "Contribution: Configured the Isaac Sim-to-ROS 2 bridge, tuned Nav2 controller and planner parameters, and optimized LiDAR-based localization accuracy.",
        "Highlights: Seamless integration of photorealistic simulation with production-grade ROS 2 communication protocols."
      ],
      techStack: ["NVIDIA Isaac Sim", "ROS 2 Humble", "Nav2", "Rviz2", "2D LiDAR", "Python", "C++"]
    },
    { 
      id: 13, 
      title: "Home Automation System", 
      category: "IoT", 
      tag: "Smart Home & IoT", 
      img: p13_img1,
      images: [p13_img1, p13_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/MOgD9fDkweE", 
          title: "Full System Demo", 
          type: "IoT Control", 
          desc: "Developed an IoT-based system to control home appliances remotely, including IR remote control and fan speed regulation."
        },
        { 
          url: "https://www.youtube.com/embed/lsNRD4dlSf4", 
          title: "System Explanation", 
          type: "Automation Logic", 
          desc: "Explaining the remote control of lights, fans, and appliances via mobile app and touch sensors."
        },
        { 
          url: "https://www.youtube.com/embed/fYRX1bTbIYI", 
          title: "Speed Regulation", 
          type: "Hardware", 
          desc: "Fan Regulator: High-level implementation to adjust fan speed remotely using the IoT platform."
        },
        { 
          url: "https://www.youtube.com/embed/R0-T2Mnm6QY", 
          title: "IR Signal Control", 
          type: "IR Integration", 
          desc: "IR Control: Manage appliances like TV, AC, and Fans using IR signal replication via Arduino/ESP."
        }
      ],
        detailedDesc: [
          "Developed an IoT-based system to control home appliances remotely, including IR remote control and fan speed regulation.",
          "Enabled smart control of lights, fans, and other electronic appliances through a mobile application and touch interface.",
          "Implemented IR signal management to control legacy devices like TVs and ACs.",
          "Integrated a digital fan regulator for precise remote speed adjustment.",
          "Integrated voice control capabilities via Google Assistant for hands-free operation.",
          "Contribution: Developed core control logic for IR and fan regulation; Integrated hardware components and configured the cloud IoT platform."
        ],
        techStack: ["IoT", "Arduino/ESP32", "C++", "Blynk/Firebase", "IR Communication"] 
      },

      { 
        id: 12, 
        title: "Plant Monitoring System", 
        category: "IoT", 
        tag: "Smart Agriculture", 
        img: p12_img1,
        images: [p12_img1, p12_img2],
        videoData: [
          { 
            url: "https://www.youtube.com/embed/kEsNyaW5X4Q", 
            title: "Project Demonstration", 
            type: "Hardware Demo", 
            desc: "Live demonstration of soil moisture sensing and real-time data transmission to the cloud." 
          }
        ],
        detailedDesc: [
          "Designed a system to monitor soil moisture and environmental conditions for healthy plant growth.",
          "Real-time monitoring of soil moisture, temperature, and humidity using high-precision sensors.",
          "Automated alerts system for low moisture levels or adverse environmental conditions.",
          "Cloud-based remote data access via a customized web or mobile interface for 24/7 monitoring.",
          "Contribution: Developed sensor integration logic, implemented data logging, and configured WiFi communication protocols for seamless remote monitoring."
        ],
        techStack: ["IoT", "C++", "Python", "ESP8266", "Blynk", "Sensors (Soil, DHT11)"]
      },

      { 
        id: 11, 
        title: "Multi-Control Emergency Light & Location Tracking System", 
        category: "Safety & IoT", 
        img: p11_img1,
        images: [p11_img1, p11_img2],
        videoData: [
          { 
            url: "https://www.youtube.com/embed/uS0qQhdwVUM", 
            title: "Emergency System Demo", 
            type: "Hardware Integration", 
            desc: "An intelligent emergency light system featuring multi-control switches and integrated GPS/GSM for real-time location tracking during emergencies." 
          }
        ],
        detailedDesc: [
          "Designed an advanced emergency lighting system that can be controlled via multiple inputs for enhanced reliability in critical situations.",
          "Integrated a GPS module to provide high-precision real-time location tracking for emergency responders.",
          "Implemented remote communication using GSM technology to send automated emergency alerts and coordinates to pre-configured mobile numbers.",
          "Developed an intelligent switching logic to ensure the emergency light activates instantly during power failures or triggered events.",
          "Contribution: Designed the full circuit architecture, developed the location-sharing firmware, and integrated GSM/GPS protocols for seamless remote communication."
        ],
        techStack: ["Arduino/ESP32", "C++", "GPS Module (NEO-6M)", "GSM Module (SIM800L)", "IoT Sensors"] 
      },

    { 
      id: 2, 
      title: "LiDAR Data Acquisition & Storage System", 
      category: "Embedded Systems", 
      tag: "Hardware & Data Logging", 
      img: p2_img1,
      images: [p2_img1, p2_img2],
     
      videoData: [], 
      detailedDesc: [
        "Objective: Collect and store LiDAR data for applications like navigation and object detection.",
        "Implemented real-time LiDAR data collection for spatial analysis and environmental mapping.",
        "Integrated an SD Card Module to store large datasets for offline processing and analysis.",
        "Utilized the SPI Protocol for high-speed communication between the microcontroller and the storage module.",
        "Contribution: Managed system implementation, end-to-end coding, hardware integration, and data storage management."
      ],
      techStack: ["Arduino Nano", "C++", "SPI Protocol", "SD Card Module", "LiDAR Sensor"] 
    },

    { 
      id: 3, 
      title: "Obstacle Avoiding Robot", 
      category: "Robotics", 
      tag: "Automation & Sensors", 
      img: p3_img1,
      images: [p3_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/pNOSRNXqBpU", 
          title: "Hardware Demonstration", 
          type: "Arduino Control", 
          desc: "Developed a robot that autonomously detects and avoids obstacles using ultrasonic sensors and real-time logic." 
        },
        { 
          url: "https://www.youtube.com/embed/Cud4aSgYm2w", 
          title: "Navigation Test", 
          type: "Sensor Feedback", 
          desc: "Autonomous navigation testing with continuous sensor feedback for path clearing." 
        }
      ],
      detailedDesc: [
        "Developed an autonomous robot capable of detecting and avoiding obstacles in its path without human intervention.",
        "Integrated Ultrasonic Sensors (HC-SR04) to measure distances and identify barriers in real-time.",
        "Implemented smart navigation logic for smooth motor control and rapid direction changes upon obstacle detection.",
        "Optimized power management for consistent motor torque and sensor accuracy during operation.",
        "Contribution: Designed the circuit architecture, implemented the obstacle avoidance algorithm in C++, and integrated the motor driver with the sensor system."
      ],
      techStack: ["Arduino", "C++", "Ultrasonic Sensor", "L298N Motor Driver", "Embedded Systems"] 
    },
    { 
      id: 4, 
      title: "Line Follower Robot (L.F.R)", 
      category: "Robotics", 
      tag: "Automation & Control", 
      img: p3_img1,
      images: [p3_img1],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/b1flnCoKTQk", 
          title: "Path Tracking Demo", 
          type: "Hardware", 
          desc: "Developed a robot that follows a predefined path using high-sensitivity line-detection sensors." 
        },
        { 
          url: "https://www.youtube.com/embed/VHGuBMu89j4", 
          title: "Navigation Efficiency", 
          type: "Algorithm", 
          desc: "Smooth motor control implementation for accurate movement on complex tracks." 
        },
        { 
          url: "https://www.youtube.com/embed/skv1aRM_3tk", 
          title: "Sensor Calibration", 
          type: "Embedded", 
          desc: "Precise sensor-based path detection for sharp turns and high-speed stability." 
        },
        { 
          url: "https://www.youtube.com/embed/RN_vK3V2ZpM", 
          title: "Circuit & Logic Overview", 
          type: "Full Build", 
          desc: "Autonomous navigation logic showing hardware connections and sensor-motor synchronization." 
        }
      ],
      detailedDesc: [
        "Developed an autonomous robot designed to track and follow a predefined black or white path using IR reflective sensors.",
        "Implemented real-time sensor processing to distinguish between the path and the background.",
        "Developed a customized motor control algorithm to ensure smooth movement during sharp turns and path corrections.",
        "Optimized hardware architecture for consistent power distribution between the microcontroller and DC motors.",
        "Contribution: Designed the control logic, integrated IR sensor arrays, and handled full hardware assembly and debugging."
      ],
      techStack: ["Arduino", "C++", "IR Sensors", "L298N Motor Driver", "Embedded Systems"] 
    },
    
    { 
      id: 5, 
      title: "WiFi-Controlled Car", 
      category: "IoT & Robotics", 
      tag: "Wireless Control", 
      img: p5_img1,
      images: [p5_img1, p5_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/3WBhPUdofrI", 
          title: "WiFi Car Demonstration", 
          type: "IoT Control", 
          desc: "Remote control operation through a mobile application and web interface using WiFi protocols." 
        }
      ],
      detailedDesc: [
        "Designed and built a robotic car controlled remotely via WiFi for real-time navigation and maneuverability.",
        "Developed a mobile-responsive web interface and integrated app-based controls for seamless operation.",
        "Implemented low-latency wireless communication over a local WiFi network to ensure real-time response.",
        "Integrated motor drivers with an ESP micro-controller to manage speed and direction wirelessly.",
        "Contribution: Developed the backend control logic, designed the web interface, and performed hardware-software integration for stable connectivity."
      ],
      techStack: ["ESP8266/ESP32", "C++", "HTML/CSS (Web Interface)", "Blynk IoT", "L298N Motor Driver"]
    },

    { 
      id: 6, 
      title: "Smart Vehicle Speed & Distance Monitoring System", 
      category: "Embedded Systems", 
      tag: "Automotive IoT", 
      img: p6_img1,
      images: [p6_img1, p6_img2, p6_img3],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/BcDu86giw_4", 
          title: "Real-time Monitoring Demo", 
          type: "Hardware Integration", 
          desc: "Live monitoring of vehicle speed and distance with accurate data acquisition and OLED/Serial display." 
        },
        { 
          url: "https://www.youtube.com/embed/WHNZQjjnDgo", 
          title: "Collision Avoidance Logic", 
          type: "Radar Sensing", 
          desc: "Demonstrating accurate radar-based distance measurement for proactive collision avoidance." 
        }
      ],
      detailedDesc: [
        "Developed an advanced monitoring system for vehicles to track real-time speed and safe distance from obstacles.",
        "Integrated a K2 Pico Radar for high-precision distance measurement and object detection.",
        "Utilized a GPS Module for accurate speed tracking and location data acquisition.",
        "Implemented wireless data transmission via HC-05 Bluetooth for remote monitoring on mobile devices.",
        "Contribution: Managed end-to-end system design, sensor fusion coding, and hardware-software debugging to ensure data accuracy.",
        "Components Used: GPS Module, K2 Pico Radar, HC-05 Bluetooth, and Microcontroller."
      ],
      techStack: ["C++", "Embedded C", "GPS Protocol", "Radar Interfacing", "Bluetooth (HC-05)"] 
    },

  
    { 
      id: 7, 
      title: "Dual-Battery Intelligent Power Management System", 
      category: "Power Electronics", 
      tag: "Smart Energy", 
      img: p7_img1,
      images: [p7_img1, p7_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/680hg4BAWEE", 
          title: "Intelligent Switching Demo", 
          type: "Automation", 
          desc: "Demonstrating automatic seamless switching between two battery sources to maintain constant power supply." 
        }
      ],
      detailedDesc: [
        "Designed an intelligent system to manage dual battery sources with automatic switching logic to prevent power interruption.",
        "Implemented real-time voltage monitoring to trigger switching when the primary battery falls below a safe threshold.",
        "Focused on efficient load balancing and power management to significantly extend the overall battery lifecycle.",
        "Integrated safety features to prevent deep discharge and enhance the longevity of both power units.",
        "Contribution: Developed the switching algorithm, designed the sensing circuit, and integrated the relay/MOSFET control system."
      ],
      techStack: ["Embedded C", "Arduino/ATmega", "Voltage Sensing", "Relay/MOSFET Logic", "Power Electronics"] 
    },


    { 
      id: 8, 
      title: "Advanced Breath Analyzer System", 
      category: "Safety Systems", 
      tag: "Embedded AI", 
      img: p8_img1,
      images: [p8_img1, p8_img2, p8_img3],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/BcDu86giw_4", 
          title: "System Calibration & Testing", 
          type: "Precision Sensing", 
          desc: "Accurately detecting alcohol concentration levels using professional-grade fuel cell sensors and calibration algorithms." 
        }
      ],
      detailedDesc: [
        "Developed a high-precision breath analyzer system designed for aviation and industrial safety protocols.",
        "Integrated a Fuel Cell Alcohol Sensor for superior accuracy and an HX10B Air Pressure Sensor to ensure a consistent breath sample.",
        "Utilized a Pi Camera for user identification and record-keeping during the testing process.",
        "Implemented signal conditioning using an Instrumentation Amplifier to filter noise and enhance sensor reliability.",
        "Contribution: Designed the multi-sensor data fusion logic, integrated the Pi Camera for visual verification, and developed the alcohol level calculation algorithm."
      ],
      techStack: ["Raspberry Pi", "Python", "OpenCV", "Fuel Cell Technology", "Signal Conditioning"] 
    },


    { 
      id: 9, 
      title: "Smart Toll Tax System", 
      category: "IoT", 
      tag: "Automated Systems", 
      img: p9_img1,
      images: [p9_img1, p9_img2],
      videoData: [
        { 
          url: "https://www.youtube.com/embed/l_SCNzqAhBg", 
          title: "Automated Toll Collection Demo", 
          type: "Raspberry Pi Project", 
          desc: "Developed an automated toll collection system using Raspberry Pi and Python to streamline toll payments with a QR code scanner for vehicle identification." 
        }
      ],
      detailedDesc: [
        "Developed a smart toll collection solution to eliminate manual queues and automate vehicle processing.",
        "Implemented QR Code Scanning logic for instant vehicle identification and linking with digital user accounts.",
        "Integrated a Contactless Payment gateway for automatic toll deduction from registered digital wallets.",
        "Enabled Real-time Data Logging to maintain precise records of vehicle timestamps and transaction history for administrative monitoring.",
        "Contribution: Designed the system architecture, developed the Python-based QR processing script, and integrated the gate automation hardware with Raspberry Pi."
      ],
      techStack: ["Raspberry Pi", "Python", "OpenCV", "SQLite (Database)", "QR Code Integration"] 
    },
  ]
};
