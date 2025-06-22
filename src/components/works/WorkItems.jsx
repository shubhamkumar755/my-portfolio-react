import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
      <a href={item.link} target='#'>
        <h3 className="work__title">{item.title}</h3>
      </a>
      <a href={item.github} target='#' className="work__button">
        Github
      </a>
    </div>
  )
}

export default WorkItems
