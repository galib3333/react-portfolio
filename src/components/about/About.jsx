import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__contact">
          <div className="about__cards">
            <article className="about__card">
            <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
            <FiUsers />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, magni qui! Aspernatur accusantium dolore sit laborum culpa nobis voluptatem placeat in obcaecati, eaque rem dolorum nihil eum ex, explicabo quam.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About