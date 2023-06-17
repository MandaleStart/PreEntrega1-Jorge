{/*import { BrowserRouter, Routes, Route } from "react-router-dom"*/}
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
{/*<BrowserRouter>
  <Routes>
    <Route>
    </Route>
    <Route>
    </Route>
    <Route>
    </Route>
    <Route>
    </Route>
  </Routes>
</BrowserRouter>*/}