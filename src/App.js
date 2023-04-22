
import './App.css';
import {Header, Footer } from './components';
import {Homepage} from "./Pages/Homepage"

function App() {
  return (
    <div className="App">
      <Header/>
        <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
