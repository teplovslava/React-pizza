import React from 'react'
import style from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
    <div>
      <h1 className={style.root}>
        <span>
            😕
        </span>
        <br/>
        OOOPS!
      </h1>
      <p className={style.descr}>404 Not Found</p>
    </div>
  )
}

export default NotFoundBlock