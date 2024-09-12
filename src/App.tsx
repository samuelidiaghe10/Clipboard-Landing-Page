import { Aside } from "./clipboard-landing-page-master/components/Aside";
import { Footer } from "./clipboard-landing-page-master/components/Footer";
import { Header } from "./clipboard-landing-page-master/components/Header";
import { Main } from "./clipboard-landing-page-master/components/Main";
import { Section } from "./clipboard-landing-page-master/components/Section";

function App() {
  return (
    <div className=" bg-pattern min-h-screen flex flex-col gap-40  bg-no-repeat pt-20">
      <Header />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
