import React from 'react'
import c from './project.module.scss'
import { useNavigate } from 'react-router-dom'

const Project = ({item}) => {
  const Navigate = useNavigate()

  return (
    <div className={c.project}>
      <div className={c.left}>
        <img src={item.image2} alt="image" />
      </div>
      <div className={c.right}>
        <div className={c.stacks}>
          {
            item.stacks.map(stack => (
              <p>{stack}</p>
            )) 
          }
        </div>
        <h2>{item.title}</h2>
        <button
          onClick={() => {
            window.open(item.link)
          }}
        >
          View
        </button>
      </div>
    </div>
  )
}

export default Project