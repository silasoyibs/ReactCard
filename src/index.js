import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Tittle />
        <Body />
        <div className="skill-list">
          {skills.map((skill) => {
            return <SkillList skillData={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}
function Image() {
  return (
    <img
      src="WhatsApp Image 2023-12-07 at 6.18.23 PM.jpeg"
      alt=""
      class="avatar"
    ></img>
  );
}
function Tittle() {
  return <h1>Jonas Schmedtmann</h1>;
}

function Body() {
  return (
    <p>
      Full-stack web developer and teacher at udemy. when not coding or
      preparing a course, i like to play board games, to cook
    </p>
  );
}

function SkillList({ skillData }) {
  return (
    <div class="skill" style={{ backgroundColor: skillData.color }}>
      {skillData.skill}
      {skillData.level === "beginner" ? "😁" : null}
      {skillData.level === "intermediate" ? "😒" : null}
      {skillData.level === "advanced" ? "😎" : null}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
