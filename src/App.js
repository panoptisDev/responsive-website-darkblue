import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Services from './components/Services'
import Description from './components/Description'
import AboutMe from './components/AboutMe'
import Animated from './components/Animated'
import Contact from './components/Contact'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Services />
      <Description />
      <AboutMe />
      <Animated />
      <Contact />
      <Form />
      
    </div>
  );
}

export default App;
