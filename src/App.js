import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Page404 from './pages/Page404';
import Header from "./components/Header.jsx";
import Post from './pages/Post';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/*Todo lo que se encuentre aqui se compartira en todo */}
        <Header></Header>
        <Routes>
          { /*Todos los componentes dentro de Routes es dinamico */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sobre" element={<Sobre></Sobre>}></Route>
          <Route path="/posts/:id" element={<Post></Post>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
