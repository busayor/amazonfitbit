import React from 'react';

import classes from './TopBar.module.css'

const TopBar = () => {
    return(
      <header>
        <nav className={classes.Topbar}>
          <img src="https://pnglux.com/wp-content/uploads/2021/03/Amazon-logo-PNG-Transparent-HD.png" alt="Amazon Logo"/>
        </nav>
      </header>
    )
}

export default TopBar