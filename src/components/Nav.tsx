import { Link } from "react-scroll";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import "@styles/Nav.scss";

export const Nav: React.FC = () => {
  return (
    <nav className="nav__container">
      <ul className="nav__ul">
        <li className="nav__li">
          <a className="nav__a linkedIn">
            <AiFillLinkedin />
          </a>
        </li>
        <li className="nav__li">
          <Link
            className="nav__a"
            to="home"
            activeClass="active"
            spy={true}
          >
            <AiFillHome />
          </Link>
        </li>
        <li className="nav__li">
          <Link
            className="nav__a"
            to="about"
            activeClass="active"
            spy={true}
          >
            <BsFillPersonFill />
          </Link>
        </li>
        <li className="nav__li">
          <Link
            className="nav__a"
            to="works"
            activeClass="active"
            spy={true}
          >
            <AiFillFolder />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
