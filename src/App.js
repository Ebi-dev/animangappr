import style from "./App.module.css";
import { Home } from "./components/home/Home";

function App() {
  return (
    <div className={style.App}>
      <Home/>
    </div>
  );
}

export default App;
