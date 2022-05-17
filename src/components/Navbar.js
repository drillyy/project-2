import logo from '../images/logo.png';

export default function Navbar () {
    return (
        <nav>
            <img className='navbar--logo' src={logo} alt="logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}