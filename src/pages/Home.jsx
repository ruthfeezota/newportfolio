import React, {useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";

const Home = () => {
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);
  return (


    <main>
    <title>Ruth Zota Custom Website Portifolio | Award-Winning Austin Web Designer</title>
    <meta
        name="description"
        content="Austin-based web designer with a passion for creating beautiful and functional websites. I specialize in custom & 3D web design. Let's connect and discuss your project!"
    />
    <meta
        name="keywords"
        content="Custom Web Design Austin, 3D Websites, Stunning Websites 3D Web Design & Development, Austin TX, UI/UX Design & Web Development  Freelance  Austin, TX, E-commerce Websites  Web Design & Development  Austin, TX, Austin Web Designer  Custom Websites, Best Web Designers in Austin  3D & Interactive Websites, Freelance Web Design Services  Austin, Award-Winning Austin Web Designer, 3D Web Design Austin Creative & Unique, Custom Websites  Austin, SEO Focused"
    />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </main>
  );
}

export default Home;
