import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "./components/breadCrumbs/BreadCrumbs";
import LocalCards from "./screens/localCards/LocalCards";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/local" element={<LocalCards />} />
      </Routes>
    </>
  );
}

export default App;
