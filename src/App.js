import './App.css';
import NavBar from './components/Navbar/NavBar';
import Lyout from './components/Lyout/Lyout';
import Content from './components/Contant/Content';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Lyout />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
