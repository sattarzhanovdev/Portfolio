import React from 'react'
import c from './banner.module.scss'
import bannerIcon from '../../icons/memoji/image.jpg'

import instagram from '../../icons/social/instagram.svg'
import telegram from '../../icons/social/telegram.svg'
import linkedin from '../../icons/social/Linkedin.svg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className={c.banner__container}>
      <div className={c.banner}>
        <h1>Hi, I'm Daniel, a special human with some ability to love learning and working on teamwork.</h1>
        <div className={c.biography}>
          <div className={c.icon}>
            <div className={c.image}>
              <img  
                src={bannerIcon}
                alt="✌️"
              />
            </div>
          </div>
          <div className={c.info}>
            <h3>Biography</h3>
            <p>
              <span>Daniel Sattarzhanov</span> is a driven IT and business student, currently in his second year at the Salymbekov International College of IT and Business. As the founder of <span>DevDesign</span>, he has completed ten projects over the past year, working as both a <span>project manager</span> and <span>frontend developer</span>. With experience at <span>ITEK</span> and <span>CRYXXEN</span>, he has built skills in technical specifications, teamwork, and client relations, making him a promising talent in the IT industry.            
            </p>
          </div>
          <div className={c.socials}>
            <h3>
              Lets connect
            </h3>
            <div className={c.icons}>
              <div>
                <Link to={'https://instagram.com/sattarzanovv'}>
                  <img 
                    src={instagram}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://instagram.com/sattarzanovv'}>
                  <img 
                    src={telegram}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://instagram.com/sattarzanovv'}>
                  <img 
                    src={linkedin}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner