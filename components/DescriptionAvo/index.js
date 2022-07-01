import React from 'react'
import style from './style.module.css';

const DescriptionAvo = ({ attributes }) => {
  const keyss = Object.keys(attributes)

  return (
    <div className={style.Description__Container}>
      <h3>About this Avocado</h3>
      <p>{attributes.description}</p>
      <div className={style.Description__Attr}>
        <h4>Attributes</h4>
        <ul className={style.Description__List}>
          {
            keyss.map(
                (el, index) => el === 'description'
                  ? null
                  : <li key={index}>
                    <span>{el}</span>
                    <span>{attributes[el]}</span>
                  </li>
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default DescriptionAvo