import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carasoul from './components/Carasoul'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carasoul />
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
