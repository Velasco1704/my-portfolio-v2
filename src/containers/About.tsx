import { TfiHtml5, TfiCss3 } from "react-icons/tfi";
import { FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import "@styles/About.scss";

export const About: React.FC = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__info">
        <h1 className="about__h1">
          About <span className="about__span">ME!</span>
        </h1>
        <p className="about__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          obcaecati saepe, quam dolorem aut error, temporibus eligendi ipsam,
          excepturi consequatur non magni neque? Perferendis non soluta officiis
          suscipit fuga. Officia. Reiciendis impedit obcaecati assumenda, neque
          nisi quos laudantium exercitation.
        </p>
      </div>
      <div className="about__skills">
        <div className="about__skill skill-html">
          <TfiHtml5 />
        </div>
        <div className="about__skill skill-css">
          <TfiCss3 />
        </div>
        <div className="about__skill skill-js">
          <SiJavascript />
        </div>
        <div className="about__skill skill-ts">
          <SiTypescript />
        </div>
        <div className="about__skill skill-nodejs">
          <FaNodeJs />
        </div>
        <div className="about__skill skill-react">
          <SiReact />
        </div>
        <div className="about__skill skill-git">
          <FaGitAlt />
        </div>
        <div className="about__skill skill-tailwindcss">
          <SiTailwindcss />
        </div>
        <div className="about__skill skill-scss">
          <FaSass />
        </div>
      </div>
    </section>
  );
};
