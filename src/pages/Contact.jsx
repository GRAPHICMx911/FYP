import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io"
import { IoMdMail } from "react-icons/io";
import { FaInfo } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <Meta title="Contact Us"></Meta>
    <BreadCrumb title="Contact Us"></BreadCrumb>
    <div className="contact-wrapper py-4 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53789.94470756762!2d71.51413536397531!3d32.58294970265709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39271820c5ae398d%3A0x93a7da7672fc2613!2sMianwali%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736140034233!5m2!1sen!2s"
          width="600" 
          height="450" 
          className='border-0 w-100'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-3">Contact</h3>
                <form action="" className='flex-colomn gap-15'>
                  <div>
                    <input type="text" className='form-control mb-2' placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className='form-control mb-2' placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className='form-control mb-2' placeholder='Mobile Number' />
                  </div>
                  <div>
                    <textarea name="" id="" className='w-100 form-control mb-2' placeholder='Comments' cols="30" rows="4">
                  </textarea>                
                  </div>
                  <button className='button border-0'> 
                  Submit
                  </button>
                </form>
              </div>
              <div>
                <h3 className="contact-title">
                  Get in Touch with Us
                </h3>
                <div className=''>
                  <ul className='ps-0'>
                    <li className='mb-0 gap-15 d-flex align-items-center'>
                    <FaHome className='fs-5 mt-3' />
                    <address className='mb-0 mt-3'>PMAS Arid Agriculture University, Near Shamsabad Metro Station, Rawalpindi</address>
                    </li>
                    <li className='mb-3 gap-15 d-flex align-items-center'>
                    <IoIosCall className='fs-5 mt-3' />
                    <a href="tel: +92 302 2309111" className='text-decoration-none mt-3'>+92 302 2309111
                    </a>
                    </li>
                    <li className='mb-2 gap-15 d-flex align-items-center'>
                    <IoMdMail className='fs-5'/>
                    <a href="mailto:graphicmx911@gmail.com" className='text-decoration-none iconText'>
                      graphicmx911@gmail.com
                    </a>
                    </li>
                    <li className='mb-3 gap-15 d-flex align-items-center'>
                    <FaInfo className='fs-5' />
                    <p className='mb-0'>Monday - Friday 11 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact