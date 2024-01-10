import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/reactweb.png'
import IMG2 from '../../assets/themedev.png'
import IMG3 from '../../assets/laravel.png'
import IMG4 from '../../assets/h4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Based Restaurant Management System',
    github: 'https://github.com/galib3333/gourmet_react',
    demo: 'https://gourmetgrove.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'WordPress Theme Development',
    github: 'https://github.com/galib3333',
    demo: 'https://wdpf54.tech/theme_dev'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Laravel Based Hospital Management System',
    github: 'https://github.com/galib3333/hmsclass',
    demo: 'https://wdpf54.tech/hms/login'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PHP Based Hospital Management System',
    github: 'https://github.com/galib3333/hmsclass',
    demo: 'https://hospital.wdpf54.tech/admin/login.php'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coming Soon',
    github: 'https://github.com/galib3333/hmsclass',
    demo: 'https://hospital.wdpf54.tech/admin/login.php'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coming Soon ',
    github: 'https://github.com/galib3333/hmsclass',
    demo: 'https://hospital.wdpf54.tech/admin/login.php'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
