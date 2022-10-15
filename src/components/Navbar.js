// Library imports
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'

// User defined imports
import { ThemeContext } from '../context/ThemeContext'

// Navbar component
const Navbar = () => {

  const { isNight, setIsNight } = useContext( ThemeContext )

  return (
    <nav className='nav'>
        <Link to='/' className='logo'>
          <img src='/res/icons/logo.svg' alt='Sense Stocks Logo'/>
          <span>SenseStocks</span>
        </Link>

        <ReactSwitch 
          onChange={setIsNight} checked={isNight}
          offColor='#F7F7F7' onColor='#332823'
          checkedHandleIcon={<img src='/res/icons/night.svg' alt='Night'/>}
          uncheckedHandleIcon={<img src='/res/icons/day.svg' alt='Day'/>}
          checkedIcon={false}
          uncheckedIcon={false}
          className='day-night-switch'
        />
    </nav>
  )
}

export default Navbar