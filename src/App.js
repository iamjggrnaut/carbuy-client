import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './containers/About';
import Advantages from './containers/Advantages';
import Contact from './containers/Contact';
import FAQ from './containers/FAQ';
import Flow from './containers/Flow';
import Hero from './containers/Hero';
import Map from './containers/Map';
import ResultsAndRequirements from './containers/ResultsAndRequirements';
import Types from './containers/Types';
import WhyUsAndPrice from './containers/WhyUsAndPrice';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Flow />
      <Advantages />
      <Types />
      <About />
      <ResultsAndRequirements />
      <WhyUsAndPrice />
      <FAQ />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
