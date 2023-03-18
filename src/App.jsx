import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './component/Greetings/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="greeting">Greeting</Link>
      </nav>
      <Routes>
        <Route path="greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
