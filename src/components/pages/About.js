import Header from '../Header';
import React, { useState } from 'react';
import Footer from '../Footer';

const About = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="font-spartan">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div
        className={
          navbarOpen
            ? 'hidden'
            : 'fixed right-0 m-5 p-2 mt-9 text-2xl text-white'
        }
      ></div>
      <div className={navbarOpen ? ' h-screen z-20 opacity-20' : ''}>
        <img
          src="./room-homepage/images/shop/greencouch.jpg"
          alt="leather couch"
          className="md:h-64 md:w-full md:object-cover"
        ></img>
        <div className="flex flex-col justify-center items-center m-6 h-full">
          <h2 className="text-2xl font-bold mt-4">About Us</h2>
          <p className="text-md my-8 mx-4 md:mx-32 md:max-w-2xl">
            A family business 50+ years in the making with over 30+ furniture
            showrooms, we are a contemporary home furnishings destination rooted
            in our love for modern design and quality craftsmanship. Through
            each item hand-selected by our team, we strive to blend the timeless
            tradition of modern design with your individual style. Our product
            is made to complement the art of living well – because modern design
            is a way of living, not just a design style.
          </p>
          <img
            className="rounded-md"
            src="./room-homepage/images/about/shopmain.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center m-6 h-full">
          <h3 className="text-2xl font-bold mt-4">Contact Us</h3>
          <p className="text-md my-8 mx-4 md:mx-32 md:max-w-2xl">
            Wanting to see our showroom? Give us a call to schedule an
            appointment and see all we have to offer. We have specialists ready
            to show you different pieces or set up a room just for you.
          </p>
          <ul className="flex flex-col justify-center items-center ">
            <li>Call us at: 555-543-3251</li>
            <li className="p-4">Follow us on Instagram</li>
            <li>Come to our showroom!</li>
          </ul>
          <img
            className="max-w-xs md:max-w-2xl mt-12 rounded-md"
            src="./room-homepage/images/about/chairpillow.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default About;
