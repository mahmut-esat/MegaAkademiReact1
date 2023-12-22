import "./App.css";
import Button from "./components/Buttons";
import Header from "./components/Header";
import News from "./components/News";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="">
      <div>
        <Header />
      </div>
      <div>
        <Button />
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-4">
            <Skills skill="React" />
            <Skills skill="React Native " />
            <Skills skill="HTML" />
            <Skills skill="CSS" />
            <Skills skill="Bootstrap" />
          </div>
          <div className="col-sm-8">
            <News />
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </main>
  );
}
