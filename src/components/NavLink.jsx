import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    // className={({isPending})=>isPending ? 'loader' : null} 
                    to='/movies'>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}