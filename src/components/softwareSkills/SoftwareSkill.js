import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiPytorch, SiMysql, SiTensorflow, SiDocker} from "react-icons/si";
import {BsGit} from "react-icons/bs";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.tags}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
