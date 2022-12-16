import Footer from './components/Footer';
import Hero from './components/Hero'
import Project from './components/Project';
import Skills from './components/Skills';
import Stack from './components/Stack';

function App() {
  return (
    <section className='bg-black text-white font-[ReadexPro]'>
      <div className="w-[50vw] mx-auto ">
        <Hero/>
        <Skills/>
        <Stack/>
        <Project/>
        <Footer/>
      </div>
      
    </section>
  );
}

export default App;
