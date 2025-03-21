import { Fragment } from 'react';

import Navbar from '../Navbar';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Service from '../Service';
import Blogs from '../Blogs';
import Footer from '../Footer';
import Contact from '../ContactUs'
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Section1 id="home" />
      <Section2 id="about" />
      <Service id="service" />
      <Blogs id="blogs" />
      <Contact id="contact" />
      <Footer />
    </Fragment>
  );
};

export default Home;
