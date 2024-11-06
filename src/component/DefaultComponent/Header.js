import React from 'react'
import Assets from '../assets/Assets'
import '../css/header.css'
const Header = () => {
  return (
        <header className='bg-dark text-white'>
            <nav>
                <ul  className='d-flex justify-content-evenly list-unstyled fw-bold allign-items-center p-4 '>
                    <img src={Assets.vDigitImg} alt='Loading...' className='vDigitimg mr-5' ></img>
                    <li className='mt-2 mr-4'>Home</li>
                    <li className='mt-2 mr-4'>About</li>
                    <li className='mt-2'>Services</li>
                    <li className='mt-2'>Products</li>
                    <li className='mt-2'>Contuct Us</li>
                    <li><button className=' btn btn-success p-2'>Let's Talk<i class="fa-solid fa-arrow-up"></i></button></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header