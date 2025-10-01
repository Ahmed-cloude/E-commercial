import './App.css';
import NavBar from './components/Navbar/NavBar';
import Lyout from './components/Lyout/Lyout';
import Content from './components/Contant/Content';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ListView from './components/Log/listView/list'
import { Provider } from 'react-redux';
import { Store } from './store';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <NavBar />
        <Lyout />
        <Content />
        <Contact />
        <Footer /> */}
        <ListView />
      </div>
    </Provider>
  );
}

export default App;
