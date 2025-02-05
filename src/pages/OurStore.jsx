import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
    <Meta title="Our Store"></Meta>
    <BreadCrumb title="Our Store"></BreadCrumb>
    <div className="store-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                 <div className='filter-card mb-3'>
                  <h3 className="filter-title">
                    Shop By Categories
                  </h3>
                  <div>
                    <ul className='ps-0'>
                      <li>Watch</li>
                      <li>TV</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                 </div>
                 <div className='filter-card mb-3'>
                  <h3 className="filter-title">
                    Filter By
                  </h3>
                  <div>
                    <h5 className="sub-title">Availability</h5>
                    <div>
                      <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">In Stock (1)</label>
                    </div>
                    <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id=""  />
                    <label className="form-check-label" htmlFor="">Out of Stock (0)</label>
                    </div>
                    </div>
                      <h5 className="sub-title">Price</h5>
                      <div className='d-flex align-items-center gap-10'>
                      <div className="form-floating">
                       <input type="email" class="form-control"
                       id="floatingInput" placeholder="From" value="" />
                      <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating">
                       <input type="email" class="form-control" id="floatingInput" placeholder="To" value="" />
                      <label htmlFor="floatingInput">To</label>
                      </div>
                      </div>

                      <h5 className="sub-title">Colors</h5>
                        <div>
                          <ul className='color'>
                            <li className='color-1'></li>
                            <li className='color-2'></li>
                            <li className='color-3'></li>
                            <li className='color-4'></li>
                            <li className='color-5'></li>
                            <li className='color-6'></li>
                            <li className='color-7'></li>
                            <li className='color-8'></li>
                            <li className='color-9'></li>
                            <li className='color-10'></li>
                            <li className='color-11'></li>
                            <li className='color-12'></li>
                            <li className='color-13'></li>
                            <li className='color-14'></li>
                          </ul>
                      </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                      <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id="" />
                    <label className="form-check-label" htmlFor="">S (2)</label>
                    </div>
                    <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id=""  />
                    <label className="form-check-label" htmlFor="">M (2)</label>
                    </div>
                    <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id=""  />
                    <label className="form-check-label" htmlFor="">L (2)</label>
                    </div>
                    <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id=""  />
                    <label className="form-check-label" htmlFor="">XL (2)</label>
                    </div>
                    <div className='form-check'>
                    <input type="checkbox" className="form-check-input" value="" id=""  />
                    <label className="form-check-label" htmlFor="">XXL (2)</label>
                    </div>
                  </div>
                  </div>
                 </div>

                 <div className='filter-card mb-3'>
                  <h3 className="filter-title">
                    Product Tags
                  </h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Airpods
                      </span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptop
                      </span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                      </span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Wire
                      </span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Speacker
                      </span>
                      <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    HeadPhone
                      </span>
                    </div>
                  </div>
                 </div>
                 <div className='filter-card mb-3'>
                  <h3 className="filter-title">
                    Random Product
                  </h3>
                  <div>
                    <div className="random-products mb-3 mt-2 d-flex">
                    <div className="w-25">
                      <img src="images/watch.jpg" className='random-product-img' alt="watch" />
                    </div>
                    <div className="w-50 ms-3 mt-1">
                    <h5>Kids watch bulk 10 pack multi colored for students</h5>
                    <ReactStars count={5} value={4} size={24} edit={false} activeColor="#ffd700" />
                    <b>$ 300</b>
                    </div>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-25">
                      <img src="images/watch.jpg" className='random-product-img' alt="watch" />
                    </div>
                    <div className="w-50">
                    <h5>Kids watch bulk 10 pack multi colored for students</h5>
                    <ReactStars count={5} value={4} size={24} edit={false} activeColor="#ffd700" />
                    <b>$ 300</b>
                    </div>
                    </div>
                 </div>
                </div>

            <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-10'>
                <p className='mb-0 grid-text'>
                  Sort By :
                </p>
                <select name="" className='form-control form-select' id="">
                  <option value="manual" className='grid-select-text'>Featured</option>
                  <option value="best-selling" selected="selected" className='grid-select-text'>Best Selling</option>
                  <option value="title-ascending" className='grid-select-text'>Alphabetically, A-Z</option>
                  <option value="title-descending" className='grid-select-text'>Alphabetically, Z-A</option>
                  <option value="price-ascending" className='grid-select-text'>Price, Low to High</option>
                  <option value="price-descending" className='grid-select-text'>Price, High to Low</option>
                  <option value="created-ascending" className='grid-select-text'>Date, Old to New</option>
                  <option value="created-descending" className='grid-select-text'>Date, New to Old</option>
                </select>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <p className="totalproduct mb-0 grid-text">21 Products</p>
                <div className="d-flex gap-10 align-items-center grid">
                <img src="images/gr4.svg" 
                        onClick={() => {setGrid(3)}}
                        className='d-block img-fluid ms-2' alt="grid" />
                      <img src="images/gr3.svg" 
                        onClick={() => {setGrid(4)}}
                        className='d-block img-fluid' alt="grid" />
                      <img src="images/gr2.svg" 
                        onClick={() => {setGrid(6)}}
                        className='d-block img-fluid' alt="grid" />
                      <img src="images/gr.svg" 
                        onClick={() => {setGrid(12)}}
                        className='d-block img-fluid' alt="grid" />
                </div>
              </div>
              </div>
            </div>
            <div className="products-list pb-5">
             <div className="d-flex gap-10 flex-wrap">
             <ProductCard grid={grid} />
             <ProductCard grid={grid} />
             <ProductCard grid={grid} />
             </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default OurStore;