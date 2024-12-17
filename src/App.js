import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import Banner from './components/HeroSection/Banner';

function App() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <Banner/>
    </div>
  );
}

export default App;
