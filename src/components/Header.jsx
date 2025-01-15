import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white text-center mb-0">
                Free shipping over $100 & free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-center text-white mb-0">
                Hotline:
                <a className="text-white text-decoration-none" href="tel:+92 888 1338 8193">
                  +92 888 1338 8193
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-uper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 header2">
              <h5>
                <p className="text-white text-center logo-name mt-2">
                 <img src="images\Logo.png" className="logo" alt="" /> TrustBridge
                </p>
              </h5>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-5"></BsSearch>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d.flex align-items-center jusify-content-between">
                <div className="d-flex align-items-center ms-2 header-link">
                  <Link to='/compare-product' className="d-flex align-item-center gap text-white">
                    <img className="mt-2" src="images\Compare Product.svg" alt="compare" />
                    <p>
                      Compare <br />
                      Product
                    </p>
                  </Link>
                </div>
                <div className="d-flex align-items-center ms-2 header-link">
                  <Link to='/wishlist' className="d-flex align-item-center gap text-white">
                    <img  className="mt-2" src="images\Wishlist.svg" alt="wislist" />
                    <p>
                      Favorite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div className="d-flex align-items-center ms-2 header-link">
                  <Link to='/login' className="d-flex align-item-center gap text-white">
                    <img  className="mt-2" src="images\Login.svg" alt="login" />
                    <p>
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div className="d-flex align-items-center ms-2 header-link">
                  <Link to='/cart' className="d-flex align-item-center gap text-white">
                    <img  className="mt-1" src="images\cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark ms-2">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                       className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                       type="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                    >
                      <img  className="shopCat ms-4"
                        src="images\shop categories.svg" alt="" />
                       <span className="ms-3 me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 header-link">
                    <NavLink className="navlink " to="/home">Home</NavLink>
                    <NavLink className="navlink " to="/store">Our Store</NavLink>
                    <NavLink className="navlink " to="/">Products</NavLink>
                    <NavLink className="navlink " to="/blogs">Blog</NavLink>
                    <NavLink className="navlink " to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
