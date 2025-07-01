import Header from "./module/Header";
import Hero from "./module/Hero";
import Trust from "./module/Trust";
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
