
import NavbarComponent from './NavbarComponent'
import './css/header.css'
function HeaderComponent() {
  return (
    <>
      <header className='container_header'>
        <div>
          <h1>Rapid Post Food Fast</h1>
          <p>De un Post a tu Mesa <span>🍿</span></p>
        </div>
      </header>
      <NavbarComponent/>
    </>
  )
}

export default HeaderComponent
