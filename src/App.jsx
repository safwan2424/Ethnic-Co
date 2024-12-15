// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Banner from "./components/Banner";
// import Subscribe from "./components/Subscribe";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import Popup from "./components/Popup";

// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Hero handleOrderPopup={handleOrderPopup} />
//       <Products />
     
//       <Banner />
//       <Subscribe />
//       <Products />
//       <Testimonials />
//       <Footer />
//       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import CardCollection from './components/CardCollection';
import Testimonials from './components/Testimonials';
import MovingSlogan from './components/MovingSlogan';
import Achievements from './components/Achievements';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Slider />
        <MovingSlogan/>
        <CardCollection/>
        <Testimonials/>
        <Achievements/>
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
