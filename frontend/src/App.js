// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {HomePage, StatesChartPage, BarChartsPage, LineChartPage} from './Pages'
import TablePage from './components/BootTable'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/table" element={<TablePage/>}/>
          <Route path="/states" element={<StatesChartPage/>}/>
          <Route path="/bars" element={<BarChartsPage/>}/>
          <Route path="/line" element={<LineChartPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
