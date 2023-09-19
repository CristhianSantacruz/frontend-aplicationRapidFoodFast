import {Link} from 'react-router-dom'
import './css/header.css'
function NavbarComponent() {
  return (
    <div>    
      <nav className='navbar'>
        <Link to="/" className='button_nav'>Inicio</Link>
        <Link to="/add-food" className='button_nav'>Agregar Post</Link>
        <Link to="/author" className='button_nav'>Author</Link>
      </nav>
    </div>
  )
}

export default NavbarComponent
