import { Link, Outlet } from 'react-router-dom';

function Navigation () {
    return (
        <> 
            <div>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
            </div>
            <Outlet />
        </>
    )
}
export default Navigation;