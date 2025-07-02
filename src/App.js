import {Header, Hero, Trust} from "./module"
import Services from "./module/Services";
import Projects from "./module/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Projects/>
      </main>
    </>
  );
}

export default App;
