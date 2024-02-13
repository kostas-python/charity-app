import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes path="/" exact component={home} />
        
      </Router>
    </div>
  );
}

export default App;
