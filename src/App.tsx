import './App.css'
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import loadable from "@loadable/component";

function dynamic(impoter: () => any) {
  return loadable(impoter, {
    fallback: <div>加载中...</div>,
  });
}

const Home = dynamic(
  () => import(/* webpackChunkName: "home" */ "./pages/home")
);

const WordChain = dynamic(
  () => import(/* webpackChunkName: "home" */ "./pages/word-chain")
);

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-chain" element={<WordChain />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
