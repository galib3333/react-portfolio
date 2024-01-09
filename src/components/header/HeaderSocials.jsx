import React from 'react'
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/asadullah-al-galib-502065202" target='_black'><BsLinkedin /></a>
      <a href="https://www.facebook.com/galib053/" target='_black'><BsFacebook /></a>
      <a href="https://github.com/galib3333" target='_black'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
