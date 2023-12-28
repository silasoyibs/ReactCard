import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Tittle />
        <Body />
        <div className="skill-list">
          <SkillList name="Html+Css" emoji="👌" backgroundColor="red" />
          <SkillList name="Javascript" emoji="🎊" backgroundColor="blue" />
          <SkillList name="Web design" emoji="✔" backgroundColor="orange" />
          <SkillList name="Git and Github" emoji="⛔" backgroundColor="green" />
          <SkillList name="React" emoji="🍕" backgroundColor="yellow" />
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

function SkillList(props) {
  return (
    <div class="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name}
      {props.emoji}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
