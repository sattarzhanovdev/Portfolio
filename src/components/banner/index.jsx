import React from 'react'
import c from './banner.module.scss'
import bannerIcon from '../../icons/memoji/✌️.png'

import instagram from '../../icons/social/instagram.svg'
import twitter from '../../icons/social/twitter.svg'
import facebook from '../../icons/social/facebook.svg'

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
              Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on <span>React</span>, <span>UX Research</span> and <span>Agile</span>.
            </p>
          </div>
          <div className={c.socials}>
            <h3>
              Lets connect
            </h3>
            <div className={c.icons}>
              <div>
                <img 
                  src={instagram}
                  alt="instagram"
                />
              </div>
              <div>
                <img 
                  src={twitter}
                  alt="twitter"
                />
              </div>
              <div>
                <img 
                  src={facebook}
                  alt="facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner