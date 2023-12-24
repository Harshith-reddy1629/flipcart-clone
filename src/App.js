import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SliderC from "./components/Slider";
import Clothing from "./components/Clothing";
import Accessories from "./components/Accessories";

function App() {
  return (
    <>
      <Header />
      <div className="body-container">
        <Categories />
        <SliderC />
        <Accessories />
        <Clothing />
      </div>
    </>
  );
}

export default App;
