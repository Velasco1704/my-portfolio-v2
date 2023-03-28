import { Typewriter } from "react-simple-typewriter";
import "@styles/Home.scss";

export const Home: React.FC = () => {
  return (
    <section id="home" className="home__container">
      <div className="home__div">
        <h1 className="home__h1">
          Daniel <span className="home__span">Velasco</span>
        </h1>
        <div className="home__container__typeAnimation">
          <Typewriter
            words={["FrontEnd Developer", "Software Engineer"]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <button className="home__cv">CV</button>
      </div>
    </section>
  );
};
