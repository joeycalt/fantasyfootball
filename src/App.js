import './App.css';
import Home from './pages/Home';
import Standings from './pages/Standings';
import FFFFOTW from './pages/FFFFOTW';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import New from './pages/New';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/ffffotw" element={<FFFFOTW />} />
        <Route path='/ffffotw/new' element={<New />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
