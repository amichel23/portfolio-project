import './App.css';
import Header from './components/header';
import Body from './components/body';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
