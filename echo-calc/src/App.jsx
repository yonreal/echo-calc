import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Character({ name }) {
  return (
    <div>
      <h2>{name} 페이지</h2>
      <p>{name}의 데미지를 계산할 수 있습니다.</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Echo Calc에 오신 걸 환영합니다!</h1>
      <nav>
        <ul>
          <li><Link to="/echo-calc/장리">장리</Link></li>
          <li><Link to="/echo-calc/카를로타">카를로타</Link></li>
          <li><Link to="/echo-calc/금희">금희</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router basename="/echo-calc">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/장리" element={<Character name="장리" />} />
        <Route path="/카를로타" element={<Character name="카를로타" />} />
        <Route path="/금희" element={<Character name="금희" />} />
      </Routes>
    </Router>
  );
}

export default App;