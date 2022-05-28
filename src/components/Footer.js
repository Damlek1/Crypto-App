import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h1>De<span className='primary'>Fi</span></h1>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>Contact us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>

            </div>
            <div className='col'>
                <h5>Developer</h5>
                <span className='bar'></span>
                    <a href='/'>Cloud</a>
                    <a href='/'>Commerce</a>
                    <a href='/'>Pro</a>
                    <a href='/'>API</a>

            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>

            </div>
            <div className='col'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='/'><FaFacebook className='icon' /></a>
                    <a href='/'><FaTwitter className='icon' /></a>
                    <a href='/'><FaLinkedin className='icon' /></a>
                    <Link to='//github.com/Damlek1'><a href='/'><FaGithub className='icon' /></a></Link>

            </div>
        </div>

    </div>
  )
}

export default Footer