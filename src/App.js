import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Books from './Pages/Books';
import Categories from './Pages/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
