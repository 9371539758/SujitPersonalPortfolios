import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import './styles/global.scss';

function App() {
  return (
    <SmoothScroll>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Hero />
        <About />
        <FeaturedWork />
        <Timeline />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
