import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Support from './components/support/Support';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='App'>
            <Home />
            <About />
            <Gallery/>
            <Support />
            <Footer />
        </div>
    );
}

export default App;
