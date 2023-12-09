import style from "./App.module.css";
import { Home } from "./components/home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SearchResults } from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
