import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>User-centric interface design for optimal usability.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Intuitive navigation and seamless user experience.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Visual aesthetics that enhance brand identity.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Wireframing and prototyping for effective design validation.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Accessibility considerations for diverse user needs.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Continuous refinement based on user feedback and analytics.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' /><p>Responsive and dynamic website development.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Customized web solutions tailored to your needs.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Robust backend development for seamless functionality.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Integration of cutting-edge technologies for efficiency.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Cross-browser compatibility and optimal performance.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Secure and scalable web applications.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Ongoing maintenance and support services.</p></li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' /><p>Engaging and impactful content writing for your brand.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Creative storytelling to captivate your audience.</p></li>
            <li><BiCheck className='service__list-icon' /><p>High-quality blog posts and articles tailored to your niche.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Compelling copywriting for marketing materials.</p></li>
            <li><BiCheck className='service__list-icon' /><p>Social media content that drives engagement and visibility.</p></li>
            <li><BiCheck className='service__list-icon' /><p>SEO-optimized content for improved online visibility.</p></li>
          </ul>
        </article>

        {/* END OF Content Creation */}

      </div>
    </section>
  )
}

export default Services
