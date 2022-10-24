import './App.css';
import Home from './pages/Home';
import Standings from './pages/Standings';
import FFFFOTW from './pages/FFFFOTW';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/ffffotw" element={<FFFFOTW />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
