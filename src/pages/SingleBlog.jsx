import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SingleBlog = () => {
  return (
    <>
    <Header></Header>
    <Meta title="Dynaminc Blog Name"></Meta>
    <BreadCrumb title="Dynaminc Blog Name"></BreadCrumb>
    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <div className="single-blog-card">
                    <Link to='/blogs' className='d-flex align-items-center gap-10'> <IoMdArrowRoundBack className='fs-5' /> Go Back to Blogs</Link>
                    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                    <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>      
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default SingleBlog;