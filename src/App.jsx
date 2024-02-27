import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import LocalCards from "./screens/localCards/LocalCards";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/local" element={<LocalCards />} />
      </Routes>
    </>
  );
}

export default App;
