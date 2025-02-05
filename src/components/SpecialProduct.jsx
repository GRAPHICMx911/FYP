import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <>
    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Havels</h5>
                    <h6 className="title">
                        Sumsung Galaxy Mobile Phone Sim ...
                        </h6>
                         <ReactStars count={5} value={4} size={24} edit={false} activeColor="#ffd700" />

                    <p className="price">
                        <span className="red-p">$100</span> &nbsp;
                        <strike>$200</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center'>
                            <p className='mb-0'><b>5</b>days</p>&nbsp;
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-warning bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-warning bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-warning bg-danger'>1</span>
                            </div>
                        </div>
                        <div className="prod-count my-4">
                                <p>Products: 5</p>
                                <div class="progress">
                                <div class="progress-bar" 
                                role="progressbar" 
                                style={{width: "25%"}}
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                                </div>
                                </div>
                            </div>
                            <Link className="button text-decoration-none">Add to Cart</Link>
                            <br />
                            <br />
                        </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default SpecialProduct;