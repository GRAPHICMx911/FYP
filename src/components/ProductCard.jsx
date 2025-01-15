import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <div className="product-card-view bg-white">
                    <Link to="/product/product/:id" className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <Link to="#">
                                <img src="images/wish.svg" alt="wishlist" />
                            </Link>
                        </div>
                        <div className="product-img">
                            <img src="images/watch.jpg" className="img-fluid" alt="Product images" />
                            <img src="images/watch1.jpg" className="img-back img-fluid" alt="Product images" />
                        </div>
                        <div className="product-details ms-2">
                            <h6 className="brands mt-2 ms-2">Havels</h6>
                            <h5 className="product-title">
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"} ms-2`}>
                                At verso eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti quos dolores et quas molestias excepturi sint occaecati cupidiate non provident, similique sunt...
                            </p>
                            <p className="price ms-2">$100.00</p>
                        </div>
                        <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                                <Link to="#">
                                    <img src="images/add-cart.svg" alt="add to cart" />
                                </Link>
                                <Link to="#">
                                    <img src="images/view.svg" alt="view" />
                                </Link>
                                <Link to="#">
                                    <img src="images/prodcompare.svg" alt="product compare" />
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <div className="product-card-view bg-white">
                    <Link to="#" className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <Link to="#">
                                <img src="images/wish.svg" alt="wishlist" />
                            </Link>
                        </div>
                        <div className="product-img">
                            <img src="images/watch.jpg" className="img-fluid" alt="Product images" />
                            <img src="images/watch1.jpg" className="img-back img-fluid" alt="Product images" />
                        </div>
                        <div className="product-details ms-2">
                            <h6 className="brands mt-2 ms-2">Havels</h6>
                            <h5 className="product-title">
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                At verso eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti quos dolores et quas molestias excepturi sint occaecati cupidiate non provident, similique sunt...
                            </p>
                            <p className="price ms-2">$100.00</p>
                        </div>
                        <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                                <Link to="#">
                                    <img src="images/add-cart.svg" alt="add to cart" />
                                </Link>
                                <Link to="#">
                                    <img src="images/view.svg" alt="view" />
                                </Link>
                                <Link to="#">
                                    <img src="images/prodcompare.svg" alt="product compare" />
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
