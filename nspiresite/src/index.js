import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroSection from './components/heroSection.js'
import MainContent from './components/maincontent.js'
import Footer from './components/footer.js'
function Home (){
  return (
    <div>
      <HeroSection />
      <MainContent />
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'));
