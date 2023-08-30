import React from 'react'
import c from './mySkills.module.scss'
import SkillsCard from './skillsCard'
import { MySkillsList } from '../../utils'

const MySkills = () => {
  return (
    <div className={c.skills__container}>
      <div className={c.skills}>
        <div className={c.left}>
          <h3>What I do</h3>
          <p>
            Build and maintain websites, frontend developer FTW. I also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.
          </p>
        </div>
        <div className={c.right}>
          {
            MySkillsList.map(item => <SkillsCard item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MySkills