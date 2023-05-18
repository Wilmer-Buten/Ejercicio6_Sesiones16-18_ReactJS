import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const user = localStorage.getItem('credentials');

    const logout = () => {
        localStorage.clear();
    }

    return (
        <div>
            {<Link to={'/home'}>|HOME|</Link>}
            {user !== null && (
                <>
                <Link to={'/tasks'}>|TASKS|</Link>
                <Link to={'/dashboard'}>|DASHBOARD|</Link>
                </>
            )}
            {user !== null ? <Link style={{'color':'tomato'}} onClick={logout} to={'/'}>|LOGOUT|</Link> : <Link to={'/login'}>|LOGIN|</Link>}
            {user === null && <Link to={'/register'}>|REGISTER|</Link>}
        </div>

    )
}

export default Navbar;