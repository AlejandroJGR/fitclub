import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Programs from './components/Programs/Programs';
import WhyUs from './components/WhyUs/WhyUs';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
