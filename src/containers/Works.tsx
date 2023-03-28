import { BsGithub } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import movie from "@assets/movie.png";
import store from "@assets/store.png";
import blog from "@assets/blog.png";
import "@styles/Works.scss";

export const Works: React.FC = () => {
  return (
    <section className="works__container" id="works">
      <h1 className="works__h1">
        My <span className="works__span">Projects</span>
      </h1>
      <div className="works__layout">
        <div className="works__project">
          <img className="works__img" src={movie} alt="movie" />
          <div className="works__container__link">
            <a
              className="works__a"
              target="_blank"
              href="https://my-app-movies-dv.netlify.app"
            >
              <BsLink />
            </a>
            <a
              className="works__a"
              target="_blank"
              href="https://github.com/Velasco1704/tmdb-ts-app"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="works__project">
          <img className="works__img" src={store} alt="store" />
          <div className="works__container__link">
            <a
              className="works__a"
              target="_blank"
              href="https://mi-store-online.netlify.app"
            >
              <BsLink />
            </a>
            <a
              className="works__a"
              target="_blank"
              href="https://github.com/Velasco1704/ecommerce-ts"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="works__project">
          <img className="works__img" src={blog} alt="blog" />
          <div className="works__container__link">
            <a
              className="works__a"
              target="_blank"
              href="https://mi-blog-dv.netlify.app"
            >
              <BsLink />
            </a>
            <a
              className="works__a"
              target="_blank"
              href="https://github.com/Velasco1704/-mi-blog-firebase-redux-ts-"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
