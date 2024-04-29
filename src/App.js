import './styles/index.css'
import Navbar from './components/Navbar';
import Typing_text from './components/Typing_text';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Typing_text />
      <Slider />
    </div>
  );
}

export default App;
