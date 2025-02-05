import React from 'react';
import { Link } from "react-router-dom";


const BlogCard = () => {
  return (
   <>
    <div className="blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>1 Dec,2024</p>
            <h5 className='tittle'>
                A Beatuiful Sunday Morning Renaissance
            </h5>
            <p className="description mr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias tempora.</p>
            <Link to="/blog/:id" className='button text-decoration-none'>Read More</Link>
        </div>
   </div>
   </>
  )
};

export default BlogCard;