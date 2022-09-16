import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Gallery from "./pages/gallery/Gallery";
import Listen from "./pages/listen/Listen";
import Contact from "./pages/contact/Contact";
import styled from 'styled-components';
import back from './assets/img/back2.jpg'
import background from './assets/img/background.jpg'
import { Modal } from "./components/modal/Modal";
import { useOpenImg } from './hooks/useOpenImg'
import NewsLetter from "./components/newsletter/Newsletter";
import News from "./components/news/News";
import Lyrics from "./pages/letras/Lyrics";



const AppContainer = styled.div`
text-align: center;
  background-image: url(${background});
background-size:cover;
@media (max-width: 768px){
  background-image: url(${back});
background-size:cover;
}`


function App() {
  //pasar el hoook al modal y a la galeria 
  const showModal = useOpenImg()


  return (
    <AppContainer>
      <Modal {...showModal} />
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery {...showModal} />} />
        <Route path="listen" element={<Listen />} />
        <Route path="lyrics" element={<Lyrics />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <NewsLetter />
      <News />

    </AppContainer>
  );
}

export default App;
