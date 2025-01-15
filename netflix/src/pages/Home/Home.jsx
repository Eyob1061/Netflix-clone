import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/banner/Banner';
import Rowlist from '../../rowList/Rowlist';
const Home = () => {
  return (
    <div>
     <Header />
     <Banner />
     <Rowlist />
     <Footer />
    </div>
  );
}

export default Home;
