import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Chatbot from './ChatbotComponent';

function Home(props) {
  console.log("somedataa", props.isModalOpen)
  return (
    <>
      <HeroSection />
      <Cards />
      {props && props.isModalOpen &&
        <Chatbot />
      }
      <Footer />
    </>
  );
}

export default Home;
