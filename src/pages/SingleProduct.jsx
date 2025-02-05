import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  return (
   <>
     <Meta title="Product Name"></Meta>
     <BreadCrumb title="Product Name"></BreadCrumb>
     <div className="main-product-wrapper py-5 home-wrapper-2">
     <div className="container-xxl">
      <div className="row">
        <div className="col-6">
            
        </div>
        <div className="col-6">

        </div>
      </div>
     </div>
     </div>
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
   </>
  )
}

export default SingleProduct