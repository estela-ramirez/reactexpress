// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Table from './components/Table'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/table" element={<Table/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
