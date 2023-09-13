import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="controls">
                <div className="" onClick={() => navigate('/ticket')}>➕</div>
                <div className="" onClick={() => navigate('/')}>🔙</div>

            </div>
        </nav>
    )
}

export default NavBar