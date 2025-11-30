// src/data/skills.js
//
// Daftar skill terstruktur untuk ditampilkan di About.jsx
// Kamu bebas menambah/mengedit level & kategori.

export const skills = {
  frontend: [
    { name: "HTML", level: "advanced" },
    { name: "CSS / Tailwind CSS", level: "advanced" },
    { name: "JavaScript (ES6+)", level: "advanced" },
    { name: "React.js", level: "intermediate" },
    { name: "Responsive UI", level: "advanced" },
  ],

  backend: [
    { name: "Python", level: "intermediate" },
    { name: "Php", level: "intermediate" },
    { name: "My SQL", level: "intermediate" },
    { name: "Flask (basic)", level: "beginner" },
    { name: "REST API Integration", level: "intermediate" },
  ],

  machineLearning: [
    { name: "Deep Learning", level: "intermediate" },
    { name: "Convolutional Neural Networks (CNN)", level: "intermediate" },
    { name: "TensorFlow", level: "intermediate" },
    { name: "Keras", level: "intermediate" },
    { name: "Image Classification", level: "intermediate" },
  ],

  tools: [
    { name: "Git & GitHub", level: "advanced" },
    { name: "VS Code", level: "advanced" },
    { name: "Jupyter Notebook", level: "intermediate" },
    { name: "Google Colab", level: "intermediate" },
    { name: "NPM / Node Tools", level: "intermediate" },
  ],

  design: [
    { name: "UI/UX Basics", level: "intermediate" },
    { name: "Figma", level: "intermediate" },
    { name: "Wireframing & Layouting", level: "intermediate" },
  ],

  others: [
    { name: "Problem Solving", level: "advanced" },
    { name: "Data Preprocessing", level: "intermediate" },
  ],
};

export default skills;
