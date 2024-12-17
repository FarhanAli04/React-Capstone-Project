import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
    </div>
  );
}

export default App;
