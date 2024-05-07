import './App.css';
import React, { useState, useEffect } from 'react';
import TransformsWellness from './components/TransformsWellness';
import backtotop from './assets/images/webp/backtotop.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <TransformsWellness />
      </div>
      <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_6px_16.9px_0px_rgba(255,_255,_255,_1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-lightgreen cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[3]" : "hidden"}>
        <img src={backtotop} alt='backtotop' className='max-w-[100px]' />
      </div>
    </>
  );
}

export default App;
