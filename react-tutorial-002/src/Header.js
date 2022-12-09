import { Link } from 'react-router-dom'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const Header = ({ title, width }) => {
  return (
    <header className="Header">
        <h1><Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }} >{title}</Link></h1>
        {width < 768 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header