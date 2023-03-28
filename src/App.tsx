import { About } from "@containers/About";
import { Works } from "@containers/Works";
import { Home } from "@containers/Home";
import { Nav } from "@components/Nav";
import '@styles/App.scss';

export const App: React.FC = () => {
  return(
    <div className="app">
      <Nav />
      <Home />
      <About />
      <Works />
    </div>
  );
};