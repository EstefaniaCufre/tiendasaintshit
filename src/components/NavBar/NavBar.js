import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <img className="banner" src="/assets/logo.jpg" alt="banner"/>
            <ul className="navbar-primary">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Cómo comprar</li>
            </ul>
        </div>
    )
}

export default NavBar