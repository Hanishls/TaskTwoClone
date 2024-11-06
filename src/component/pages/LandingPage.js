import React from 'react'
import Header from '../DefaultComponent/Header'
import Assets from '../assets/Assets'
import '../css/layout.css'
const LandingPage = () => {
  return (
    <div className= 'bg-dark text-white '>
        <div className='bacground'>
        <Header/>
        <div className='padingLayout'> 
            <h1> Best <img src={Assets.sideImg} className='img' alt='loading...'/></h1>
            <h1>Digital Solutions</h1>
            <h1>Place for Creative</h1>
        </div>
        </div>
        <div className='row'>
            <div className='col para'>
            <p >Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs.</p>
            <img src={Assets.arror} alt='loading..'></img><br></br>
            <button className='p-3 btn btn-success'>GET STARTED</button>
            <button className='m-4 p-3 btn btn-success'>SEE PRICING</button>
            </div>
            <div className='col grpImg'>
            <img src={Assets.GroupImg} alt='loading..' className='groupimg'></img>
            </div>
            <div className='col btnn' >
                <button className=' btn btn-success button-pill'><i class="fa-solid fa-arrow-up"></i>Explore More</button>
            </div>  
            <div className='row'>
                <div className='col'>
                    <img className='personImg' src={Assets.person} alt='loading...'></img>
                </div>
                <div className='col contenbox '>
                    <div className='borderbox'>
                    <h2>Establish Your Business’s Online Presence🥇</h2>
                    <hr></hr>
                    <p>Improve your business website’s online presence with the unique integration of digital marketing features. Show up your online strength to achieve your virtual goal.</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <h3>Here are Numerous Topics That</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <h2>Will Enhance Your Skills</h2>
            </div>
            <div >
                <ul className='d-flex justify-content-center list-unstyled '>
                    <li><button className='btn btn-light shadow-lg  mx-5 button-pill'>Bootstrap</button></li>
                    <li><button className='btn btn-light mx-5 button-pill'>HTML</button></li>
                    <li><button className='btn btn-light mx-5 button-pill'>CSS</button></li>
                    <li><button className='btn btn-light mx-5 button-pill '>javascript'</button></li>
                </ul> 
            </div>
            <div >
                <ul className='d-flex justify-content-center list-unstyled '>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>React</button></li>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>WordPress</button></li>
                    </ul>
            </div>
            <div >
                <ul className='d-flex justify-content-center list-unstyled '>
                    <li><button className='btn btn-light mx-5  mt-0 button-pill'>PHP</button></li>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>Node.js</button></li>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>Saas</button></li>
                    <li><button className='btn btn-light mx-5  mt-0 button-pill'>Angular</button></li>
                    <li><button className='btn btn-light mx-5  mt-0 button-pill'>Shopify</button></li>
                </ul>
            </div>
            <div >
                <ul className='d-flex justify-content-center list-unstyled '>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>Shopify</button></li>
                    <li><button className='btn btn-light mx-5 mt-0 button-pill'>Vue.js</button></li>
                </ul>
            </div>
            <div>
                <h3>Our Services</h3>
            </div>
        </div>
    </div>
  )
}

export default LandingPage