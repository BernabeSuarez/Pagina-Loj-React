import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Gallery from "./pages/gallery/Gallery";
import Listen from "./pages/listen/Listen";
import Contact from "./pages/contact/Contact";
import styled from 'styled-components';

const AppContainer = styled.div`
text-align: center;`
function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="listen" element={<Listen />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
