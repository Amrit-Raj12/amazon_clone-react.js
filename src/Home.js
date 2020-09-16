import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home(){
  return(
    <div className="home">
    <div className="home__container">
      <img  className="home__image"
       src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" />

        {/*Product id, title, price, image*/}
        <div className="home_row">
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>

        <div className="home_row">
        <Product id="121245"
        title="Zotac GeForce GTX 1050 Ti OC Edition ZT-P10510B-10L 4GB PCI Express Graphics Card"
        price={11805}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/8115eX%2BWTcL._SL1500_.jpg"
        />
        <Product id="232112"
        title="ASUS TUF Gaming FX505DT 15.6 FHD 120Hz Laptop GTX 1650 4GB Graphics"
        price={60990}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/815K4p82zlL._SL1500_.jpg"
        />
        <Product id="23321"
        title="TP-Link TL-WN725N 150Mbps Wireless N Nano USB Adapter (Black)"
        price={499.00}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/815ePlvtL9L._SL1500_.jpg"
        />
        </div>

        <div className="home_row">
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        </div>
        {/*Product */}
    </div>
  );
}

export default Home
