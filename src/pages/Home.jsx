import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
<section className="home-wrapper-1 py-3">
<div className="container-xxl">
  <div className="row">
    <div className="col-6">
      <div className="main-banner p-3">
        <img src="images\main-banner-1.jpg" className="img-fluid rounded-3" alt="main-banner" />
        <div className="main-banner-content position-absolute mt-4">
          <h4>SUPERCHARGED FOR PROS.</h4>
          <h5>iPad S13+ Pro.</h5>
          <p>From $999.00 or 41.62/mo</p>
          <Link className="button text-decoration-none">BUY NOW</Link>
        </div>
      </div>
    </div>

    <div className="col-6 cards">
      <div className="div d-flex flex-wrap justify-content-between align-item-center">
      <div className="small-banner p-3">
        <img src="images\catbanner-01.jpg" className="img-fluid rounded-3" alt="main-banner" />
        <div className="small-banner-content position-absolute">
          <h4>Best Sale</h4>
          <h5>Laptop Max</h5>
          <p>$64.62/mo.</p>
        </div>
      </div>
      <div className="small-banner p-3">
        <img src="images\catbanner-02.jpg" className="img-fluid rounded-3" alt="main-banner" />
        <div className="small-banner-content-1 position-absolute">
          <h4>new arrivals</h4>
          <h5>Buy iPad Air</h5>
          <p>From $599 or</p>
          <p className="card-para"> $49.91/mo. for 12 mo. *</p>
        </div>
      </div>
      <div className="small-banner p-3 card-3">
        <img src="images\catbanner-03.jpg" className="img-fluid rounded-3" alt="main-banner" />
        <div className="small-banner-content-2 position-absolute">
          <h4>15%</h4>
          <h5>Smartwatch 7</h5>
          <p>Shop the latest band</p>
            <p className="card-para">styles and colors.</p>
        </div>
      </div>
      <div className="small-banner p-3 card-3">
        <img src="images\catbanner-04.jpg" className="img-fluid rounded-3" alt="main-banner" />
        <div className="small-banner-content-3 position-absolute">
          <h4>Free engraving</h4>
          <h5>AirPods Max</h5>
          <p>High-fidelity playback</p>
          <p className="card-para">& ultra-low distortion</p>
        </div>
      </div>
      </div>
    </div>
    
  </div>
</div>
</section>

<section className="home-wrapper-2 py-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <div className="services d-flex align-items-center justify-content-between home-content-wrapper">
          <div className="d-flex align-items-center gap-10 ms-5">
            <img src="images\service.png" alt="services" />
            <div>
          <h6>Free Shipping</h6>
          <p className="mb-0 section-2-para">From all order over $5</p>
          </div>
          </div>
          <div className="d-flex align-items-center gap-10">
            <img src="images\service-02.png" className="section-2-icon" alt="services" />
            <div>
          <h6>Support 24/7</h6>
          <p className="mb-0 section-2-para">Shop with an expert</p>
          </div>
          </div>
          <div className="d-flex align-items-center gap-10">
            <img src="images\service-03.png" className="section-2-icon" alt="services" />
            <div>
          <h6>Daily Surprise Offer</h6>
          <p className="mb-0 section-2-para">Save upto 25% off</p>
          </div>
          </div>
          <div className="d-flex align-items-center gap-10">
            <img src="images\service-04.png" className="section-2-icon" alt="services" />
            <div>
          <h6>Affordable Prices</h6>
          <p className="mb-0 section-2-para">Get Factory direct price</p>
          </div>
          </div>
          <div className="d-flex align-items-center gap-10 section-2-icon-5">
            <img src="images\service-05.png" alt="services" />
            <div>
          <h6>Secure Payments</h6>
          <p className="mb-0 section-2-para">100% Protected Payments</p>
          </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</section>
 
<section className="home-wrapper-2 py-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <div className="categories d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Cameras</h6>
            <p>10 Item</p>
          </div>
        <img src="images\camera.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Smart TV</h6>
            <p>10 Item</p>
          </div>
        <img src="images\tv.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Speackers</h6>
            <p>10 Item</p>
          </div>
        <img src="images\speaker.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Home Appliances</h6>
            <p>10 Item</p>
          </div>
        <img src="images\homeapp.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Head Phone</h6>
            <p>10 Item</p>
          </div>
        <img src="images\headphone.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Mobile & Tablets</h6>
            <p>10 Item</p>
          </div>
        <img src="images\Mobile.png" className="mobile-img" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Accessories</h6>
            <p>10 Item</p>
          </div>
        <img src="images\acc.jpg" alt="camera" />
        </div>
        <div className="d-flex gap-15 align-items-center">
          <div>
            <h6>Smart Watch</h6>
            <p>10 Item</p>
          </div>
        <img src="images\watch.png" className="watch-img ms-2"  alt="camera" />
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="feature-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading ms-4"><b>Featured Collection</b></h3>
      </div>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    </div>
  </div>
</section>

<section className="famous-wrapper py-5 home-wrappper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-3">
        <div className="famous-card postion-relative ">
          <img src="images/watch-02.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
        <h5>BIG SCREEN</h5>
        <h6>Smart Watch Series 7</h6>
        <p>From $399 or $16.62/mo. for 24 mo.</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card postion-relative ">
          <img src="images/laptop-02.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content-2 position-absolute">
        <h5>STUDIO DISPLAY</h5>
        <h6>600 nits for Brightness</h6>
        <p>27-inch 5k Retina Display</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card postion-relative ">
          <img src="images/mobile-02.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content-3 position-absolute">
        <h5>SMARTPHONES</h5>
        <h6>SmartPhone 13 Pro.</h6>
        <p>Now in Green. From $999.00 or</p>
        <p className="para-line">$41.62/mo. for 24 mo. Footnote.</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card postion-relative ">
          <img src="images/specker-02.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content-4 position-absolute">
        <h5>HOMESPEAKERS</h5>
        <h6>Room-Filling Sound</h6>
        <p>From $699 or $116.58/mo. for 12 mo.</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="special-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
    <div className="col-12">
        <h3 className="section-heading ms-4"><b>Special Products</b></h3>
      </div>
      </div>
      <div className="row">
      <SpecialProduct></SpecialProduct>
      <SpecialProduct></SpecialProduct>
      <SpecialProduct></SpecialProduct>
      <SpecialProduct></SpecialProduct>
    </div>
  </div>
</section>

<section className="popular-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading ms-4"><b>Our Popular Product</b></h3>
      </div>
    </div>
    <div className="row">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  </div>
</section>

<section className="marquee-wrapper py-5">
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <div className="marquee-inner-wrapper card-wrapper">
      <Marquee className="d-flex">
      <div className="mx-5">
        <img src="images/brand-01.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-02.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-03.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-04.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-05.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5 ">
        <img src="images/brand-06.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-07.png" className="marquee-img" alt="brand" />
      </div>
      <div className="mx-5">
        <img src="images/brand-08.png" className="marquee-img" alt="brand" />
      </div>
</Marquee>
      </div>
    </div>
  </div>
</div>
</section>

<section className="blog-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading ms-4"><b>Our Latest Blogs</b></h3>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
      <BlogCard></BlogCard>
      </div>
      <div className="col-3">
      <BlogCard></BlogCard>
      </div> 
      <div className="col-3">
      <BlogCard></BlogCard>
      </div> 
      <div className="col-3">
      <BlogCard></BlogCard>
      </div>
    </div>
  </div>
</section>


    </>
  )
};

export default Home;